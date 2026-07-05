import { Card } from '../../ui/Card';

export function LibraryPage() {
  return <main className="page"><h1>Biblioteca Técnica</h1><div className="grid"><Card title="Betões"><p>C20/25, C25/30, C30/37, C35/45.</p></Card><Card title="Aços"><p>A400, A500, A500NR.</p></Card><Card title="Normas"><p>EC0, EC1, EC2 e EC7 como referência de apoio académico.</p></Card></div></main>;
}
