# 📊 Sales Dashboard - Advanced Analytics Platform

A modern, interactive sales dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. This application provides comprehensive sales analytics with multiple chart types, custom filtering, and year-over-year comparisons.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)
![Recharts](https://img.shields.io/badge/Recharts-2.0-8884d8)

## 🎯 Project Overview

This project demonstrates a **sales analytics dashboard** following **Atomic Design principles** to create a scalable, maintainable, and reusable component architecture. The application displays sales data for 2022, 2023, and 2024 with interactive visualizations.

### Key Features

- ✅ **Multiple Chart Types**: Switch between Bar, Line, and Pie charts
- ✅ **Custom Filtering**: Set custom sales thresholds to filter data
- ✅ **Year Comparison**: View and compare sales across different years
- ✅ **Atomic Design**: Structured components (Atoms → Molecules → Organisms)
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Mock Data**: Realistic sales data inspired by Kaggle datasets
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Performance**: Optimized with Next.js 15 and React best practices

## 🏗️ Architecture & Design Patterns

### Atomic Design Structure

The project follows **Atomic Design methodology** for component organization:

```
components/
├── atoms/           # Basic building blocks
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── StatCard.tsx
├── molecules/       # Simple component groups
│   ├── ChartTypeSelector.tsx
│   ├── SalesFilterInput.tsx
│   └── YearSelector.tsx
└── organisms/       # Complex component compositions
    ├── SalesChart.tsx
    └── SalesStats.tsx
```

**Benefits of This Structure:**
- **Reusability**: Atoms can be used across multiple molecules and organisms
- **Maintainability**: Easy to locate and update components
- **Scalability**: Clear pattern for adding new features
- **Testability**: Small, focused components are easier to test

## 📁 Project Structure

```
sales-dashboard/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard page
│   ├── page.tsx              # Landing page
│   └── layout.tsx
├── components/
│   ├── atoms/                # Basic UI components
│   ├── molecules/            # Component combinations
│   └── organisms/            # Complex components
├── lib/
│   └── salesData.ts          # Mock sales data & utilities
├── types/
│   └── sales.ts              # TypeScript interfaces
├── public/                   # Static assets
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KrishSharma4406/sales-dashboard.git
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📊 Data Source

The mock sales data is inspired by **Kaggle retail sales datasets** and features:

- **Monthly sales data** for 2022, 2023, and 2024
- **Realistic patterns**: Seasonal variations (higher in Nov-Dec, lower in Jan-Feb)
- **Growth trends**: Year-over-year growth reflecting business expansion
- **Financial metrics**: Sales, Profit, and Expenses with realistic margins
- **Randomization**: ±15% variance for realistic fluctuations

### Sample Data Structure

```typescript
interface MonthlySales {
  month: string;
  sales: number;
  profit: number;
  expenses: number;
}

interface YearlySales {
  year: number;
  data: MonthlySales[];
  totalSales: number;
  totalProfit: number;
  totalExpenses: number;
}
```

## 🎨 Features in Detail

### 1. Chart Visualization

- **Bar Chart**: Compare sales, profit, and expenses side-by-side
- **Line Chart**: Visualize trends over time with smooth curves
- **Pie Chart**: See percentage distribution of sales by month

### 2. Interactive Filtering

- **Year Selection**: Toggle between 2022, 2023, and 2024
- **Sales Threshold**: Filter months by minimum sales amount
- **Dynamic Updates**: Charts update in real-time

### 3. Statistics Dashboard

- **Total Sales**: Aggregate sales for selected year
- **Total Profit**: Profit calculations with trends
- **Total Expenses**: Expense tracking with year-over-year comparison
- **Trend Indicators**: Visual indicators showing increase/decrease

### 4. Responsive Design

- **Mobile-first**: Optimized for all screen sizes
- **Flexible grids**: Adapts layout based on viewport
- **Touch-friendly**: Large buttons and interactive elements

## 🔮 Future Enhancements

### Ready for Implementation

1. **API Integration**
   - Replace mock data with real API endpoints
   - Implement data fetching with React Query or SWR
   - Add loading states and error handling

2. **Advanced Filtering**
   - Date range picker
   - Multi-metric filtering
   - Custom comparison periods

3. **Export Functionality**
   - PDF report generation
   - CSV data export
   - Email reports

4. **Real-time Updates**
   - WebSocket integration for live data
   - Auto-refresh capabilities
   - Notifications for significant changes

5. **User Authentication**
   - Multi-user support
   - Role-based access control
   - Personalized dashboards

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first CSS framework |
| **Recharts** | Chart library for React |
| **React Hooks** | State management (useState, useMemo) |
| **ESLint** | Code quality and consistency |

## 📝 What I Did in This Project

### 1. Project Setup
- Initialized Next.js 15 with TypeScript and Tailwind CSS
- Configured ESLint for code quality
- Set up atomic design folder structure

### 2. Component Development
- Created reusable atoms (Button, Input, Card, StatCard)
- Built molecules (ChartTypeSelector, SalesFilterInput, YearSelector)
- Developed organisms (SalesChart, SalesStats)

### 3. Data Management
- Generated realistic mock sales data
- Implemented data utilities and helpers
- Created TypeScript interfaces for type safety

### 4. Dashboard Implementation
- Built interactive dashboard with state management
- Implemented chart switching functionality
- Added filtering and year selection features

### 5. Styling & UX
- Applied responsive design principles
- Created gradient backgrounds and modern UI
- Ensured accessibility and usability

### 6. Documentation
- Wrote comprehensive README
- Added inline code comments
- Documented component props and usage

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Krish Kumar**

- GitHub: [@KrishSharma4406](https://github.com/KrishSharma4406)
- Project: [Sales Dashboard](https://github.com/KrishSharma4406/sales-dashboard)

## 🙏 Acknowledgments

- Sales data patterns inspired by Kaggle retail datasets
- Design inspiration from modern analytics platforms
- Built with Next.js and the React ecosystem

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
