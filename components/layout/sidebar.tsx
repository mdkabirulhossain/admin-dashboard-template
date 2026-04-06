// src/components/layout/sidebar.tsx
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Box, ListTree, CalendarDays, TicketPercent, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Box },
    { name: "Step", href: "/step", icon: ListTree },
    { name: "Bookings", href: "/bookings", icon: CalendarDays },
    { name: "Coupons", href: "/coupons", icon: TicketPercent },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Settings", href: "/settings", icon: Settings },
];

export function SidebarContent() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full py-6">
            {/* Brand Logo - Matches XTRA-VISION style */}
            <div className="px-6 mb-10">
                <h1 className="text-xl font-bold tracking-tighter text-white">
                    XTRA-<span className="text-gold">VISION</span>
                </h1>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Admin Dashboard</p>
            </div>

            <nav className="flex-1 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all relative group",
                                isActive
                                    ? "text-gold bg-gradient-to-r from-gold/10 to-transparent border-l-2 border-gold"
                                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon size={18} className={cn(isActive ? "text-gold" : "group-hover:text-white")} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}