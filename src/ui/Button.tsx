import type { ReactNode } from 'react';

interface Props { children: ReactNode; onClick?: () => void; variant?: 'primary' | 'secondary'; }
export function Button({ children, onClick, variant = 'primary' }: Props) {
  return <button className={`btn ${variant}`} onClick={onClick}>{children}</button>;
}
