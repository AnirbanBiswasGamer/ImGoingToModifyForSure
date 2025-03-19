# Components and Utilities Guide

This guide provides detailed information about components, their props, and utility classes used in the music player application.

## Utility Functions

### 1. Class Name Utility (`cn`)
```typescript
// src/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Usage:
```tsx
<div class={cn(
  "base-classes",
  conditional && "conditional-classes",
  "other-classes"
)}>
  {/* Content */}
</div>
```

## Component Props

### 1. Player Component
```typescript
interface PlayerProps {
  // Optional props
  initialVolume?: number;
  showQueue?: boolean;
  showSearch?: boolean;
  theme?: 'spotify' | 'apple' | 'youtube' | 'soundcloud';
}
```

### 2. Track Item Component
```typescript
interface TrackItemProps {
  title: string;
  artist: string;
  duration: string;
  thumbnail?: string;
  isActive?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}
```

## State Management

### 1. Player State
```typescript
// State signals
const [showSearch, setShowSearch] = createSignal(false);
const [showQueue, setShowQueue] = createSignal(false);
const [isPlaying, setIsPlaying] = createSignal(false);
const [volume, setVolume] = createSignal(0.5);
const [isLiked, setIsLiked] = createSignal(false);
```

### 2. Track State
```typescript
// Track list state
const [tracks, setTracks] = createSignal<Track[]>([]);
const [currentTrack, setCurrentTrack] = createSignal<Track | null>(null);
```

## Common Tailwind Classes

### 1. Layout Classes
```css
/* Flex layouts */
flex
items-center
justify-center
gap-4
flex-1
min-w-0

/* Grid layouts */
grid
grid-cols-2
grid-rows-3

/* Spacing */
p-4
m-4
gap-4
space-y-4

/* Sizing */
w-full
h-full
max-w-md
min-h-screen
```

### 2. Visual Classes
```css
/* Colors */
bg-[var(--background)]
text-[var(--text-primary)]
border-white/10

/* Effects */
shadow-lg
backdrop-blur-lg
rounded-xl
overflow-hidden

/* Transitions */
transition-all
duration-300
ease-in-out
```

### 3. Interactive Classes
```css
/* Hover states */
hover:bg-[var(--accent-hover)]
hover:scale-105
hover:text-[var(--accent)]

/* Active states */
active:scale-95
active:bg-[var(--accent)]

/* Focus states */
focus:ring-2
focus:ring-[var(--accent)]/50
focus:outline-none
```

## Custom Components

### 1. Progress Bar
```tsx
interface ProgressBarProps {
  progress: number;
  duration: number;
  onSeek: (time: number) => void;
}

const ProgressBar: Component<ProgressBarProps> = (props) => {
  return (
    <div class="relative h-1 bg-[var(--progress-bg)] rounded-full group cursor-pointer">
      <div 
        class="absolute h-full bg-[var(--accent)] rounded-full transition-all duration-300"
        style={{ width: `${props.progress}%` }}
      />
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress handle */}
      </div>
    </div>
  );
};
```

### 2. Volume Slider
```tsx
interface VolumeSliderProps {
  volume: number;
  onChange: (volume: number) => void;
}

const VolumeSlider: Component<VolumeSliderProps> = (props) => {
  return (
    <div class="flex items-center gap-3">
      <Volume2 class="w-5 h-5 text-white/70" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={props.volume}
        onInput={(e) => props.onChange(Number(e.currentTarget.value))}
        class="w-full h-1 bg-[var(--progress-bg)] rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
          [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-white hover:[&::-webkit-slider-thumb]:bg-[var(--accent)]
          transition-all duration-300"
      />
    </div>
  );
};
```

## Event Handlers

### 1. Player Controls
```typescript
const handlePlayPause = () => {
  setIsPlaying(!isPlaying());
};

const handleVolumeChange = (newVolume: number) => {
  setVolume(newVolume);
};

const handleSeek = (time: number) => {
  // Implement seek logic
};
```

### 2. Track Interactions
```typescript
const handleTrackClick = (track: Track) => {
  setCurrentTrack(track);
  setIsPlaying(true);
};

const handleLikeTrack = () => {
  setIsLiked(!isLiked());
};
```

## Best Practices

1. **Component Organization**
   - Keep components focused and single-responsibility
   - Use TypeScript interfaces for props
   - Implement proper error handling

2. **State Management**
   - Use signals for reactive state
   - Keep state close to where it's used
   - Implement proper cleanup

3. **Performance**
   - Memoize expensive computations
   - Use proper key props for lists
   - Implement proper event debouncing

4. **Accessibility**
   - Use semantic HTML
   - Implement proper ARIA attributes
   - Ensure keyboard navigation

## Resources

- [SolidJS Documentation](https://www.solidjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) 