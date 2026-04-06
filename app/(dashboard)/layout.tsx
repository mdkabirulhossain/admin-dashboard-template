import { SearchBar, UserNav } from "@/components/layout/SearchBar";
import { SidebarContent } from "@/components/layout/sidebar";

// src/app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar - Fixed width */}
            <aside className="w-64 border-r border-border hidden md:flex flex-col">
                <SidebarContent />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 border-b border-border flex items-center px-6 justify-between">
                    <SearchBar />
                    <UserNav />
                </header>
                <div className="p-6 overflow-y-auto">{children}</div>
            </main>
        </div>
    );
}