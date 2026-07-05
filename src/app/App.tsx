import { useState } from 'react';
import { Sidebar } from '../ui/Sidebar';
import { Topbar } from '../ui/Topbar';
import type { ModuleKey } from '../core/types';
import { DashboardPage } from '../modules/dashboard/DashboardPage';
import { BeamsPage } from '../modules/beams/BeamsPage';
import { LibraryPage } from '../modules/library/LibraryPage';

export function App() {
  const [active, setActive] = useState<ModuleKey>('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="app"><Topbar onMenu={() => setMenuOpen(!menuOpen)}/><div className="shell"><Sidebar active={active} setActive={(key) => { setActive(key); setMenuOpen(false); }} open={menuOpen}/><div className="content">{active === 'dashboard' && <DashboardPage/>}{active === 'beams' && <BeamsPage/>}{active === 'library' && <LibraryPage/>}</div></div></div>;
}
