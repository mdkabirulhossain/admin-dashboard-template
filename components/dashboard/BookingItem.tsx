// src/components/dashboard/booking-item.tsx
import { Calendar } from "lucide-react";

interface BookingProps {
    name: string;
    type: string;
    date: string;
    assignee: string;
}

export function BookingItem({ name, type, date, assignee }: BookingProps) {
    return (
        <div className="group relative pl-6 pb-6 border-l border-border-subtle last:pb-0">
            {/* Dot on the timeline */}
            <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(212,160,23,0.5)]" />

            <div className="flex justify-between items-start">
                <div>
                    <h4 className="text-sm font-semibold">{name}</h4>
                    <p className="text-xs text-muted-foreground">{type}</p>
                </div>
                <Calendar size={14} className="text-gold" />
            </div>

            <div className="flex justify-between items-center mt-3 text-[10px]">
                <span className="text-muted-foreground/60 italic">{date}</span>
                <span className="text-gold font-medium">{assignee}</span>
            </div>
        </div>
    );
}