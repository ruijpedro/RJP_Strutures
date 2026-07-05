import { Field } from '../../../ui/Field';
import type { BeamInput, BeamSupportType } from '../engine/BeamTypes';

interface Props { input: BeamInput; setInput: (input: BeamInput) => void; }
const supports: Array<{value: BeamSupportType; label: string}> = [
  { value: 'simplySupported', label: 'Biapoiada' }, { value: 'cantilever', label: 'Consola' },
  { value: 'fixedFixed', label: 'Engastada-engastada' }, { value: 'proppedCantilever', label: 'Engastada-apoiada' },
  { value: 'continuous2', label: 'Contínua 2 tramos' }
];
export function BeamForm({ input, setInput }: Props) {
  const update = (patch: Partial<BeamInput>) => setInput({ ...input, ...patch });
  return <div className="form-stack">
    <label className="field"><span>Tipo de apoio</span><select value={input.supportType} onChange={(e) => update({ supportType: e.target.value as BeamSupportType })}>{supports.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}</select></label>
    <div className="form-grid"><Field label="Vão L" unit="m" value={input.span} min={0.1} onChange={(v)=>update({span:v})}/><Field label="b" unit="cm" value={input.widthCm} onChange={(v)=>update({widthCm:v})}/><Field label="h" unit="cm" value={input.heightCm} onChange={(v)=>update({heightCm:v})}/><Field label="rec." unit="cm" value={input.coverCm} onChange={(v)=>update({coverCm:v})}/></div>
    <div className="form-grid"><Field label="G" unit="kN/m" value={input.g} onChange={(v)=>update({g:v})}/><Field label="Q" unit="kN/m" value={input.q} onChange={(v)=>update({q:v})}/><Field label="P" unit="kN" value={input.pointLoad} onChange={(v)=>update({pointLoad:v})}/><Field label="Posição P" unit="m" value={input.pointPosition} onChange={(v)=>update({pointPosition:v})}/></div>
  </div>;
}
