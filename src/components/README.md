# Components

This folder contains the project's component library organized using Atomic Design.

Principles
- Atomic Design: keep components under `atoms/`, `molecules/`, `organisms/`, `templates/`, `layouts/`.
- BEM CSS Naming: use `Block__Element--Modifier` for all class names (e.g. `.button`, `.button__icon`, `.button--primary`). Do not use camelCase class names, utility-first classes (Tailwind), or inline `style` props.
- Semantic HTML: prefer native elements (`button`, `nav`, `header`, `main`, `section`, `article`, etc.). Avoid using non-semantic wrappers (e.g., `<div>` or `<span>`) to provide interactive or structural meaning.
- Accessibility: use native controls when possible and add ARIA only when necessary.

Component folder convention
For each component create a folder with the component name, for example `src/components/atoms/Button/`:
- `Button.tsx` — component implementation (use semantic element such as `<button>`)
- `Button.module.css` or `Button.css` — styles using BEM class names
- `index.ts` — re-export the component
- `Button.stories.tsx` — optional Storybook stories in `stories/`
- `Button.test.tsx` — unit tests in `tests/` or colocated in the component folder

Example
```
src/components/atoms/Button/
  Button.tsx
  Button.module.css
  index.ts
```

Rules & workflow
- Refuse and Educate: any component that breaks BEM, Atomic Design, or Semantic HTML must not be accepted; call out the specific rule violation.
- Flag, do not silently fix: when reviewing existing code, explicitly flag rule violations instead of silently refactoring.
- Confirm before moving files: if a file needs to be moved to satisfy the Atomic Design structure, ask for user confirmation before moving it.

Helpful folders
- `icons/` — shared icon components
- `tokens/` — design tokens (colors, spacing, typography)
- `hooks/` — shared React hooks
- `utils/` — helper utilities
- `styles/` — global or shared style utilities
- `stories/` — component stories
- `tests/` — shared test utilities and setup
- `docs/` — component documentation and usage guidelines

How to add a new component
1. Decide its Atomic level (Atom / Molecule / Organism). Add a short rationale in the PR description.
2. Create the component folder under the appropriate directory.
3. Implement the component using semantic HTML and BEM classes.
4. Add unit tests and stories where applicable.
5. Export the component from `src/components/index.ts` (if using a central barrel).

If you want, I can create a `src/components/index.ts` export stub next.