# fruit-app

Nx monorepo containing the `banana` React app.

## Requirements

- Node >= 22 (the repo pins `24` in `.nvmrc`)
- pnpm 10.33.2 — enable it with `corepack enable`

## Getting started

```bash
pnpm install
pnpm start
```

The app runs at http://localhost:4200

## Scripts

| Command       | Description                              |
| ------------- | ---------------------------------------- |
| `pnpm start`  | Start the dev server                     |
| `pnpm build`  | Production build into `apps/banana/dist` |
| `pnpm test`   | Run unit tests (Vitest)                  |
| `pnpm lint`   | Lint every project                       |
| `pnpm format` | Format the whole repo with Prettier      |

## Structure

```
apps/banana/
├── src/
│   ├── main.tsx        Entry point — ThemeProvider, CssBaseline, fonts
│   ├── theme.ts        MUI theme
│   └── app/app.tsx     The single page
└── vite.config.mts
```

## Stack

React 19 · Vite · MUI v9 (Emotion) · Montserrat (`@fontsource`) · TypeScript · Vitest

## Commit convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint on the `commit-msg` hook:

```
feat: add product listing page
fix: correct theme font fallback
chore: upgrade nx to 23.2
```

The `pre-commit` hook runs lint-staged (ESLint `--fix` + Prettier) on staged files.

## Adding new projects

```bash
pnpm exec nx g @nx/react:app <app-name> --directory=apps/<app-name>
pnpm exec nx g @nx/react:lib <lib-name> --directory=libs/<lib-name>
```

> Note: `pnpm-workspace.yaml` currently only declares `apps/*`. If you create a `libs/` directory, remember to add `libs/*` to that file.
