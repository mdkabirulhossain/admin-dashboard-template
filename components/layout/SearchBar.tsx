// src/components/layout/header-tools.tsx
import { Search, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SearchBar() {
    return (
        <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
                className="w-full bg-[#1c1c1f] border border-border-subtle rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="Search..."
            />
        </div>
    );
}

export function UserNav() {
    return (
        <div className="flex items-center gap-4">
            <button className="relative p-2 text-muted-foreground hover:text-white">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full border-2 border-background" />
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-border-subtle">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold">Admin</p>
                    <p className="text-[10px] text-muted-foreground">Administrator</p>
                </div>
                <Avatar className="h-9 w-9 border border-gold/50">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <ChevronDown size={14} className="text-muted-foreground" />
            </div>
        </div>
    );
}