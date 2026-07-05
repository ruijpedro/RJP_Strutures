import { BookOpen, Home, Ruler } from 'lucide-react';
import type { ReactNode } from 'react';
import type { ModuleKey } from '../core/types';

interface Props { active: ModuleKey; setActive: (key: ModuleKey) => void; open: boolean; }
const items: Array<{key: ModuleKey; label: string; icon: ReactNode}> = [
  { key: 'dashboard', label: 'Dashboard', icon: <Home size={18}/> },
  { key: 'beams', label: 'Vigas EC2', icon: <Ruler size={18}/> },
  { key: 'library', label: 'Biblioteca', icon: <BookOpen size={18}/> }
];
export function Sidebar({ active, setActive, open }: Props) {
  return <aside className={`sidebar ${open ? 'open' : ''}`}>{items.map(item => <button key={item.key} className={active === item.key ? 'active' : ''} onClick={() => setActive(item.key)}>{item.icon}<span>{item.label}</span></button>)}</aside>;
}
