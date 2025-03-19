# Customization Examples Guide

This guide provides extensive examples for customizing every aspect of the music player application.

## Component Examples

### 1. Player Component Variations

#### Minimal Player
```tsx
const MinimalPlayer: Component = () => {
  return (
    <div class="w-full max-w-sm bg-[var(--card)] rounded-lg p-4">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 bg-[var(--background)] rounded-md" />
        <div class="flex-1 min-w-0">
          <h3 class="font-medium text-white/90 truncate">Track Name</h3>
          <p class="text-sm text-white/70 truncate">Artist Name</p>
        </div>
        <button class="p-2 rounded-full hover:bg-[var(--background)]">
          <Play class="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
```

#### Compact Player
```tsx
const CompactPlayer: Component = () => {
  return (
    <div class="fixed bottom-0 left-0 right-0 bg-[var(--card)] border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-[var(--background)] rounded-md" />
            <div>
              <h3 class="font-medium text-white/90">Track Name</h3>
              <p class="text-sm text-white/70">Artist Name</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <button class="p-2 rounded-full hover:bg-[var(--background)]">
              <SkipBack class="w-5 h-5" />
            </button>
            <button class="p-3 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
              <Play class="w-6 h-6" />
            </button>
            <button class="p-2 rounded-full hover:bg-[var(--background)]">
              <SkipForward class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
```

#### Full-Screen Player
```tsx
const FullScreenPlayer: Component = () => {
  return (
    <div class="fixed inset-0 bg-[var(--background)] flex flex-col">
      <div class="flex-1 flex items-center justify-center">
        <div class="w-96 h-96 bg-[var(--card)] rounded-2xl p-8">
          <div class="w-full aspect-square bg-[var(--background)] rounded-xl mb-8" />
          <h2 class="text-2xl font-bold text-white/90 mb-2">Track Name</h2>
          <p class="text-lg text-white/70 mb-8">Artist Name</p>
          <div class="space-y-6">
            <div class="h-1 bg-[var(--progress-bg)] rounded-full">
              <div class="w-1/3 h-full bg-[var(--accent)] rounded-full" />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-white/70">1:23</span>
              <span class="text-sm text-white/70">3:45</span>
            </div>
            <div class="flex items-center justify-center gap-6">
              <button class="p-3 rounded-full hover:bg-[var(--card)]">
                <Shuffle class="w-6 h-6" />
              </button>
              <button class="p-3 rounded-full hover:bg-[var(--card)]">
                <SkipBack class="w-6 h-6" />
              </button>
              <button class="p-4 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
                <Play class="w-8 h-8" />
              </button>
              <button class="p-3 rounded-full hover:bg-[var(--card)]">
                <SkipForward class="w-6 h-6" />
              </button>
              <button class="p-3 rounded-full hover:bg-[var(--card)]">
                <Repeat class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

#### Split-Screen Player
```tsx
const SplitScreenPlayer: Component = () => {
  return (
    <div class="flex h-screen">
      <div class="w-1/2 bg-[var(--background)] p-8">
        <div class="aspect-square bg-[var(--card)] rounded-2xl mb-8" />
        <h2 class="text-3xl font-bold text-white/90 mb-2">Track Name</h2>
        <p class="text-xl text-white/70 mb-8">Artist Name</p>
        <div class="space-y-6">
          <div class="h-1 bg-[var(--progress-bg)] rounded-full">
            <div class="w-1/3 h-full bg-[var(--accent)] rounded-full" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-white/70">1:23</span>
            <span class="text-sm text-white/70">3:45</span>
          </div>
          <div class="flex items-center justify-center gap-6">
            <button class="p-3 rounded-full hover:bg-[var(--card)]">
              <Shuffle class="w-6 h-6" />
            </button>
            <button class="p-3 rounded-full hover:bg-[var(--card)]">
              <SkipBack class="w-6 h-6" />
            </button>
            <button class="p-4 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
              <Play class="w-8 h-8" />
            </button>
            <button class="p-3 rounded-full hover:bg-[var(--card)]">
              <SkipForward class="w-6 h-6" />
            </button>
            <button class="p-3 rounded-full hover:bg-[var(--card)]">
              <Repeat class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div class="w-1/2 bg-[var(--card)] p-8 overflow-y-auto">
        <h3 class="text-xl font-bold text-white/90 mb-4">Up Next</h3>
        <div class="space-y-4">
          {tracks().map((track) => (
            <div class="flex items-center gap-4 p-3 bg-[var(--background)] rounded-lg hover:bg-[var(--card)] transition-colors">
              <div class="w-12 h-12 bg-[var(--card)] rounded-md" />
              <div class="flex-1 min-w-0">
                <h4 class="font-medium text-white/90 truncate">{track.title}</h4>
                <p class="text-sm text-white/70 truncate">{track.artist}</p>
              </div>
              <span class="text-sm text-white/70">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
```

#### Floating Player
```tsx
const FloatingPlayer: Component = () => {
  return (
    <div class="fixed bottom-6 right-6 w-80 bg-[var(--card)] rounded-2xl shadow-xl">
      <div class="p-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-16 h-16 bg-[var(--background)] rounded-lg" />
          <div class="flex-1 min-w-0">
            <h3 class="font-medium text-white/90 truncate">Track Name</h3>
            <p class="text-sm text-white/70 truncate">Artist Name</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="h-1 bg-[var(--progress-bg)] rounded-full">
            <div class="w-1/3 h-full bg-[var(--accent)] rounded-full" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-white/70">1:23</span>
            <span class="text-sm text-white/70">3:45</span>
          </div>
          <div class="flex items-center justify-center gap-4">
            <button class="p-2 rounded-full hover:bg-[var(--background)]">
              <SkipBack class="w-5 h-5" />
            </button>
            <button class="p-3 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
              <Play class="w-6 h-6" />
            </button>
            <button class="p-2 rounded-full hover:bg-[var(--background)]">
              <SkipForward class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
```

### 2. Track List Variations

#### Grid Layout
```tsx
const GridTrackList: Component = () => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {tracks().map((track) => (
        <div class="bg-[var(--card)] rounded-lg p-4 hover:bg-[var(--background)] transition-colors">
          <div class="aspect-square bg-[var(--background)] rounded-md mb-4" />
          <h3 class="font-medium text-white/90 truncate">{track.title}</h3>
          <p class="text-sm text-white/70 truncate">{track.artist}</p>
        </div>
      ))}
    </div>
  );
};
```

#### List Layout with Thumbnails
```tsx
const ListTrackList: Component = () => {
  return (
    <div class="space-y-2 p-4">
      {tracks().map((track) => (
        <div class="flex items-center gap-4 p-3 bg-[var(--card)] rounded-lg hover:bg-[var(--background)] transition-colors">
          <div class="w-12 h-12 bg-[var(--background)] rounded-md" />
          <div class="flex-1 min-w-0">
            <h3 class="font-medium text-white/90 truncate">{track.title}</h3>
            <p class="text-sm text-white/70 truncate">{track.artist}</p>
          </div>
          <span class="text-sm text-white/70">{track.duration}</span>
        </div>
      ))}
    </div>
  );
};
```

#### Compact List Layout
```tsx
const CompactTrackList: Component = () => {
  return (
    <div class="divide-y divide-white/10">
      {tracks().map((track) => (
        <div class="flex items-center gap-4 py-3 px-4 hover:bg-[var(--card)] transition-colors">
          <div class="w-8 h-8 bg-[var(--background)] rounded-md" />
          <div class="flex-1 min-w-0">
            <h3 class="font-medium text-white/90 truncate">{track.title}</h3>
            <p class="text-sm text-white/70 truncate">{track.artist}</p>
          </div>
          <span class="text-sm text-white/70">{track.duration}</span>
        </div>
      ))}
    </div>
  );
};
```

#### Masonry Layout
```tsx
const MasonryTrackList: Component = () => {
  return (
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {tracks().map((track) => (
        <div class="break-inside-avoid mb-4">
          <div class="bg-[var(--card)] rounded-lg p-4 hover:bg-[var(--background)] transition-colors">
            <div class="aspect-square bg-[var(--background)] rounded-md mb-4" />
            <h3 class="font-medium text-white/90 truncate">{track.title}</h3>
            <p class="text-sm text-white/70 truncate">{track.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
```

#### Carousel Layout
```tsx
const CarouselTrackList: Component = () => {
  return (
    <div class="relative">
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex gap-4 p-4">
          {tracks().map((track) => (
            <div class="flex-none w-64">
              <div class="bg-[var(--card)] rounded-lg p-4 hover:bg-[var(--background)] transition-colors">
                <div class="aspect-square bg-[var(--background)] rounded-md mb-4" />
                <h3 class="font-medium text-white/90 truncate">{track.title}</h3>
                <p class="text-sm text-white/70 truncate">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button class="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--card)] hover:bg-[var(--background)]">
        <ChevronLeft class="w-6 h-6" />
      </button>
      <button class="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--card)] hover:bg-[var(--background)]">
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>
  );
};
```

## Style Examples

### 1. Button Variations

#### Primary Button
```tsx
<button class="px-6 py-2 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-hover)] transition-colors">
  Play Now
</button>
```

#### Secondary Button
```tsx
<button class="px-6 py-2 bg-[var(--card)] text-white rounded-full hover:bg-[var(--background)] transition-colors">
  Add to Queue
</button>
```

#### Icon Button
```tsx
<button class="p-2 rounded-full bg-[var(--card)] hover:bg-[var(--background)] transition-colors">
  <Heart class="w-5 h-5" />
</button>
```

#### Floating Action Button
```tsx
<button class="fixed bottom-6 right-6 p-4 rounded-full bg-[var(--accent)] text-white shadow-lg hover:bg-[var(--accent-hover)] transition-colors">
  <Plus class="w-6 h-6" />
</button>
```

#### Gradient Button
```tsx
<button class="px-6 py-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] text-white rounded-full hover:opacity-90 transition-opacity">
  Play Now
</button>
```

#### Outline Button
```tsx
<button class="px-6 py-2 border-2 border-[var(--accent)] text-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors">
  Add to Queue
</button>
```

#### Text Button
```tsx
<button class="px-6 py-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">
  View More
</button>
```

### 2. Card Variations

#### Basic Card
```tsx
<div class="bg-[var(--card)] rounded-xl p-4">
  <div class="aspect-square bg-[var(--background)] rounded-lg mb-4" />
  <h3 class="font-medium text-white/90">Card Title</h3>
  <p class="text-sm text-white/70">Card Description</p>
</div>
```

#### Glass Card
```tsx
<div class="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
  <div class="aspect-square bg-white/5 rounded-lg mb-4" />
  <h3 class="font-medium text-white/90">Glass Card Title</h3>
  <p class="text-sm text-white/70">Glass Card Description</p>
</div>
```

#### Gradient Card
```tsx
<div class="bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-hover)]/20 rounded-xl p-4 border border-white/10">
  <div class="aspect-square bg-white/5 rounded-lg mb-4" />
  <h3 class="font-medium text-white/90">Gradient Card Title</h3>
  <p class="text-sm text-white/70">Gradient Card Description</p>
</div>
```

#### Neumorphic Card
```tsx
<div class="bg-[var(--card)] rounded-xl p-4 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1),inset_2px_2px_4px_rgba(0,0,0,0.1)]">
  <div class="aspect-square bg-[var(--background)] rounded-lg mb-4" />
  <h3 class="font-medium text-white/90">Neumorphic Card Title</h3>
  <p class="text-sm text-white/70">Neumorphic Card Description</p>
</div>
```

#### 3D Card
```tsx
<div class="bg-[var(--card)] rounded-xl p-4 transform transition-transform hover:scale-105 hover:rotate-1">
  <div class="aspect-square bg-[var(--background)] rounded-lg mb-4 shadow-lg" />
  <h3 class="font-medium text-white/90">3D Card Title</h3>
  <p class="text-sm text-white/70">3D Card Description</p>
</div>
```

## Animation Examples

### 1. Hover Effects

#### Scale Effect
```tsx
<div class="transform transition-transform duration-300 hover:scale-105">
  {/* Content */}
</div>
```

#### Glow Effect
```tsx
<div class="transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(29,185,84,0.3)]">
  {/* Content */}
</div>
```

#### Border Effect
```tsx
<div class="relative group">
  <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <div class="relative bg-[var(--card)] rounded-xl p-4">
    {/* Content */}
  </div>
</div>
```

#### Shine Effect
```tsx
<div class="relative overflow-hidden group">
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  <div class="relative bg-[var(--card)] rounded-xl p-4">
    {/* Content */}
  </div>
</div>
```

#### Pulse Effect
```tsx
<div class="animate-pulse bg-[var(--card)] rounded-xl p-4">
  {/* Content */}
</div>
```

#### Bounce Effect
```tsx
<div class="hover:animate-bounce bg-[var(--card)] rounded-xl p-4">
  {/* Content */}
</div>
```

### 2. Transition Effects

#### Fade In/Out
```tsx
<div class={cn(
  "transition-opacity duration-300",
  isVisible() ? "opacity-100" : "opacity-0"
)}>
  {/* Content */}
</div>
```

#### Slide In/Out
```tsx
<div class={cn(
  "transition-transform duration-300",
  isVisible() ? "translate-y-0" : "translate-y-full"
)}>
  {/* Content */}
</div>
```

#### Rotate Effect
```tsx
<div class={cn(
  "transition-transform duration-300",
  isPlaying() ? "rotate-180" : "rotate-0"
)}>
  {/* Content */}
</div>
```

#### Flip Effect
```tsx
<div class={cn(
  "transition-transform duration-500",
  isFlipped() ? "rotate-y-180" : "rotate-y-0"
)}>
  {/* Content */}
</div>
```

#### Zoom Effect
```tsx
<div class={cn(
  "transition-transform duration-300",
  isZoomed() ? "scale-110" : "scale-100"
)}>
  {/* Content */}
</div>
```

#### Shake Effect
```tsx
<div class={cn(
  "transition-transform duration-300",
  isShaking() ? "animate-shake" : ""
)}>
  {/* Content */}
</div>
```

## Theme Examples

### 1. Dark Themes

#### Spotify Dark
```css
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

#### Apple Music Dark
```css
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

#### YouTube Music Dark
```css
:root {
  --background: #0f0f0f;
  --card: #282828;
  --accent: #ff0000;
  --accent-hover: #ff1a1a;
  --text-primary: #ffffff;
  --text-secondary: #aaaaaa;
  --progress-bg: #383838;
}
```

#### SoundCloud Dark
```css
:root {
  --background: #1a1a1a;
  --card: #2a2a2a;
  --accent: #ff5500;
  --accent-hover: #ff7700;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --progress-bg: #404040;
}
```

#### Deezer Dark
```css
:root {
  --background: #121212;
  --card: #282828;
  --accent: #00c7f2;
  --accent-hover: #00d9ff;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --progress-bg: #404040;
}
```

### 2. Light Themes

#### Spotify Light
```css
:root {
  --background: #ffffff;
  --card: #f5f5f5;
  --accent: #1DB954;
  --accent-hover: #1ed760;
  --text-primary: #000000;
  --text-secondary: #666666;
  --progress-bg: #e0e0e0;
}
```

#### Apple Music Light
```css
:root {
  --background: #ffffff;
  --card: #f5f5f5;
  --accent: #ff2d55;
  --accent-hover: #ff3b5f;
  --text-primary: #000000;
  --text-secondary: #666666;
  --progress-bg: #e0e0e0;
}
```

#### SoundCloud Light
```css
:root {
  --background: #ffffff;
  --card: #f5f5f5;
  --accent: #ff5500;
  --accent-hover: #ff7700;
  --text-primary: #000000;
  --text-secondary: #666666;
  --progress-bg: #e0e0e0;
}
```

#### Deezer Light
```css
:root {
  --background: #ffffff;
  --card: #f5f5f5;
  --accent: #00c7f2;
  --accent-hover: #00d9ff;
  --text-primary: #000000;
  --text-secondary: #666666;
  --progress-bg: #e0e0e0;
}
```

## Custom Component Examples

### 1. Custom Progress Bar
```tsx
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

#### Waveform Progress Bar
```tsx
const WaveformProgressBar: Component<ProgressBarProps> = (props) => {
  return (
    <div class="relative h-8 bg-[var(--progress-bg)] rounded-full group cursor-pointer">
      <div class="absolute inset-0 flex items-center justify-between px-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            class="w-1 bg-[var(--accent)] rounded-full transition-all duration-300"
            style={{ 
              height: `${Math.sin(i * 0.5) * 50 + 50}%`,
              opacity: i < (props.progress / 5) ? 1 : 0.3
            }}
          />
        ))}
      </div>
      <div class="absolute inset-0 flex items-center justify-center opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300">
        <div class="w-3 h-3 bg-white rounded-full shadow-lg" />
      </div>
    </div>
  );
};
```

#### Circular Progress Bar
```tsx
const CircularProgressBar: Component<ProgressBarProps> = (props) => {
  return (
    <div class="relative w-16 h-16">
      <svg class="w-full h-full transform -rotate-90">
        <circle
          class="stroke-[var(--progress-bg)] fill-none"
          stroke-width="4"
          r="28"
          cx="32"
          cy="32"
        />
        <circle
          class="stroke-[var(--accent)] fill-none transition-all duration-300"
          stroke-width="4"
          r="28"
          cx="32"
          cy="32"
          stroke-dasharray={`${props.progress * 175.93} 175.93`}
        />
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-sm font-medium">{Math.round(props.progress * 100)}%</span>
      </div>
    </div>
  );
};
```

### 2. Custom Volume Slider
```tsx
const CustomVolumeSlider: Component<VolumeSliderProps> = (props) => {
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

#### Circular Volume Slider
```tsx
const CircularVolumeSlider: Component<VolumeSliderProps> = (props) => {
  return (
    <div class="relative w-12 h-12">
      <svg class="w-full h-full transform -rotate-90">
        <circle
          class="stroke-[var(--progress-bg)] fill-none"
          stroke-width="4"
          r="20"
          cx="24"
          cy="24"
        />
        <circle
          class="stroke-[var(--accent)] fill-none transition-all duration-300"
          stroke-width="4"
          r="20"
          cx="24"
          cy="24"
          stroke-dasharray={`${props.volume * 125.66} 125.66`}
        />
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <Volume2 class="w-6 h-6" />
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={props.volume}
        onInput={(e) => props.onChange(Number(e.currentTarget.value))}
        class="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
  );
};
```

### 3. Custom Search Input
```tsx
const CustomSearchInput: Component<SearchInputProps> = (props) => {
  return (
    <div class="relative">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
      <input
        type="text"
        placeholder="Search tracks..."
        class="w-full pl-10 pr-4 py-2 bg-[var(--card)] rounded-full text-white/90 
               placeholder:text-white/50 focus:outline-none focus:ring-2 
               focus:ring-[var(--accent)]/50"
        value={props.value}
        onInput={(e) => props.onChange(e.currentTarget.value)}
      />
    </div>
  );
};
```

#### Animated Search Input
```tsx
const AnimatedSearchInput: Component<SearchInputProps> = (props) => {
  return (
    <div class="relative">
      <div class="absolute inset-0 bg-[var(--accent)] rounded-full opacity-0 
                  group-focus-within:opacity-10 transition-opacity duration-300" />
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 
                    group-focus-within:text-[var(--accent)] transition-colors duration-300" />
      <input
        type="text"
        placeholder="Search tracks..."
        class="w-full pl-10 pr-4 py-2 bg-[var(--card)] rounded-full text-white/90 
               placeholder:text-white/50 focus:outline-none focus:ring-2 
               focus:ring-[var(--accent)]/50 transition-all duration-300"
        value={props.value}
        onInput={(e) => props.onChange(e.currentTarget.value)}
      />
    </div>
  );
};
```

## Resources

- [SolidJS Examples](https://www.solidjs.com/examples)
- [Tailwind UI Components](https://tailwindui.com/components)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/) 