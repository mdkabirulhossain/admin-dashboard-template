// src/app/(dashboard)/page.tsx
"use client";
import { OrderItem } from "@/components/dashboard/OrderItem";
import { OrdersChart } from "@/components/dashboard/OrdersChart";
import { ProductRankCard } from "@/components/dashboard/ProductRankCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { DollarSign, Calendar, Users } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="max-w-400 mx-auto space-y-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard label="Total Revenue" value="€67,250" percentage="+12.5%" icon={<DollarSign size={20} />} />
                <StatsCard label="Bookings" value="45" percentage="+15.3%" icon={<Calendar size={20} />} />
                <StatsCard label="Customers" value="1,248" percentage="+5.7%" icon={<Users size={20} />} />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RevenueChart /> 
                <OrdersChart />
            </div>

            {/* Orders and Bookings Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="dashboard-card">
                    <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
                    <OrderItem name="John Smith" service="65' Samsung TV Installation" price="€850" status="Completed" id="#ORD-1245" />
                    <OrderItem name="Sarah Johnson" service="55' LG TV + Soundbar" price="€1,200" status="Pending" id="#ORD-1244" />
                    <OrderItem name="Michael Brown" service="Wall Mount Installation" price="€350" status="Pending" id="#ORD-1243" />
                </div>

                <div className="dashboard-card">
                    <h3 className="text-lg font-bold mb-4">Recent Bookings</h3>
                    {/* Map your booking items here similarly to OrderItem */}
                </div>
            </div>

            {/* Top Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ProductRankCard rank="1" name="65' Samsung QLED TV" sales="45" total="€38,250" />
                <ProductRankCard rank="2" name="55' LG OLED TV" sales="38" total="€34,200" />
                <ProductRankCard rank="3" name="Soundbar Installation" sales="52" total="€15,600" />
                <ProductRankCard rank="4" name="Premium Wall Mount" sales="67" total="€13,400" />
            </div>
        </div>
    );
}