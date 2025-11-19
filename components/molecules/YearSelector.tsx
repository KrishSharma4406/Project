'use client';

import React from 'react';
import { Button } from '@/components/atoms/Button';

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const YearSelector: React.FC<YearSelectorProps> = ({
  years,
  selectedYear,
  onYearChange
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {years.map((year) => (
        <Button
          key={year}
          onClick={() => onYearChange(year)}
          active={selectedYear === year}
          variant="primary"
        >
          {year}
        </Button>
      ))}
    </div>
  );
};
