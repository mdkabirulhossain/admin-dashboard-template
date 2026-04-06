// src/components/dashboard/recent-list.tsx
export function OrderItem({ name, service, price, status, id }: any) {
    return (
        <div className="flex items-center justify-between py-4 border-b border-border-subtle last:border-0">
            <div>
                <h4 className="font-semibold text-sm">{name}</h4>
                <p className="text-xs text-muted-foreground">{service}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-0.5">{id}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-sm text-gold">{price}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                    }`}>
                    {status}
                </span>
            </div>
        </div>
    );
}