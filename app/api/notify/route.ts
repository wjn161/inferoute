import { NextResponse } from "next/server";

const NOTIFY_EMAIL = "ashin@glodrapay.com";
const NOTIFY_ENDPOINT = process.env.INFEROUTE_NOTIFY_ENDPOINT;

interface NotifyPayload {
  email: string;
  useCase: string;
  timestamp: string;
}

export async function POST(request: Request) {
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

  const payload: NotifyPayload = {
    email,
    useCase,
    timestamp: new Date().toISOString(),
  };

  if (NOTIFY_ENDPOINT) {
    try {
      await fetch(NOTIFY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: NOTIFY_EMAIL,
          subject: `[inferoute] New API key request from ${email}`,
          text: `Email: ${email}\nWhat are you building?: ${useCase}\nTimestamp: ${payload.timestamp}`,
        }),
      });
    } catch (error) {
      console.error("Failed to send notification:", error);
    }
  }

  return NextResponse.json({ success: true });
}
