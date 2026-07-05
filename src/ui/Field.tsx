interface Props { label: string; value: number; unit?: string; onChange: (value: number) => void; min?: number; step?: number; }
export function Field({ label, value, unit, onChange, min, step = 0.1 }: Props) {
  return <label className="field"><span>{label}{unit ? ` (${unit})` : ''}</span><input type="number" value={value} min={min} step={step} onChange={(e) => onChange(Number(e.target.value))}/></label>;
}
