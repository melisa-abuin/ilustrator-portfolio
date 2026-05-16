# Agent Instructions

## Color Variables Rule

- For every new color requested by the user, create a global CSS variable instead of using raw hex/rgb values directly in component styles.
- Keep color names semantic (role-based), not visual (for example, use `--color-primary`, not `--color-dark-green`).
- Always read existing color tokens from `src/index.css` before adding or changing any color.

## Color Source Of Truth

- Do not hardcode current token values in this file.
- The source of truth for current color tokens is `src/index.css` under `:root`.

## Usage

- Define global variables in a shared global stylesheet (for example, `src/index.css` under `:root`).
- Consume those variables with `var(--token-name)` in all module and page styles.

## Architecture

- This repository follows a feature-based architecture.
- When adding new components, place them under the relevant feature folder in `src/features/` rather than in generic shared-by-default locations.
