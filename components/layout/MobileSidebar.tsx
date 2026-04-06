"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SidebarContent } from "@/components/layout/sidebar";

export function MobileSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // Close on ESC key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            {/* Hamburger button — visible only on mobile */}
            <button
                id="mobile-sidebar-toggle"
                className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation menu"
            >
                <Menu size={22} />
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Slide-over drawer */}
            <aside
                className={[
                    "fixed top-0 left-0 z-50 h-full w-64 bg-background border-r border-border flex flex-col",
                    "transform transition-transform duration-300 ease-in-out md:hidden",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                ].join(" ")}
                aria-label="Mobile navigation"
            >
                {/* Close button inside drawer */}
                <button
                    className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                >
                    <X size={18} />
                </button>

                {/* Reuse the exact same sidebar content — no style changes */}
                <div onClick={() => setIsOpen(false)} className="flex-1 overflow-y-auto">
                    <SidebarContent />
                </div>
            </aside>
        </>
    );
}
