import { Menu, Save, FileText } from 'lucide-react';
import { APP_NAME, APP_VERSION } from '../core/constants';

interface Props { onMenu: () => void; }
export function Topbar({ onMenu }: Props) {
  return <header className="topbar"><button className="icon-btn" onClick={onMenu}><Menu size={22}/></button><div><strong>{APP_NAME}</strong><small>{APP_VERSION}</small></div><div className="top-actions"><button><Save size={16}/>Guardar</button><button><FileText size={16}/>PDF</button></div></header>;
}
