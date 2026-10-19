import React from 'react';
import { ComplaintPriority } from '../../types';
import { AlertOctagon, Flame, ArrowUpCircle, MinusCircle } from 'lucide-react';

interface Props {
  priority: ComplaintPriority;
  showIcon?: boolean;
}

export const PriorityBadge: React.FC<Props> = ({ priority, showIcon = true }) => {
  const styles: Record<ComplaintPriority, { label: string; bg: string; text: string; icon: React.ReactNode }> = {
    critical: {
      label: 'Critical',
      bg: 'bg-red-100 border-red-300',
      text: 'text-red-800',
      icon: <AlertOctagon className="w-3.5 h-3.5 text-red-600 animate-pulse" />,
    },
    high: {
      label: 'High',
      bg: 'bg-orange-100 border-orange-300',
      text: 'text-orange-800',
      icon: <Flame className="w-3.5 h-3.5 text-orange-600" />,
    },
    medium: {
      label: 'Medium',
      bg: 'bg-amber-100 border-amber-300',
      text: 'text-amber-800',
      icon: <ArrowUpCircle className="w-3.5 h-3.5 text-amber-600" />,
    },
    low: {
      label: 'Low',
      bg: 'bg-blue-100 border-blue-200',
      text: 'text-blue-800',
      icon: <MinusCircle className="w-3.5 h-3.5 text-blue-600" />,
    },
  };

  const item = styles[priority] || styles.medium;

  return (
    <span
      role="img"
      aria-label={`${item.label} priority`}
      title={`${item.label} priority`}
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${item.bg} ${item.text}`}
    >
      {showIcon && item.icon}
    </span>
  );
};
