# Fieldwork — Angular + Angular Material starter

A small marketing site (Home, About, Services, Contact) built with Angular
(standalone components, no NgModules) and Angular Material, with a custom
theme instead of a stock Material color scheme.

## What's inside

- **Angular 18**, standalone components, new `@if` / `@for` control flow
- **Angular Material**: toolbar, buttons, cards, menu, form fields, inputs,
  icons, snack bar
- A custom Material theme (forest green + brass) defined in `src/styles.scss`
- Reactive form with validation on the Contact page
- Responsive layout (toolbar collapses to a menu on small screens)

## Getting started

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Project structure

```
src/app/
  app.component.ts          Root shell (navbar + router-outlet + footer)
  app.routes.ts              Route definitions
  app.config.ts               Providers (router, animations)
  components/
    navbar/                  Sticky top nav, collapses to a menu on mobile
    footer/                  Site footer
  pages/
    home/                    Hero, feature grid, CTA band
    about/                   Studio description + values
    services/                Service list + CTA
    contact/                 Reactive form with validation + snack bar
src/styles.scss              Custom Material theme + global styles
```

## Customizing

- **Colors**: edit `$fieldwork-primary-palette` and `$fieldwork-accent-palette`
  in `src/styles.scss`. Every `mat-*` component (buttons, form field outlines,
  etc.) picks its color up from these automatically via `color="primary"` /
  `color="accent"`.
- **Fonts**: headings use "Fraunces" (serif), body text uses "Inter" (sans).
  Both are loaded from Google Fonts in `src/index.html`; swap the `<link>`
  tags and the `font-family` declarations in `src/styles.scss` to change them.
- **Content**: page copy and the feature/service/value lists live directly in
  each page component's `.ts` file (e.g. `home.component.ts`).
- **Contact form**: `onSubmit()` in `contact.component.ts` currently just logs
  to the console and shows a snack bar — wire it up to your own API or an
  email service (e.g. Formspree, a serverless function) to actually send
  messages.

## Build for production

```bash
npm run build
```

Output goes to `dist/fieldwork/`.
