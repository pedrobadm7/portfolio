import { ReactNode } from 'react';

import { cn } from '../../utils/cn';

interface ICardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: ICardProps) {
  return (
    <div className={cn('border', className)}>
      <div className="mb-4">{children}</div>
    </div>
  );
}
