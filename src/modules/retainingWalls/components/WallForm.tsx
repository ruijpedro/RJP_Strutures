import { Field } from '../../../ui/Field';
import type { WallInput } from '../engine/WallTypes';
interface Props { value: WallInput; onChange: (v: WallInput) => void; }
export function WallForm({ value, onChange }: Props) {
  const set = (k: keyof WallInput, v: number) => onChange({ ...value, [k]: v });
  return <div className="card"><h3>Geometria e terreno</h3><div className="form-grid">
    <Field label="Altura H" unit="m" value={value.height} min={0.5} onChange={v => set('height', v)}/>
    <Field label="Base B" unit="m" value={value.baseWidth} min={0.5} onChange={v => set('baseWidth', v)}/>
    <Field label="Biqueira" unit="m" value={value.toe} min={0} onChange={v => set('toe', v)}/>
    <Field label="Talão" unit="m" value={value.heel} min={0} onChange={v => set('heel', v)}/>
    <Field label="Fuste" unit="m" value={value.stemThickness} min={0.15} onChange={v => set('stemThickness', v)}/>
    <Field label="γ solo" unit="kN/m³" value={value.gammaSoil} min={0} onChange={v => set('gammaSoil', v)}/>
    <Field label="φ" unit="graus" value={value.phi} min={0} onChange={v => set('phi', v)}/>
    <Field label="Sobrecarga" unit="kPa" value={value.surcharge} min={0} onChange={v => set('surcharge', v)}/>
    <Field label="qadm" unit="kPa" value={value.bearingCapacity} min={1} onChange={v => set('bearingCapacity', v)}/>
    <Field label="μ base" value={value.frictionCoeff} min={0.1} step={0.05} onChange={v => set('frictionCoeff', v)}/>
  </div></div>;
}
