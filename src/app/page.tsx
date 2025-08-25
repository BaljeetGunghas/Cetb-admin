"use client";

import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Home() {
  const isSidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <div className="font-sans bg-slate-50 text-slate-900">
      <Navbar />

      <div
        className={clsx(
          "mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:px-8 transition-all",
          isSidebarOpen
            ? "lg:grid-cols-[260px_minmax(0,1fr)]" // Sidebar + Content
            : "lg:grid-cols-1" // Only Content
        )}
      >
        {isSidebarOpen && <Sidebar />} {/* 👈 Only show if open */}

        <main className="space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="mt-2 text-sm text-slate-500">
              Welcome to the admin dashboard.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
