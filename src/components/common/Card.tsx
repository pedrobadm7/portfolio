import { cn } from '../../utils/cn';

interface ICardProps {
  children: React.ReactNode;
  className?: string
}


export const Card = ({ children, className }: ICardProps) => {
  return (
    <div className={cn("border", className)}>

      <div className="mb-4">{children}</div>

    </div>
  )
}
