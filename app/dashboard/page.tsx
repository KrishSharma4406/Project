'use client';

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { SalesStats } from '@/components/organisms/SalesStats';
import { YearSelector } from '@/components/molecules/YearSelector';
import { ChartTypeSelector } from '@/components/molecules/ChartTypeSelector';
import { SalesFilterInput } from '@/components/molecules/SalesFilterInput';
import { getAllYears, getYearlyData } from '@/lib/salesData';
import { ChartType } from '@/types/sales';

// Dynamically import SalesChart to avoid SSR issues with Recharts
const SalesChart = dynamic(
  () => import('@/components/organisms/SalesChart'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-xl shadow-lg p-6 w-full">
        <div className="flex items-center justify-center h-[400px]">
          <div className="animate-pulse text-gray-500">Loading chart...</div>
        </div>
      </div>
    )
  }
);

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [salesThreshold, setSalesThreshold] = useState<number>(0);

  const years = getAllYears();
  const currentYearData = getYearlyData(selectedYear);
  const previousYearData = getYearlyData(selectedYear - 1);

  // Filter data based on threshold
  const filteredData = useMemo(() => {
    if (!currentYearData) return [];
    return currentYearData.data.filter(item => item.sales >= salesThreshold);
  }, [currentYearData, salesThreshold]);

  if (!currentYearData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600">No data available for the selected year.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Sales Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive sales analytics and insights
          </p>
        </div>

        {/* Year Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Select Year</h2>
          <YearSelector
            years={years}
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />
        </div>

        {/* Stats Cards */}
        <SalesStats 
          yearlyData={currentYearData} 
          previousYearData={previousYearData}
        />

        {/* Chart Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Chart Type</h2>
              <ChartTypeSelector
                selectedType={chartType}
                onTypeChange={setChartType}
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter Options</h2>
              <SalesFilterInput
                threshold={salesThreshold}
                onThresholdChange={setSalesThreshold}
              />
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <SalesChart
          data={filteredData}
          chartType={chartType}
          title={`${selectedYear} Sales Analysis`}
        />

        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">📊 Future Enhancements</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>✅ Custom Filter Input - Adjust sales threshold in real-time</li>
            <li>🔄 API Integration - Ready for real-time data fetching</li>
            <li>📈 Multiple Chart Types - Switch between Bar, Line, and Pie charts</li>
            <li>🎯 Export functionality - Download reports as PDF or CSV (Coming Soon)</li>
            <li>🔔 Alerts & Notifications - Set custom thresholds (Coming Soon)</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm pb-8">
          <p>Built with Next.js 15, TypeScript, Tailwind CSS, and Recharts</p>
          <p className="mt-1">Data inspired by Kaggle retail sales datasets</p>
        </div>
      </div>
    </div>
  );
}
