import { Link } from 'react-router'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { DevPortalLinks } from '../components/DevPortalLinks'
import { Notice } from '../components/Notice'
import { TextField } from '../components/TextField'

export function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-4 px-4 py-10">
      <h1 className="text-2xl font-bold text-ink-900">Log in to ZUA</h1>

      <Notice>Login is not active yet. Authentication is the next development stage.</Notice>

      <Card>
        {/* Layout only: fields are disabled until authentication is built. */}
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <TextField id="login-identifier" label="Phone number or email" type="text" disabled />
          <TextField id="login-password" label="Password" type="password" disabled />
          <Button type="submit" fullWidth disabled>
            Log in
          </Button>
        </form>
      </Card>

      <p className="text-center text-sm text-slate-600">
        <span>New to ZUA? </span>
        <Link to="/register" className="font-semibold text-ink-900 underline">
          Create an account
        </Link>
      </p>

      <DevPortalLinks />
    </div>
  )
}
