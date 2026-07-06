import { Card } from '../../ui/Card';
import { DISCLAIMER } from '../../core/constants';

export function DashboardPage() {
  return <main className="page"><h1>Dashboard</h1><div className="grid"><Card title="Módulos funcionais"><p>Bloco 2: vigas, pilares, lajes e sapatas com cálculo preliminar, desenho SVG e modo estudo.</p></Card><Card title="Uso previsto"><p>{DISCLAIMER}</p></Card><Card title="Próximo bloco"><p>Muros de suporte, impulsos de terras e combinações EC0/EC1.</p></Card></div></main>;
}
