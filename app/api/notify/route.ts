import { NextResponse } from "next/server";

const NOTIFY_EMAIL = "ashin@glodrapay.com";
const NOTIFY_ENDPOINT = process.env.INFEROUTE_NOTIFY_ENDPOINT;

const ALLOWED_ORIGINS = new Set([
  "https://inferoute.ai",
  "http://localhost:3000",
  "http://localhost:3002",
]);

const FETCH_TIMEOUT_MS = 5000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface NotifyPayload {
  email: string;
  useCase: string;
  timestamp: string;
}

function logError(message: string, error: unknown): void {
  const errorStr =
    error instanceof Error ? error.message : String(error);

  console.error(
    JSON.stringify({
      level: "error",
      message,
      error: errorStr,
    })
  );
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  rateLimitMap.set(ip, { count: entry.count + 1, resetTime: entry.resetTime });
  return true;
}

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export async function POST(request: Request) {
  // CSRF: validate Origin header
  const origin = request.headers.get("origin");
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Rate limiting
  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  let body: { email?: string; useCase?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, useCase } = body;

  if (!email || !useCase) {
    return NextResponse.json(
      { error: "Email and useCase are required" },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  const payload: NotifyPayload = {
    email,
    useCase,
    timestamp: new Date().toISOString(),
  };

  if (NOTIFY_ENDPOINT) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      await fetch(NOTIFY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: NOTIFY_EMAIL,
          subject: `[inferoute] New API key request from ${email}`,
          text: `Email: ${email}\nWhat are you building?: ${useCase}\nTimestamp: ${payload.timestamp}`,
        }),
        signal: controller.signal,
      });
    } catch (error) {
      logError("Failed to send notification", error);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  return NextResponse.json({ success: true });
}
