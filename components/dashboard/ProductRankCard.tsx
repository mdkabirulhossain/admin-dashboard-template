// src/components/dashboard/product-rank.tsx
export function ProductRankCard({ rank, name, sales, total }: any) {
    return (
        <div className="dashboard-card flex items-center gap-4 bg-white/[0.02]">
            <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                <span className="text-[10px] block text-muted-foreground">Rank #{rank}</span>
                <div className="text-gold mt-1">📦</div>
            </div>
            <div className="flex-1">
                <h5 className="text-sm font-bold truncate">{name}</h5>
                <p className="text-xs text-muted-foreground">{sales} sales</p>
            </div>
            <div className="text-gold font-bold text-sm">{total}</div>
        </div>
    )
}