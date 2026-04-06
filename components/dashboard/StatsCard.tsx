import { ArrowUpRight } from "lucide-react";

interface StatsCardProps {
    label: string;
    value: string;
    percentage: string;
    icon: React.ReactNode;
}

export function StatsCard({ label, value, percentage, icon }: StatsCardProps) {
    return (
        <div className="dashboard-card relative overflow-hidden">
            <div className="flex justify-between items-start">
                <div className="space-y-4">
                    <div className="p-2 w-fit rounded-lg bg-gold/10 text-gold border border-gold/20">
                        {icon}
                    </div>
                    <div>
                        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">{label}</p>
                        <h2 className="text-3xl font-bold mt-1">{value}</h2>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded-full text-xs font-bold">
                    <span>{percentage}</span>
                </div>
            </div>
        </div>
    );
}