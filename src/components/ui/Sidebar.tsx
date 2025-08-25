"use client";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "../../../redux/store";

export default function Sidebar() {
    const isOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

    return (
        <>
            <aside
                className={clsx(
                    " fixed top-20 left-0 z-40 h-[calc(100vh-72px)] w-64 overflow-y-auto rounded-r-2xl border border-slate-200 bg-white p-3 shadow transition-transform duration-300",
                    "lg:sticky lg:top-20",
                    isOpen ? "translate-x-0" : "-translate-x-96 ",
                )}
            >
                <nav className="space-y-1 text-sm">
                    <span>{isOpen ? "Open" : "Closed"}</span>
                    <a href="#overview" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2 4 4 8-8 4 4" /></svg></span>
                        Overview
                    </a>
                    <a href="#users" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a4 4 0 0 0-4-4h-1" /><circle cx="9" cy="7" r="4" /><path d="M3 20v-2a4 4 0 0 1 4-4h4" /></svg></span>
                        Users
                    </a>
                    <a href="#courses" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 19.5V6l8-3 8 3v13.5" /><path d="M12 22V3" /></svg></span>
                        Courses & Subjects
                    </a>
                    <a href="#questions" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 3h18v14H3z" /><path d="M7 21h10" /></svg></span>
                        Question Bank
                    </a>
                    <a href="#tests" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12h6" /><path d="M12 9v6" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg></span>
                        Mock Tests
                    </a>
                    <a href="#current-affairs" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z" /><path d="M8 8h8M8 12h8M8 16h8" /></svg></span>
                        Current Affairs
                    </a>
                    <a href="#payments" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10H3V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><rect x="3" y="10" width="18" height="10" rx="2" /></svg></span>
                        Payments
                    </a>
                    <a href="#analytics" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18" /><path d="M7 13l3 3 7-7" /></svg></span>
                        Analytics
                    </a>
                    <a href="#notifications" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20 8v6a4 4 0 0 1-4 4H7l-4 4V8a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4z" /></svg></span>
                        Comms
                    </a>
                    <a href="#security" className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex h-5 w-5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></span>
                        Security & Audit
                    </a>
                </nav>
            </aside>
        </>
    );
}
