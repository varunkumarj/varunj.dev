"use client";

import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'terminal';
  href?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  subtitle,
  children,
  className = '',
  variant = 'default',
  href,
  onClick,
}: CardProps) {
  // Define variant-specific styles using theme tokens via Tailwind classes
  const variantStyles = {
    default: 'bg-gray-800 border border-gray-700',
    primary: 'bg-primary-900/20 border border-primary-700/30',
    terminal: 'bg-terminal-bg border border-terminal-border',
  };

  const cardContent = (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {(title || subtitle) && (
        <div className="p-4 border-b border-gray-700">
          {title && <h3 className="text-lg font-semibold text-primary-100">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );

  // If href is provided, wrap with an anchor tag
  if (href) {
    return (
      <a href={href} className="block no-underline">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
