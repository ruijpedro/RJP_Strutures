import { Field } from '../../../ui/Field';
import type { SlabInput } from '../engine/SlabTypes';
interface Props { input: SlabInput; setInput: (input: SlabInput) => void; }
export function SlabForm({ input, setInput }: Props) {
  const update = (key: keyof SlabInput, value: number) => setInput({ ...input, [key]: value });
  return <div className="form-grid">
    <Field label="Lx" unit="m" value={input.lxM} min={1} onChange={(v) => update('lxM', v)} />
    <Field label="Ly" unit="m" value={input.lyM} min={1} onChange={(v) => update('lyM', v)} />
    <Field label="Espessura" unit="cm" value={input.thicknessCm} min={8} onChange={(v) => update('thicknessCm', v)} />
    <Field label="Gk" unit="kN/m²" value={input.permanentKnM2} min={0} onChange={(v) => update('permanentKnM2', v)} />
    <Field label="Qk" unit="kN/m²" value={input.variableKnM2} min={0} onChange={(v) => update('variableKnM2', v)} />
    <Field label="fck" unit="MPa" value={input.concreteFck} min={12} onChange={(v) => update('concreteFck', v)} />
    <Field label="fyd" unit="MPa" value={input.steelFyd} min={300} onChange={(v) => update('steelFyd', v)} />
    <Field label="Recobrimento" unit="cm" value={input.coverCm} min={1} onChange={(v) => update('coverCm', v)} />
  </div>;
}
