import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  active?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  active = false,
  className = '' 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: active 
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' 
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
    secondary: active
      ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
    outline: active
      ? 'border-2 border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100 focus:ring-blue-500'
      : 'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-400'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
