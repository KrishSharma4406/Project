import { YearlySales, MonthlySales } from '@/types/sales';

// Mock sales data inspired by Kaggle retail datasets
// Realistic sales patterns with seasonal variations

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Generate realistic sales data with growth trends and seasonality
const generateMonthlySales = (year: number, baseAmount: number): MonthlySales[] => {
  return months.map((month, index) => {
    // Add seasonality (higher sales in Nov-Dec, lower in Jan-Feb)
    const seasonalityFactor = index === 10 || index === 11 ? 1.4 : 
                              index === 0 || index === 1 ? 0.8 : 
                              1.0;
    
    // Add some randomness (±15%)
    const randomFactor = 0.85 + Math.random() * 0.3;
    
    const sales = Math.round(baseAmount * seasonalityFactor * randomFactor);
    const profit = Math.round(sales * (0.25 + Math.random() * 0.15)); // 25-40% profit margin
    const expenses = Math.round(sales * (0.55 + Math.random() * 0.1)); // 55-65% expenses
    
    return {
      month,
      sales,
      profit,
      expenses
    };
  });
};

const data2022: MonthlySales[] = generateMonthlySales(2022, 120000);
const data2023: MonthlySales[] = generateMonthlySales(2023, 145000);
const data2024: MonthlySales[] = generateMonthlySales(2024, 175000);

const calculateTotal = (data: MonthlySales[], key: keyof Pick<MonthlySales, 'sales' | 'profit' | 'expenses'>) => {
  return data.reduce((sum, item) => sum + item[key], 0);
};

export const salesData: YearlySales[] = [
  {
    year: 2022,
    data: data2022,
    totalSales: calculateTotal(data2022, 'sales'),
    totalProfit: calculateTotal(data2022, 'profit'),
    totalExpenses: calculateTotal(data2022, 'expenses')
  },
  {
    year: 2023,
    data: data2023,
    totalSales: calculateTotal(data2023, 'sales'),
    totalProfit: calculateTotal(data2023, 'profit'),
    totalExpenses: calculateTotal(data2023, 'expenses')
  },
  {
    year: 2024,
    data: data2024,
    totalSales: calculateTotal(data2024, 'sales'),
    totalProfit: calculateTotal(data2024, 'profit'),
    totalExpenses: calculateTotal(data2024, 'expenses')
  }
];

export const getYearlyData = (year: number): YearlySales | undefined => {
  return salesData.find(data => data.year === year);
};

export const getAllYears = (): number[] => {
  return salesData.map(data => data.year);
};
