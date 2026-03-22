export default function SectionDivider({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`mundo-section-divider ${className}`}>
      <span className="line" />
      <span className="label">{label}</span>
      <span className="line" />
    </div>
  );
}
