import { Card } from '../../ui/Card';
import { DISCLAIMER } from '../../core/constants';

export function DashboardPage() {
  return <main className="page"><h1>Dashboard</h1><div className="grid"><Card title="Estruturas"><p>Vigas, pilares, lajes, sapatas, impulsos e muros com cálculo preliminar, desenho SVG e modo estudo.</p></Card><Card title="Geotecnia"><p>Novo Bloco 4: SPT, CPT e taludes com interpretação preliminar e gráficos simples.</p></Card><Card title="Uso previsto"><p>{DISCLAIMER}</p></Card><Card title="Estabilização"><p>Pregagens, ancoragens, betão projetado, drenagem, enrocamentos e geossintéticos.</p></Card><Card title="Hidráulica"><p>Valetas, passagens hidráulicas, drenagem longitudinal/transversal e calculadora de Manning.</p></Card></div></main>;
}
