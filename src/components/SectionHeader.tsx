export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="mono-label mb-2 text-sm text-secondary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
