# Pattyburger

Customer-facing restaurant ordering website for **Pattyburger.ng**.

> Admin features live in a separate application — this repo is customer-facing only.

## Tech Stack

- **React 19** + **Vite** — app framework & build tooling
- **React Router v7** — client-side routing
- **Tailwind CSS v4** — utility-first styling (via `@tailwindcss/vite`)
- **Framer Motion** — animations
- **Font Awesome** — icons
- **Axios** — HTTP client

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env    # then edit values

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run oxlint                           |

## Project Structure

```
src/
├── api/            # Axios instance + API service modules
│   ├── client.js       # configured axios instance (interceptors, base URL)
│   └── index.js        # service-layer entry point
├── assets/         # images, fonts, static assets imported by JS
├── components/     # reusable presentational components
│   └── ui/             # low-level UI primitives (buttons, inputs, ...)
├── config/         # app configuration
│   └── env.js          # typed access to environment variables
├── context/        # React context providers (cart, auth, ...)
├── hooks/          # custom React hooks
├── layouts/        # route-level layouts (RootLayout wraps all pages)
├── lib/            # framework-agnostic helpers & config
│   ├── constants.js    # app-wide constants
│   ├── fontawesome.js  # Font Awesome global config
│   └── format.js       # formatters (currency, etc.)
├── pages/          # route page components (one folder/file per route)
├── routes/         # routing configuration
│   ├── paths.js        # central route path constants
│   └── router.jsx      # createBrowserRouter config
├── styles/         # global styles & Tailwind theme tokens
│   └── globals.css
├── App.jsx         # RouterProvider host
└── main.jsx        # app entry point
```

### Path Aliases

`@` resolves to `src/`, so imports stay clean:

```js
import { apiClient } from '@/api'
import { PATHS } from '@/routes/paths'
```

## Planned Pages

Home · Menu · Product details · Cart · Checkout · About · Contact

Register new pages in [`src/routes/router.jsx`](src/routes/router.jsx) as they are built.
