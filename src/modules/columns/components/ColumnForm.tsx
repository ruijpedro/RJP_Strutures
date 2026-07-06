import { Field } from '../../../ui/Field';
import type { ColumnInput } from '../engine/ColumnTypes';

interface Props { input: ColumnInput; setInput: (input: ColumnInput) => void; }
export function ColumnForm({ input, setInput }: Props) {
  const update = (key: keyof ColumnInput, value: number) => setInput({ ...input, [key]: value });
  return <div className="form-stack"><div className="form-grid">
    <Field label="Altura" unit="m" value={input.heightM} min={1} onChange={(v) => update('heightM', v)} />
    <Field label="bx" unit="cm" value={input.bxCm} min={15} onChange={(v) => update('bxCm', v)} />
    <Field label="by" unit="cm" value={input.byCm} min={15} onChange={(v) => update('byCm', v)} />
    <Field label="NEd" unit="kN" value={input.nedKn} min={0} onChange={(v) => update('nedKn', v)} />
    <Field label="MEd" unit="kN.m" value={input.medKnM} onChange={(v) => update('medKnM', v)} />
    <Field label="fck" unit="MPa" value={input.concreteFck} min={12} onChange={(v) => update('concreteFck', v)} />
    <Field label="fyd" unit="MPa" value={input.steelFyd} min={300} onChange={(v) => update('steelFyd', v)} />
    <Field label="Ø varão" unit="mm" value={input.barDiameterMm} min={8} step={1} onChange={(v) => update('barDiameterMm', v)} />
  </div></div>;
}
