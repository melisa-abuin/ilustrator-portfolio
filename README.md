# Illustrator Portfolio

A modern, responsive portfolio application built with React, TypeScript, Vite, and CSS Modules. Designed with a feature-based architecture and strict typing practices.

## Features

- **Responsive Design**: Mobile-first approach with responsive styles
- **Multilingual**: English and Italian language support with i18next
- **Type-Safe**: Full TypeScript with strict mode enabled
- **Modern Tooling**: Vite for fast development and building
- **Code Quality**: ESLint and Prettier for code consistency
- **Feature-Based Architecture**: Organized by features for scalability
- **CSS Modules**: Scoped styling to prevent conflicts
- **CMS Ready**: Prepared for future CMS integration

## Project Structure

```
src/
├── features/              # Feature-based components
│   ├── header/           # Header with language toggle
│   ├── portfolio/        # Portfolio hero section
│   └── footer/           # Footer with links
├── utils/                # Utility functions
│   ├── api.ts           # API calls and data fetching
│   ├── types.ts         # TypeScript type definitions
│   └── language.ts      # Language utilities
├── i18n/                # Internationalization
│   ├── config.ts        # i18n configuration
│   └── locales/         # Translation files (en.json, it.json)
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Quick Start

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will open at `http://localhost:3000`.

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Check code quality with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Code Quality

### TypeScript

The project uses strict TypeScript configuration:

- `strict: true` - All type checking flags enabled
- `noImplicitAny: true` - No implicit any types
- `noUnusedLocals: true` - Warn about unused variables
- `noUnusedParameters: true` - Warn about unused parameters
- `noImplicitReturns: true` - Warn about missing return statements

### ESLint

Configured with:

- TypeScript parser
- React and React Hooks plugins
- Prettier integration
- Strict TypeScript rules
- No `any` types allowed

### Prettier

Configured with:

- 2-space indentation
- Double quotes
- Semicolons
- Trailing commas
- 80-character line width

## Architecture Guidelines

### Feature-Based Organization

Components are organized by feature rather than type:

```
features/
├── header/
│   ├── Header.tsx
│   └── Header.module.css
├── portfolio/
│   ├── Hero.tsx
│   └── Hero.module.css
└── footer/
    ├── Footer.tsx
    └── Footer.module.css
```

### Component Best Practices

- **Focused Components**: Each component has a single responsibility
- **Type Safety**: Props are explicitly typed
- **No `any`**: Strict typing throughout
- **CSS Modules**: Styles are co-located with components
- **Accessibility**: Proper ARIA labels and semantic HTML

### Utility Functions

- **Pure Functions**: Utilities in `/utils` are pure functions without side effects
- **Data Shaping**: Complex data transformations happen in utilities or at the API layer
- **API Layer**: Data from CMS is shaped before consumption by components
- **Reusability**: Utilities are reused before creating duplicates

### Styling

- **CSS Modules**: All styles are co-located with components
- **Responsive Design**: Mobile-first approach with media queries
- **Global Styles**: Base styles in `index.css`
- **No Conflicts**: CSS Modules prevent style collisions

## CMS Integration

The application is prepared for CMS integration:

1. **API Layer** (`src/utils/api.ts`):
   - `fetchPortfolioDataFromCMS()` - Replace with actual CMS API endpoint
   - `getMockPortfolioData()` - Mock data for development

2. **Type Definitions** (`src/utils/types.ts`):
   - `CMSPortfolioData` - Main portfolio data structure
   - `CMSImage` - Image data with URL and alt text
   - `CMSPortfolioItem` - Individual portfolio item

3. **Current Setup**:
   - Using mock data with proper structure
   - Easy to switch to real CMS endpoint
   - All translation strings can come from CMS

## Internationalization

The app supports English (en) and Italian (it) languages using i18next:

- Language toggle in header
- Automatic language switching
- Translation strings in `src/i18n/locales/`
- Easy to add more languages

### Adding a New Language

1. Create new translation file: `src/i18n/locales/[lang].json`
2. Add language to `SUPPORTED_LANGUAGES` in `src/utils/language.ts`
3. Register in `src/i18n/config.ts`

## Dependencies

### Production

- **react**: UI library
- **react-dom**: React DOM rendering
- **react-i18next**: React internationalization
- **i18next**: Internationalization framework

### Development

- **typescript**: Language and type checking
- **vite**: Build tool and dev server
- **eslint**: Code linting
- **prettier**: Code formatting
- **@vitejs/plugin-react**: React plugin for Vite
- **@typescript-eslint/eslint-plugin**: TypeScript ESLint rules

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- **Code Splitting**: Vite handles automatic code splitting
- **CSS Modules**: Prevents unused CSS in production
- **Lazy Loading**: Ready for React.lazy() implementation
- **Image Optimization**: Prepare optimized images for CMS

## Future Enhancements

- [ ] Add more portfolio items display component
- [ ] Implement portfolio filtering by category
- [ ] Add contact form
- [ ] Implement search functionality
- [ ] Add animations with React Spring or Framer Motion
- [ ] Database integration for dynamic content
- [ ] Analytics tracking
- [ ] SEO optimization

## License

[Add your license here]

## Contributing

[Add contributing guidelines here]
