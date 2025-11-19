'use client';

import React from 'react';
import { Button } from '@/components/atoms/Button';
import { ChartType } from '@/types/sales';

interface ChartTypeSelectorProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({
  selectedType,
  onTypeChange
}) => {
  const chartTypes: { type: ChartType; label: string; icon: string }[] = [
    { type: 'bar', label: 'Bar Chart', icon: '📊' },
    { type: 'line', label: 'Line Chart', icon: '📈' },
    { type: 'pie', label: 'Pie Chart', icon: '🥧' }
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {chartTypes.map(({ type, label, icon }) => (
        <Button
          key={type}
          onClick={() => onTypeChange(type)}
          active={selectedType === type}
          variant="outline"
        >
          <span className="flex items-center gap-2">
            <span>{icon}</span>
            <span>{label}</span>
          </span>
        </Button>
      ))}
    </div>
  );
};
