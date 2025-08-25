"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Overview() {
  const attemptsRef = useRef<HTMLCanvasElement>(null);
  const revenueRef = useRef<HTMLCanvasElement>(null);
  const heatmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Line Chart (Attempts)
    if (attemptsRef.current) {
      new Chart(attemptsRef.current, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Attempts",
              data: [820, 910, 1002, 980, 1102, 1200, 1005],
              borderColor: "rgb(79,70,229)",
              backgroundColor: "rgba(79,70,229,0.2)",
              tension: 0.3,
            },
          ],
        },
        options: { responsive: true, maintainAspectRatio: false },
      });
    }

    // Bar Chart (Revenue)
    if (revenueRef.current) {
      new Chart(revenueRef.current, {
        type: "bar",
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              label: "Revenue (₹)",
              data: [180000, 210000, 160000, 230000],
              backgroundColor: "rgba(16, 185, 129, 0.6)",
            },
          ],
        },
        options: { responsive: true, maintainAspectRatio: false },
      });
    }

    // Heatmap
    if (heatmapRef.current) {
      heatmapRef.current.innerHTML = ""; // clear previous
      const rows = 5;
      const cols = 6;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const v = Math.random();
          const cell = document.createElement("div");
          cell.className = "h-8 rounded-md";
          cell.style.background = `rgba(79,70,229,${0.15 + 0.6 * (1 - v)})`;
          heatmapRef.current.appendChild(cell);
        }
      }
    }
  }, []);

  return (
    <section id="overview" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
        <div className="flex items-center gap-2">
          <button className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50">
            Export Report
          </button>
          <button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-2 text-sm font-semibold text-white shadow hover:from-indigo-600 hover:to-violet-700">
            New Announcement
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="text-sm text-slate-500">Active Users</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-3xl font-bold">12,438</div>
            <div className="text-xs font-medium text-emerald-600">+4.2% WoW</div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="text-sm text-slate-500">Today’s Attempts</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-3xl font-bold">1,102</div>
            <div className="text-xs font-medium text-emerald-600">+2.1% DoD</div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="text-sm text-slate-500">Revenue (MTD)</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-3xl font-bold">₹ 7.8L</div>
            <div className="text-xs font-medium text-rose-600">−1.4%</div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="text-sm text-slate-500">Popular Course</div>
          <div className="mt-2 text-3xl font-bold">SSC CGL</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft h-64">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">Attempts (Daily)</h3>
            <button className="text-xs text-slate-500 hover:underline">View details</button>
          </div>
          {/* ✅ FIX: use ref here */}
          <canvas ref={attemptsRef} className="h-full w-full"></canvas>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft h-64">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">Revenue (Weekly)</h3>
            <button className="text-xs text-slate-500 hover:underline">View details</button>
          </div>
          {/* ✅ FIX: revenue chart added */}
          <canvas ref={revenueRef} className="h-full w-full"></canvas>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">Performance Heatmap</h3>
            <button className="text-xs text-slate-500 hover:underline">Download</button>
          </div>
          {/* ✅ FIX: use ref for heatmap */}
          <div ref={heatmapRef} className="grid grid-cols-6 gap-1"></div>
          <div className="mt-2 grid grid-cols-6 text-center text-xs text-slate-500">
            <span>Math</span>
            <span>Reasoning</span>
            <span>English</span>
            <span>GK</span>
            <span>CA</span>
            <span>CSAT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
