"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  Zap,
  History,
  RefreshCw,
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Download,
  Filter,
} from "lucide-react";

const transactions = [
  {
    id: "txn_01",
    type: "credit",
    description: "Credit top-up — $50.00",
    amount: "+$50.00",
    date: "2026-05-19T14:30:00Z",
    status: "completed",
  },
  {
    id: "txn_02",
    type: "debit",
    description: "API usage — DeepSeek-V3 (12,450 tokens)",
    amount: "-$0.18",
    date: "2026-05-19T13:15:00Z",
    status: "completed",
  },
  {
    id: "txn_03",
    type: "debit",
    description: "API usage — Qwen-Max (8,200 tokens)",
    amount: "-$0.09",
    date: "2026-05-19T12:42:00Z",
    status: "completed",
  },
  {
    id: "txn_04",
    type: "credit",
    description: "Credit top-up — $20.00",
    amount: "+$20.00",
    date: "2026-05-18T09:20:00Z",
    status: "completed",
  },
  {
    id: "txn_05",
    type: "debit",
    description: "API usage — Kimi-K2 (5,800 tokens)",
    amount: "-$0.07",
    date: "2026-05-18T08:55:00Z",
    status: "completed",
  },
  {
    id: "txn_06",
    type: "debit",
    description: "API usage — GLM-4 (32,100 tokens)",
    amount: "-$0.35",
    date: "2026-05-17T18:10:00Z",
    status: "completed",
  },
  {
    id: "txn_07",
    type: "credit",
    description: "Referral bonus",
    amount: "+$5.00",
    date: "2026-05-17T11:00:00Z",
    status: "completed",
  },
  {
    id: "txn_08",
    type: "debit",
    description: "API usage — MiniMax-01 (2,400 tokens)",
    amount: "-$0.03",
    date: "2026-05-16T22:30:00Z",
    status: "completed",
  },
];

const topUpAmounts = [
  { amount: 10, label: "$10", bonus: null },
  { amount: 20, label: "$20", bonus: "+$2 bonus" },
  { amount: 50, label: "$50", bonus: "+$8 bonus" },
  { amount: 100, label: "$100", bonus: "+$20 bonus" },
  { amount: 200, label: "$200", bonus: "+$50 bonus" },
  { amount: 500, label: "$500", bonus: "+$150 bonus" },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function BalanceContent() {
  const [showTopUp, setShowTopUp] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [topUpComplete, setTopUpComplete] = useState(false);

  return (
    <div className="space-y-8">
      {/* Balance Overview Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-line bg-canvas-soft p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-muted">
              Current Balance
            </p>
            <DollarSign size={18} className="text-route" />
          </div>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            $164.28
          </p>
          <p className="mt-1 text-xs text-muted-dark">
            ≈ 1,642,800 tokens @ $0.10/1M
          </p>
        </div>

        <div className="rounded-lg border border-line bg-canvas-soft p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-muted">
              This Month Usage
            </p>
            <Activity size={18} className="text-muted-dark" />
          </div>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            $12.45
          </p>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-amber">
            <TrendingUp size={14} />
            18% vs last month
          </div>
        </div>

        <div className="rounded-lg border border-line bg-canvas-soft p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-muted">
              Total Requests
            </p>
            <Zap size={18} className="text-muted-dark" />
          </div>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            8,642
          </p>
          <p className="mt-1 text-xs text-muted-dark">This billing period</p>
        </div>

        <div className="rounded-lg border border-line bg-canvas-soft p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-muted">
              Avg Cost/Request
            </p>
            <TrendingDown size={18} className="text-route" />
          </div>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            $0.0014
          </p>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-route">
            <TrendingDown size={14} />
            12% vs last month
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setShowTopUp(!showTopUp)}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-flame px-5 text-sm font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20"
        >
          <Plus size={16} />
          Add Credits
        </button>
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-md border border-line bg-canvas-soft px-5 text-sm font-medium text-ink transition hover:border-route/60"
        >
          <Download size={16} />
          Export Invoices
        </button>
      </div>

      {/* Top-Up Panel */}
      {showTopUp && (
        <div className="rounded-lg border border-route/40 bg-canvas-soft p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Add Credits</h2>
            <button
              type="button"
              onClick={() => {
                setShowTopUp(false);
                setTopUpComplete(false);
              }}
              className="text-sm text-muted transition hover:text-ink"
            >
              Cancel
            </button>
          </div>
          {topUpComplete ? (
            <div className="mt-6 rounded-md border border-route/40 bg-route/10 p-6 text-center">
              <CheckCircle2 size={40} className="mx-auto text-route" />
              <p className="mt-3 text-lg font-semibold text-ink">
                Credits Added Successfully
              </p>
              <p className="mt-1 text-sm text-muted">
                ${selectedAmount}.00 has been added to your balance.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {topUpAmounts.map((opt) => (
                  <button
                    key={opt.amount}
                    type="button"
                    onClick={() => setSelectedAmount(opt.amount)}
                    className={`rounded-md border p-4 text-center transition ${
                      selectedAmount === opt.amount
                        ? "border-route/60 bg-route/10"
                        : "border-line bg-canvas hover:border-route/40"
                    }`}
                  >
                    <p className="text-lg font-semibold text-ink">
                      {opt.label}
                    </p>
                    {opt.bonus && (
                      <p className="mt-1 text-xs text-route">{opt.bonus}</p>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-dark">
                    $
                  </span>
                  <input
                    type="number"
                    min={1}
                    value={selectedAmount}
                    onChange={(e) =>
                      setSelectedAmount(Number(e.target.value) || 0)
                    }
                    className="block w-full rounded-md border border-line bg-canvas py-2.5 pl-7 pr-3 text-sm text-ink focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setTopUpComplete(true)}
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-flame px-6 text-sm font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20"
                >
                  <CreditCard size={16} />
                  Pay ${selectedAmount}.00
                </button>
              </div>
            </>
          )}
        </div>
      )}
      {/* Usage Chart (simplified bar) */}
      <div className="rounded-lg border border-line bg-canvas-soft p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-ink">Usage Overview</h2>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-muted">
              <span className="h-2.5 w-2.5 rounded-sm bg-route" />
              Credits
            </span>
            <span className="flex items-center gap-1.5 text-muted">
              <span className="h-2.5 w-2.5 rounded-sm bg-flame/60" />
              Spend
            </span>
          </div>
        </div>
        <div className="mt-5 flex items-end gap-2 h-32">
          {[
            { day: "Mon", credits: 60, spend: 30 },
            { day: "Tue", credits: 75, spend: 25 },
            { day: "Wed", credits: 45, spend: 40 },
            { day: "Thu", credits: 90, spend: 35 },
            { day: "Fri", credits: 55, spend: 50 },
            { day: "Sat", credits: 40, spend: 20 },
            { day: "Sun", credits: 70, spend: 28 },
          ].map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full flex flex-col items-center gap-0.5" style={{ height: 120 }}>
                <div
                  className="w-full max-w-[24px] rounded-t-sm bg-flame/60 transition hover:bg-flame"
                  style={{ height: `${d.spend}%`, marginTop: "auto" }}
                />
                <div
                  className="w-full max-w-[24px] rounded-sm bg-route/60 transition hover:bg-route"
                  style={{ height: `${d.credits}%` }}
                />
              </div>
              <span className="text-[10px] text-muted-dark">{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="rounded-lg border border-line bg-canvas-soft">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-2">
            <History size={18} className="text-muted-dark" />
            <h2 className="text-lg font-semibold text-ink">
              Transaction History
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-canvas px-3 text-xs text-muted transition hover:text-ink"
          >
            <Filter size={12} />
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="px-5 py-3 font-medium text-muted">Description</th>
                <th className="px-5 py-3 font-medium text-muted">Amount</th>
                <th className="px-5 py-3 font-medium text-muted hidden sm:table-cell">
                  Date
                </th>
                <th className="px-5 py-3 font-medium text-muted hidden md:table-cell">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b border-line last:border-0 transition hover:bg-canvas"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                          txn.type === "credit"
                            ? "bg-route/10 text-route"
                            : "bg-canvas-raised text-muted-dark"
                        }`}
                      >
                        {txn.type === "credit" ? (
                          <ArrowDownLeft size={16} />
                        ) : (
                          <ArrowUpRight size={16} />
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-ink">{txn.description}</p>
                        <p className="text-xs text-muted-dark sm:hidden">
                          {formatDate(txn.date)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`font-mono text-sm font-medium ${
                        txn.type === "credit" ? "text-route" : "text-ink"
                      }`}
                    >
                      {txn.amount}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <div>
                      <p className="text-muted-dark">{formatDate(txn.date)}</p>
                      <p className="text-xs text-muted-dark">
                        {formatTime(txn.date)}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden md:table-cell">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-route/10 px-2.5 py-0.5 text-xs font-medium text-route">
                      <CheckCircle2 size={12} />
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-line px-5 py-3 text-center">
          <button
            type="button"
            className="text-sm text-muted transition hover:text-ink"
          >
            View all transactions →
          </button>
        </div>
      </div>
    </div>
  );
}
