import { BookOpen, Home, Ruler, Columns3, SquareStack, Box, Waves, BrickWall } from 'lucide-react';
import type { ReactNode } from 'react';
import type { ModuleKey } from '../core/types';

interface Props { active: ModuleKey; setActive: (key: ModuleKey) => void; open: boolean; }
const items: Array<{key: ModuleKey; label: string; icon: ReactNode}> = [
  { key: 'dashboard', label: 'Dashboard', icon: <Home size={18}/> },
  { key: 'beams', label: 'Vigas', icon: <Ruler size={18}/> },
  { key: 'columns', label: 'Pilares', icon: <Columns3 size={18}/> },
  { key: 'slabs', label: 'Lajes', icon: <SquareStack size={18}/> },
  { key: 'footings', label: 'Sapatas', icon: <Box size={18}/> },
  { key: 'pressures', label: 'Impulsos', icon: <Waves size={18}/> },
  { key: 'retainingWalls', label: 'Muros', icon: <BrickWall size={18}/> },
  { key: 'library', label: 'Biblioteca', icon: <BookOpen size={18}/> }
];
export function Sidebar({ active, setActive, open }: Props) {
  return <aside className={`sidebar ${open ? 'open' : ''}`}><div className="side-group">Estruturas</div>{items.map(item => <button key={item.key} className={active === item.key ? 'active' : ''} onClick={() => setActive(item.key)}>{item.icon}<span>{item.label}</span></button>)}</aside>;
}
