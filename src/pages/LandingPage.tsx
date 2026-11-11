import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { APP_SLOGAN, LAUNCH_CITY, SERVICES } from '../utils/constants'

export function LandingPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <div className="mx-auto max-w-5xl px-4 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            {LAUNCH_CITY}, DRC
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">{APP_SLOGAN}</h1>
          <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
            One app to get around {LAUNCH_CITY} by car or moto, and to send parcels and documents
            across the city.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/register">Get started</ButtonLink>
            <ButtonLink to="/login" variant="ghost">
              I already have an account
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-xl font-bold text-ink-900">Our services</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.id} title={service.name}>
              <p className="text-sm text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <Card title="Drive with ZUA">
          <p className="text-sm text-slate-600">
            Own a car or a motorcycle? Register as a driver and earn on your own schedule.
          </p>
          <ButtonLink to="/register" variant="secondary" className="mt-4">
            Become a driver
          </ButtonLink>
        </Card>
      </section>
    </>
  )
}
