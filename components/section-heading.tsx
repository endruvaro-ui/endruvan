export function SectionHeading({
  label,
  title,
  description,
  action,
}: {
  label: string
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          {label}
        </p>
        <h2 className="text-balance text-3xl font-bold uppercase leading-none tracking-tight md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}
