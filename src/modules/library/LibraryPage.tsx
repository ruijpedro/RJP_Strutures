import { Card } from '../../ui/Card';
export function LibraryPage() {
  return <main className="page"><h1>Biblioteca Técnica</h1><div className="grid"><Card title="Betões"><p>C20/25, C25/30, C30/37, C35/45. Valores simplificados para apoio académico.</p></Card><Card title="Aços"><p>A400, A500 e A500NR. fyd típico usado nos módulos: 435 MPa.</p></Card><Card title="Estruturas"><p>Vigas, pilares, lajes e sapatas com pré-dimensionamento e verificações preliminares.</p></Card><Card title="Normas"><p>EC0, EC1, EC2 e EC7 como referência de apoio ao estudo. Não substitui projeto validado.</p></Card></div></main>;
}
