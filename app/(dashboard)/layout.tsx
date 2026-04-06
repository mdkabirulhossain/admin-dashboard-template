import { SearchBar, UserNav } from "@/components/layout/SearchBar";
import { SidebarContent } from "@/components/layout/sidebar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

// src/app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar - desktop only (hidden on mobile) */}
            <aside className="w-64 border-r border-border hidden md:flex flex-col">
                <SidebarContent />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b border-border flex items-center px-4 md:px-6 justify-between gap-4">
                    {/* Hamburger — mobile only, rendered inside MobileSidebar */}
                    <MobileSidebar />

                    <div className="flex-1">
                        <SearchBar />
                    </div>

                    <UserNav />
                </header>
                <div className="p-4 md:p-6 overflow-y-auto">{children}</div>
            </main>
        </div>
    );
}