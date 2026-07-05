import { Card } from '../../ui/Card';
import { DISCLAIMER } from '../../core/constants';

export function DashboardPage() {
  return <main className="page"><h1>Dashboard</h1><div className="grid"><Card title="Módulos ativos"><p>Vigas EC2 funcional. Próximos blocos: pilares, lajes, sapatas, muros e geotecnia.</p></Card><Card title="Modo de utilização"><p>{DISCLAIMER}</p></Card><Card title="Estado"><p>Bloco 1 compilável: Core + UI + Vigas.</p></Card></div></main>;
}
