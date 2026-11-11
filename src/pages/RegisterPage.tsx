import { Link } from 'react-router'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Notice } from '../components/Notice'
import { TextField } from '../components/TextField'

export function RegisterPage() {
  return (
    <div className="mx-auto max-w-md space-y-4 px-4 py-10">
      <h1 className="text-2xl font-bold text-ink-900">Create your ZUA account</h1>

      <Notice>Registration is not active yet. Authentication is the next development stage.</Notice>

      <Card>
        {/* Layout only: fields are disabled until authentication is built. */}
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <fieldset disabled>
            <legend className="mb-1 text-sm font-medium text-slate-700">I want to</legend>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <label className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-3 text-slate-500">
                <input type="radio" name="role" value="customer" defaultChecked /> Ride or send
              </label>
              <label className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-3 text-slate-500">
                <input type="radio" name="role" value="driver" /> Drive
              </label>
            </div>
          </fieldset>
          <TextField id="register-name" label="Full name" type="text" disabled />
          <TextField id="register-phone" label="Phone number" type="tel" disabled />
          <TextField id="register-password" label="Password" type="password" disabled />
          <Button type="submit" fullWidth disabled>
            Create account
          </Button>
        </form>
      </Card>

      <p className="text-center text-sm text-slate-600">
        <span>Already registered? </span>
        <Link to="/login" className="font-semibold text-ink-900 underline">
          Log in
        </Link>
      </p>
    </div>
  )
}
