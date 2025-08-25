"use client";

import { useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    lastLogin: string;
    purchases: string;
    status: "Active" | "Banned";
};

const initialUsers: User[] = [
    {
        id: 1,
        name: "Riya Patel",
        email: "riya@example.com",
        role: "Student",
        lastLogin: "2025-08-24 19:21",
        purchases: "SSC CGL 2025",
        status: "Active",
    },
    {
        id: 2,
        name: "Arjun Singh",
        email: "arjun@demo.in",
        role: "Student",
        lastLogin: "2025-08-25 08:04",
        purchases: "Haryana Police",
        status: "Banned",
    },
];

export default function UsersTable() {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [search, setSearch] = useState("");

    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
    );

    const toggleBan = (id: number) => {
        setUsers((prev) =>
            prev.map((u) =>
                u.id === id
                    ? { ...u, status: u.status === "Active" ? "Banned" : "Active" }
                    : u
            )
        );
    };

    return (
        <section id="users" className="scroll-mt-20 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Users</h2>
                <div className="flex items-center gap-2">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-56 rounded-xl border border-slate-200 px-3 py-2 text-sm"
                        placeholder="Search users (name/email)"
                    />
                    <button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-2 text-sm font-semibold text-white shadow hover:from-indigo-600 hover:to-violet-700">
                        Add User
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="px-4 py-3">User</th>
                            <th className="px-4 py-3">Role</th>
                            <th className="px-4 py-3">Last Login</th>
                            <th className="px-4 py-3">Purchases</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 border-t border-slate-200">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="border border-slate-200">
                                <td className="px-4 py-3 font-medium">
                                    {user.name}
                                    <br />
                                    <span className="text-xs text-slate-500">{user.email}</span>
                                </td>
                                <td className="px-4 py-3">{user.role}</td>
                                <td className="px-4 py-3">{user.lastLogin}</td>
                                <td className="px-4 py-3">{user.purchases}</td>
                                <td className="px-4 py-3">
                                    {user.status === "Active" ? (
                                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                                            Active
                                        </span>
                                    ) : (
                                        <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-700">
                                            Banned
                                        </span>
                                    )}
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <div className="inline-flex items-center gap-1">
                                        {user.status === "Active" ? (
                                            <button
                                                onClick={() => toggleBan(user.id)}
                                                className="rounded-lg border border-slate-200 px-2 py-1 text-xs"
                                            >
                                                Ban
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => toggleBan(user.id)}
                                                className="rounded-lg border border-slate-200 px-2 py-1 text-xs"
                                            >
                                                Unban
                                            </button>
                                        )}
                                        <button className="rounded-lg border border-slate-200 px-2 py-1 text-xs">
                                            Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredUsers.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
