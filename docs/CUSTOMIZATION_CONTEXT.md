# Customization Context Guide

This guide provides detailed context and examples for customizing the music player application.

## Component Context

### 1. Player Component Context
```tsx
// src/components/Player.tsx
import { Component, createSignal } from 'solid-js';
import { Music, Search, X, Volume2, SkipBack, SkipForward, Play, Pause, Heart, Repeat, Shuffle } from 'lucide-solid';

// State management
const [showSearch, setShowSearch] = createSignal(false);
const [showQueue, setShowQueue] = createSignal(false);
const [isPlaying, setIsPlaying] = createSignal(false);
const [volume, setVolume] = createSignal(0.5);
const [isLiked, setIsLiked] = createSignal(false);

// Component structure
const Player: Component = () => {
  return (
    <div class="w-full max-w-md bg-[var(--background)] rounded-xl shadow-lg overflow-hidden">
      {/* Component sections */}
    </div>
  );
};
```

### 2. Track List Context
```tsx
// src/components/TrackList.tsx
interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  thumbnail?: string;
}

// Track list state
const [tracks, setTracks] = createSignal<Track[]>([]);
const [currentTrack, setCurrentTrack] = createSignal<Track | null>(null);

// Track list component
const TrackList: Component = () => {
  return (
    <div class="border-t border-white/10">
      {/* Track items */}
    </div>
  );
};
```

## Style Context

### 1. Global Styles Context
```css
/* src/stylesheets/global.css */
:root {
  /* Color variables */
  --background: #121212;
  --card: #282828;
  --accent: #1DB954;
  --accent-hover: #1ed760;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --progress-bg: #4D4D4D;
}

/* Base styles */
body {
  @apply bg-[var(--background)] text-[var(--text-primary)];
}

/* Scrollbar styles */
::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-[var(--background)];
}

::-webkit-scrollbar-thumb {
  @apply bg-[var(--card)] rounded-full;
}
```

### 2. Component Styles Context
```css
/* src/stylesheets/components.css */
/* Player styles */
.player-container {
  @apply w-full max-w-md bg-[var(--card)] rounded-xl shadow-lg overflow-hidden;
}

/* Track item styles */
.track-item {
  @apply flex items-center gap-4 p-3 hover:bg-[var(--card)] cursor-pointer 
         transition-colors duration-300 group;
}

/* Button styles */
.player-button {
  @apply p-2 rounded-full hover:bg-[var(--card)] transition-colors duration-300;
}
```

## Theme Context

### 1. Spotify Theme Context
```css
/* Spotify-inspired dark theme */
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

### 2. Apple Music Theme Context
```css
/* Apple Music-inspired theme */
:root {
  --background: #000000;
  --card: #1a1a1a;
  --accent: #ff2d55;
  --accent-hover: #ff3b5f;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --progress-bg: #333333;
}
```

## Animation Context

### 1. Search Bar Animation Context
```tsx
<div class={cn(
  "transform transition-all duration-300 ease-in-out",
  showSearch() ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 h-0"
)}>
  <div class="p-4">
    <div class="relative">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
      <input
        type="text"
        placeholder="Search tracks..."
        class="w-full pl-10 pr-4 py-2 bg-[var(--card)] rounded-full text-white/90 
               placeholder:text-white/50 focus:outline-none focus:ring-2 
               focus:ring-[var(--accent)]/50"
      />
    </div>
  </div>
</div>
```

### 2. Track List Animation Context
```tsx
<div class={cn(
  "border-t border-white/10 transform transition-all duration-300 ease-in-out",
  showQueue() ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 h-0"
)}>
  <div class="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--card)] scrollbar-track-[var(--background)]">
    {/* Track items */}
  </div>
</div>
```

## Customization Examples

### 1. Custom Theme Example
```css
/* Custom theme with purple accent */
:root {
  --background: #0a0a0a;
  --card: #1a1a1a;
  --accent: #8b5cf6;
  --accent-hover: #a78bfa;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --progress-bg: #2a2a2a;
}
```

### 2. Custom Animation Example
```css
/* Custom pulse animation */
@keyframes custom-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.animate-custom-pulse {
  animation: custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### 3. Custom Component Example
```tsx
// Custom progress bar with gradient
const CustomProgressBar: Component<ProgressBarProps> = (props) => {
  return (
    <div class="relative h-1 bg-[var(--progress-bg)] rounded-full group cursor-pointer">
      <div 
        class="absolute h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] 
               rounded-full transition-all duration-300"
        style={{ width: `${props.progress}%` }}
      />
      <div class="absolute inset-0 flex items-center justify-center opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300">
        <div class="w-3 h-3 bg-white rounded-full shadow-lg" />
      </div>
    </div>
  );
};
```

## Best Practices Context

### 1. Component Organization
```tsx
// Good component organization
const Player: Component = () => {
  // 1. State management
  const [state, setState] = createSignal(initialValue);

  // 2. Event handlers
  const handleEvent = () => {
    // Event logic
  };

  // 3. Computed values
  const computedValue = () => {
    // Computation logic
  };

  // 4. JSX
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};
```

### 2. Style Organization
```css
/* Good style organization */
/* 1. Variables */
:root {
  /* Color variables */
  --primary: #1DB954;
  --secondary: #282828;
  
  /* Spacing variables */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Animation variables */
  --transition-fast: 0.2s;
  --transition-normal: 0.3s;
}

/* 2. Base styles */
body {
  /* Base styles */
}

/* 3. Component styles */
.component {
  /* Component styles */
}

/* 4. Utility classes */
.utility {
  /* Utility styles */
}
```

## Resources

- [SolidJS Documentation](https://www.solidjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Animation Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips) 