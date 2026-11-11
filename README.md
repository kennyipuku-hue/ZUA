# ZUA — Move. Ride. Deliver.

Mobility and delivery platform for the Democratic Republic of Congo, starting in Kinshasa.

- **ZUA Ride** — car transportation
- **ZUA Moto** — motorcycle transportation
- **ZUA Delivery** — parcel and document delivery

One web application, three portals (Customer, Driver, Admin), one shared Supabase backend.

## Status: Day 1 — technical foundation

The project runs, the routes exist and the three portals have placeholder pages.
There is **no login, no database tables, no payments and no GPS yet**. Portal pages are open to anyone until authentication is added.

## Requirements

- [Node.js](https://nodejs.org) version 20.19 or newer (includes `npm`)
- A Supabase project

## Installation

```bash
npm install
```

Then create your local settings file:

1. Copy `.env.example` and name the copy `.env.local`.
2. In the Supabase dashboard open **Project Settings → API**.
3. Paste the **Project URL** into `VITE_SUPABASE_URL`.
4. Paste the **publishable key** into `VITE_SUPABASE_PUBLISHABLE_KEY`.

`.env.local` is ignored by Git and stays on your computer.
Never put a Supabase **secret** or **service-role** key in this project.

## Running the app

```bash
npm run dev
```

Open the address shown in the terminal (normally http://localhost:5173).
Restart this command whenever you change `.env.local`.

| Command             | What it does                                         |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Starts the app locally with live reload              |
| `npm run typecheck` | Checks the TypeScript code for mistakes              |
| `npm run build`     | Checks the code and creates the production version   |
| `npm run preview`   | Serves the production version locally to test it     |

## How to test Day 1

1. `/` shows the ZUA landing page.
2. `/login` and `/register` show disabled forms with a "not active yet" notice.
3. `/customer`, `/driver` and `/admin` each show their own portal with its own menu.
   (In development, the login page has a "Development preview only" box linking to them.)
4. Any other address, e.g. `/abc`, shows the "Page not found" page.
5. Each portal page shows a Supabase indicator: green once `.env.local` is filled in, red otherwise.
6. Narrow the browser window to phone width: portals switch to a bottom tab bar.

## Routes

| Address     | Page                         |
| ----------- | ---------------------------- |
| `/`         | Public landing page          |
| `/login`    | Login (layout only)          |
| `/register` | Registration (layout only)   |
| `/customer` | Customer dashboard           |
| `/driver`   | Driver dashboard             |
| `/admin`    | Admin dashboard              |

## Project structure

```
src/
  App.tsx          Route map: which address shows which page
  main.tsx         Starts the app
  index.css        Tailwind + ZUA brand colours
  components/      Shared building blocks (Logo, Button, Card, TextField, Notice…)
  layouts/         PublicLayout (landing/login) and PortalLayout (all three portals)
  pages/           Public pages
  features/
    customer/      Customer portal
    driver/        Driver portal
    admin/         Admin dashboard
  lib/supabase.ts  The single Supabase connection used by every portal
  services/        Business logic and database calls (kept out of the UI)
  hooks/           Shared React hooks
  contexts/        App-wide state (e.g. the logged-in user)
  types/           Shared TypeScript types
  utils/           Constants and helpers
```

## How the three portals share one backend

Every portal imports the same client from `src/lib/supabase.ts`, so they all use the same
Supabase project and PostgreSQL database. Who may see or change what will be enforced in
the database itself, using a role on each user profile (`customer`, `driver`, `admin`) and
Supabase Row Level Security. Hiding a page in the interface is never the only protection.

## Technology

React, TypeScript, Vite, Tailwind CSS, React Router, Supabase (PostgreSQL).
