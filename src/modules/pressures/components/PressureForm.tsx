import { Field } from '../../../ui/Field';
import type { PressureInput } from '../engine/PressureTypes';
interface Props { value: PressureInput; onChange: (v: PressureInput) => void; }
export function PressureForm({ value, onChange }: Props) {
  const set = (k: keyof PressureInput, v: number | string) => onChange({ ...value, [k]: v });
  return <div className="card"><h3>Dados do terreno</h3><div className="form-grid">
    <Field label="Altura H" unit="m" value={value.height} min={0.1} onChange={v => set('height', v)}/>
    <Field label="Peso volúmico γ" unit="kN/m³" value={value.gamma} min={0} onChange={v => set('gamma', v)}/>
    <Field label="Ângulo φ" unit="graus" value={value.phi} min={0} onChange={v => set('phi', v)}/>
    <Field label="Sobrecarga q" unit="kPa" value={value.surcharge} min={0} onChange={v => set('surcharge', v)}/>
    <Field label="Água no tardoz" unit="m" value={value.waterHeight} min={0} onChange={v => set('waterHeight', Math.min(v, value.height))}/>
    <label className="field"><span>Método</span><select value={value.method} onChange={e => set('method', e.target.value)}><option value="rankine">Rankine ativo</option><option value="atRest">Repouso K0</option></select></label>
  </div></div>;
}
