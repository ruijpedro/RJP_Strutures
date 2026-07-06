import { Field } from '../../../ui/Field';
import type { FootingInput } from '../engine/FootingTypes';
interface Props { input: FootingInput; setInput: (input: FootingInput) => void; }
export function FootingForm({ input, setInput }: Props) {
  const update = (key: keyof FootingInput, value: number) => setInput({ ...input, [key]: value });
  return <div className="form-grid">
    <Field label="Comprimento" unit="m" value={input.lengthM} min={0.5} onChange={(v) => update('lengthM', v)} />
    <Field label="Largura" unit="m" value={input.widthM} min={0.5} onChange={(v) => update('widthM', v)} />
    <Field label="Espessura" unit="m" value={input.thicknessM} min={0.2} onChange={(v) => update('thicknessM', v)} />
    <Field label="Pilar x" unit="m" value={input.columnX} min={0.1} onChange={(v) => update('columnX', v)} />
    <Field label="Pilar y" unit="m" value={input.columnY} min={0.1} onChange={(v) => update('columnY', v)} />
    <Field label="NEd" unit="kN" value={input.nedKn} min={0} onChange={(v) => update('nedKn', v)} />
    <Field label="Mx" unit="kN.m" value={input.mxKnM} onChange={(v) => update('mxKnM', v)} />
    <Field label="My" unit="kN.m" value={input.myKnM} onChange={(v) => update('myKnM', v)} />
    <Field label="qadm" unit="kPa" value={input.soilQadmKpa} min={25} onChange={(v) => update('soilQadmKpa', v)} />
  </div>;
}
