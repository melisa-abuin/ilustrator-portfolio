# Illustrator Portfolio

Portfolio web app built with React, TypeScript, Vite, and CSS Modules.

## Tech

- React 18
- TypeScript
- Vite
- i18next (English and Italian)
- CSS Modules

## Run Locally

```bash
npm install
npm run dev
```

Vite will print the local URL in the terminal.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run typecheck` - Run TypeScript checks
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix lint issues
- `npm run format` - Format source files with Prettier
- `npm run format:check` - Check formatting

## Project Structure

```text
src/
   features/
      header/
      portfolio/
      footer/
   i18n/
      config.ts
      locales/
   utils/
   App.tsx
   main.tsx
```

## Notes

- Translations are in `src/i18n/locales/`.
- API-related helpers are in `src/utils/api.ts`.
