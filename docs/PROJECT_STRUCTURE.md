# Project Structure Guide

This guide explains the organization of files and folders in the music player application.

## Root Directory Structure

```
ytify-main/
├── src/                    # Source code directory
│   ├── components/         # React components
│   ├── lib/               # Utility functions and shared code
│   ├── stylesheets/       # CSS and style files
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── docs/                  # Documentation directory
├── public/               # Static assets
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Source Code Organization

### 1. Components (`src/components/`)
```
components/
├── Player.tsx           # Main player component
├── TrackList.tsx        # Track list component
├── ProgressBar.tsx      # Progress bar component
├── VolumeSlider.tsx     # Volume control component
└── SearchBar.tsx        # Search functionality component
```

### 2. Utilities (`src/lib/`)
```
lib/
├── utils.ts            # Utility functions (cn, etc.)
├── types.ts            # TypeScript type definitions
└── constants.ts        # Application constants
```

### 3. Styles (`src/stylesheets/`)
```
stylesheets/
├── global.css          # Global styles and CSS variables
└── components.css      # Component-specific styles
```

## Documentation Organization

### 1. Main Documentation (`docs/`)
```
docs/
├── README.md           # Main documentation overview
├── PROJECT_STRUCTURE.md # This file
├── UI_CUSTOMIZATION.md  # UI customization guide
├── COLOR_THEMES.md      # Color themes guide
├── ANIMATIONS.md        # Animations guide
└── COMPONENTS.md        # Components guide
```

## File Purposes

### 1. Configuration Files
- `package.json`: Project dependencies and scripts
- `tailwind.config.js`: Tailwind CSS customization
- `tsconfig.json`: TypeScript settings
- `vite.config.ts`: Vite build configuration

### 2. Source Files
- `src/main.tsx`: Application entry point
- `src/App.tsx`: Root component
- `src/components/*.tsx`: UI components
- `src/lib/*.ts`: Utility functions and types
- `src/stylesheets/*.css`: Style definitions

### 3. Documentation Files
- `docs/README.md`: Project overview
- `docs/PROJECT_STRUCTURE.md`: File organization
- `docs/UI_CUSTOMIZATION.md`: UI customization guide
- `docs/COLOR_THEMES.md`: Color themes guide
- `docs/ANIMATIONS.md`: Animations guide
- `docs/COMPONENTS.md`: Components guide

## File Relationships

### 1. Component Dependencies
```
Player.tsx
├── imports TrackList.tsx
├── imports ProgressBar.tsx
├── imports VolumeSlider.tsx
└── imports SearchBar.tsx
```

### 2. Style Dependencies
```
global.css
├── imports Tailwind base styles
└── defines CSS variables

components.css
└── imports global.css
```

### 3. Documentation Dependencies
```
README.md
└── references all other documentation files

COMPONENTS.md
├── references UI_CUSTOMIZATION.md
└── references ANIMATIONS.md
```

## Best Practices

1. **File Naming**
   - Use PascalCase for component files
   - Use camelCase for utility files
   - Use kebab-case for CSS files

2. **File Organization**
   - Keep related files together
   - Use clear, descriptive names
   - Follow consistent patterns

3. **Documentation**
   - Keep documentation up to date
   - Reference related files
   - Include examples where helpful

4. **Code Organization**
   - One component per file
   - Group related utilities
   - Maintain clear dependencies

## Getting Started

1. **Understanding the Structure**
   - Start with `README.md`
   - Review `PROJECT_STRUCTURE.md`
   - Explore component files

2. **Making Changes**
   - Follow existing patterns
   - Update documentation
   - Test thoroughly

3. **Adding Features**
   - Create new components
   - Update related files
   - Document changes

## Resources

- [SolidJS Project Structure](https://www.solidjs.com/guides/structure)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [Vite Project Structure](https://vitejs.dev/guide/) 