import { Card } from './Card'
import { Notice } from './Notice'
import { SupabaseStatus } from './SupabaseStatus'

interface PortalPlaceholderProps {
  title: string
  intro: string
  /** Features planned for this portal. Shown as a to-do list, not as real data. */
  plannedFeatures: string[]
}

/** Day 1 stand-in for a portal dashboard. Replaced as real features are built. */
export function PortalPlaceholder({ title, intro, plannedFeatures }: PortalPlaceholderProps) {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold text-ink-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">{intro}</p>
      </header>

      <Notice>
        Placeholder page. No real data is shown here yet, and anyone can open this page until
        login is added in the next stage.
      </Notice>

      <Card title="Planned for this portal">
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
          {plannedFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </Card>

      <SupabaseStatus />
    </div>
  )
}
