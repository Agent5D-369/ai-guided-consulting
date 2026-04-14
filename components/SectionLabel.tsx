type SectionLabelProps = {
  children: string;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return <span className="eyebrow-chip">{children}</span>;
}
