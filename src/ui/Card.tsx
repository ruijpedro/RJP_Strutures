import type { ReactNode } from 'react';

interface Props { title?: string; children: ReactNode; className?: string; }
export function Card({ title, children, className = '' }: Props) {
  return <section className={`card ${className}`}>{title && <h3>{title}</h3>}{children}</section>;
}
