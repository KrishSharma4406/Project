'use client';

import React from 'react';
import { Input } from '@/components/atoms/Input';

interface SalesFilterInputProps {
  threshold: number;
  onThresholdChange: (threshold: number) => void;
}

export const SalesFilterInput: React.FC<SalesFilterInputProps> = ({
  threshold,
  onThresholdChange
}) => {
  const handleChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    onThresholdChange(numValue);
  };

  return (
    <div className="w-full md:w-64">
      <Input
        type="number"
        label="Sales Threshold Filter"
        placeholder="Enter minimum sales amount"
        value={threshold}
        onChange={handleChange}
      />
      <p className="text-xs text-gray-500 mt-1">
        Only showing months with sales ≥ ${threshold.toLocaleString()}
      </p>
    </div>
  );
};
