"use client";
import { toggleSidebar } from "../../../redux/slices/uiSlice";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Left: Logo + Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-xl  border border-slate-200 bg-white hover:bg-slate-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* ✅ Updated heading */}
            <a
              href="#"
              className="text-lg font-extrabold tracking-tight text-brand-700  text-indigo-700 "
            >
              TestHook Admin
            </a>
            <span className="text-indigo-600 hidden rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 md:inline">
              Next.js 14 • Prototype
            </span>
          </div>

          {/* Right: Role + Notification + User */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 px-2 py-1.5 sm:flex">
              <span className="text-xs text-slate-500">Role</span>
              <select
                id="roleSwitcher"
                className="bg-transparent text-sm focus:outline-none"
              >
                <option>Super Admin</option>
                <option>Content Manager</option>
                <option>Finance Manager</option>
              </select>
            </div>
            <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-2">
              <img
                className="h-9 w-9 rounded-full border"
                src="https://i.pravatar.cc/64?img=12"
                alt="avatar"
              />
              <div className="hidden text-sm leading-tight md:block">
                <div className="font-semibold">A. Sharma</div>
                <div className="text-xs text-slate-500">asharma@admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
