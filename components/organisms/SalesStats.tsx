'use client';

import React from 'react';
import { YearlySales } from '@/types/sales';
import { StatCard } from '@/components/atoms/StatCard';

interface SalesStatsProps {
  yearlyData: YearlySales;
  previousYearData?: YearlySales;
}

export const SalesStats: React.FC<SalesStatsProps> = ({ yearlyData, previousYearData }) => {
  const calculateTrend = (current: number, previous?: number): { trend: 'up' | 'down' | 'neutral'; value: string } => {
    if (!previous) return { trend: 'neutral', value: 'N/A' };
    
    const change = ((current - previous) / previous) * 100;
    return {
      trend: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral',
      value: `${Math.abs(change).toFixed(1)}%`
    };
  };

  const salesTrend = calculateTrend(yearlyData.totalSales, previousYearData?.totalSales);
  const profitTrend = calculateTrend(yearlyData.totalProfit, previousYearData?.totalProfit);
  const expensesTrend = calculateTrend(yearlyData.totalExpenses, previousYearData?.totalExpenses);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Sales"
        value={`$${yearlyData.totalSales.toLocaleString()}`}
        trend={salesTrend.trend}
        trendValue={salesTrend.value}
        icon={<span className="text-2xl">💰</span>}
      />
      <StatCard
        title="Total Profit"
        value={`$${yearlyData.totalProfit.toLocaleString()}`}
        trend={profitTrend.trend}
        trendValue={profitTrend.value}
        icon={<span className="text-2xl">📈</span>}
      />
      <StatCard
        title="Total Expenses"
        value={`$${yearlyData.totalExpenses.toLocaleString()}`}
        trend={expensesTrend.trend}
        trendValue={expensesTrend.value}
        icon={<span className="text-2xl">💸</span>}
      />
    </div>
  );
};
