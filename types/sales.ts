export interface MonthlySales {
  month: string;
  sales: number;
  profit: number;
  expenses: number;
}

export interface YearlySales {
  year: number;
  data: MonthlySales[];
  totalSales: number;
  totalProfit: number;
  totalExpenses: number;
}

export type ChartType = 'bar' | 'line' | 'pie';

export interface SalesFilterConfig {
  threshold?: number;
  chartType: ChartType;
  selectedYear: number;
}
