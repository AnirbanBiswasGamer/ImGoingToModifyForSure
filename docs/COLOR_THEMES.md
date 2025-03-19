# Color Themes Guide

This guide provides pre-built color themes and instructions for creating custom themes for your music player application.

## Pre-built Themes

### 1. Spotify Theme (Default)
```css
/* Spotify-inspired dark theme */
--background: #121212;
--card: #282828;
--accent: #1DB954;
--accent-hover: #1ed760;
--text-primary: #ffffff;
--text-secondary: #b3b3b3;
--progress-bg: #4D4D4D;
```

### 2. Apple Music Theme
```css
/* Apple Music-inspired theme */
--background: #000000;
--card: #1a1a1a;
--accent: #ff2d55;
--accent-hover: #ff3b5f;
--text-primary: #ffffff;
--text-secondary: #a0a0a0;
--progress-bg: #333333;
```

### 3. YouTube Music Theme
```css
/* YouTube Music-inspired theme */
--background: #0f0f0f;
--card: #282828;
--accent: #ff0000;
--accent-hover: #ff1a1a;
--text-primary: #ffffff;
--text-secondary: #aaaaaa;
--progress-bg: #383838;
```

### 4. SoundCloud Theme
```css
/* SoundCloud-inspired theme */
--background: #1a1a1a;
--card: #2a2a2a;
--accent: #ff7700;
--accent-hover: #ff8800;
--text-primary: #ffffff;
--text-secondary: #999999;
--progress-bg: #333333;
```

## Creating Custom Themes

### 1. Color Selection Guidelines

1. **Background Colors**
   - Main background: Dark, neutral color (#121212 - #000000)
   - Card background: Slightly lighter than main (#282828 - #1a1a1a)
   - Progress background: Medium contrast (#4D4D4D - #333333)

2. **Accent Colors**
   - Primary: Vibrant, brand color (#1DB954 - #ff0000)
   - Hover: Slightly lighter version of primary
   - Ensure good contrast with background

3. **Text Colors**
   - Primary: White or near-white (#ffffff)
   - Secondary: Medium gray (#b3b3b3 - #999999)
   - Maintain WCAG contrast ratios

### 2. Theme Implementation

1. **Using CSS Variables**
```css
/* In your global.css */
:root {
  --background: #121212;
  --card: #282828;
  --accent: #1DB954;
  --accent-hover: #1ed760;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --progress-bg: #4D4D4D;
}
```

2. **Using Tailwind Classes**
```tsx
// In your components
<div class="bg-[var(--background)] text-[var(--text-primary)]">
  <div class="bg-[var(--card)]">
    <button class="bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
      Click me
    </button>
  </div>
</div>
```

### 3. Theme Switching

1. **Dark/Light Mode**
```css
/* In your global.css */
:root {
  /* Light theme variables */
  --background: #ffffff;
  --card: #f5f5f5;
  --accent: #1DB954;
  --text-primary: #000000;
  --text-secondary: #666666;
}

[data-theme="dark"] {
  /* Dark theme variables */
  --background: #121212;
  --card: #282828;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
}
```

2. **Custom Theme Class**
```css
/* In your global.css */
.theme-custom {
  --background: #your-color;
  --card: #your-color;
  --accent: #your-color;
  --text-primary: #your-color;
  --text-secondary: #your-color;
}
```

## Best Practices

1. **Color Contrast**
   - Maintain WCAG 2.1 AA standards
   - Use contrast checkers for validation
   - Test with different text sizes

2. **Accessibility**
   - Ensure text remains readable
   - Provide sufficient focus states
   - Consider color blindness

3. **Consistency**
   - Use consistent color values
   - Maintain brand identity
   - Follow established patterns

4. **Performance**
   - Use CSS variables for dynamic changes
   - Minimize color transitions
   - Optimize for dark mode

## Resources

- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Color Palette Generators](https://coolors.co/)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors) 