# UI Customization Guide

This guide will help you customize the UI of your music player application. The app uses Tailwind CSS for styling and SolidJS for the frontend framework.

## Color Scheme

The app uses Spotify's color palette by default, but you can easily customize it. Here are the main color variables:

```css
/* Main Colors */
--background: #121212;      /* Main background */
--card: #282828;           /* Card and section backgrounds */
--accent: #1DB954;         /* Primary accent color (Spotify green) */
--accent-hover: #1ed760;   /* Accent color on hover */
--text-primary: #ffffff;   /* Primary text */
--text-secondary: #b3b3b3; /* Secondary text */
--progress-bg: #4D4D4D;    /* Progress bar background */
```

## Component Structure

### 1. Player Component (`src/components/Player.tsx`)
The main player component that contains all UI elements.

```tsx
// Template for customizing the player container
<div class="w-full max-w-md mx-auto bg-[#121212] text-white rounded-xl overflow-hidden shadow-2xl backdrop-blur-lg transition-all duration-300">
  {/* Your custom styles here */}
</div>
```

### 2. Header Section
The top section containing the app title and control buttons.

```tsx
// Template for customizing the header
<div class="bg-[#282828] px-4 py-3 flex items-center justify-between">
  <div class="flex items-center gap-2">
    <Music class="h-5 w-5 text-[#1DB954]" />
    <h1 class="font-semibold text-white">Your App Name</h1>
  </div>
  {/* Control buttons */}
</div>
```

### 3. Search Bar
The collapsible search interface.

```tsx
// Template for customizing the search bar
<div class="p-3 bg-[#282828]">
  <div class="relative flex items-center">
    <input
      type="text"
      placeholder="Search for music..."
      class="w-full py-2 px-3 bg-[#3E3E3E] rounded-full text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#1DB954]/50 transition-all duration-300"
    />
    {/* Search button */}
  </div>
</div>
```

### 4. Track Info Section
The section displaying current track information.

```tsx
// Template for customizing track info
<div class="flex items-center gap-6 mb-8">
  <div class="w-20 h-20 bg-[#282828] rounded-lg flex items-center justify-center group relative overflow-hidden transition-transform duration-300 hover:scale-105">
    {/* Album art or icon */}
  </div>
  <div class="flex-1 min-w-0">
    <h2 class="font-semibold text-lg text-white/90 truncate mb-1">Track Name</h2>
    <p class="text-sm text-white/60 truncate">Artist Name</p>
  </div>
  {/* Like button */}
</div>
```

### 5. Progress Bar
The audio progress indicator.

```tsx
// Template for customizing the progress bar
<div class="mb-6">
  <div class="h-1 bg-[#4D4D4D] rounded-full overflow-hidden group cursor-pointer">
    <div class="h-full w-0 bg-[#1DB954] group-hover:bg-[#1ed760] transition-colors duration-300" />
    {/* Progress handle */}
  </div>
  {/* Time display */}
</div>
```

### 6. Player Controls
The playback control buttons.

```tsx
// Template for customizing player controls
<div class="flex items-center justify-center gap-6 mb-8">
  <button class="p-2 text-white/80 hover:text-white transition-colors duration-300">
    {/* Control icons */}
  </button>
  {/* Play/Pause button */}
  <button class="p-4 bg-[#1DB954] text-white rounded-full hover:bg-[#1ed760] transition-all duration-300 hover:scale-105 active:scale-95">
    {/* Play/Pause icon */}
  </button>
</div>
```

### 7. Volume Control
The volume slider.

```tsx
// Template for customizing volume control
<div class="flex items-center gap-3">
  <Volume2 class="w-5 h-5 text-white/70" />
  <div class="flex-1 group">
    <input
      type="range"
      class="w-full h-1 bg-[#4D4D4D] rounded-full appearance-none cursor-pointer 
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
        [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full 
        [&::-webkit-slider-thumb]:bg-white hover:[&::-webkit-slider-thumb]:bg-[#1DB954]
        transition-all duration-300"
    />
  </div>
</div>
```

### 8. Track List
The playlist or queue display.

```tsx
// Template for customizing track list
<div class="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1DB954]/20 scrollbar-track-[#282828]">
  {/* Track items */}
  <div class="flex items-center gap-4 p-3 hover:bg-[#282828] cursor-pointer transition-colors duration-300 group">
    {/* Track thumbnail */}
    <div class="w-12 h-12 bg-[#282828] rounded-md flex items-center justify-center group-hover:bg-[#3E3E3E] transition-colors duration-300">
      {/* Track icon */}
    </div>
    {/* Track info */}
    <div class="flex-1 min-w-0">
      <h3 class="font-medium text-white/90 truncate text-sm group-hover:text-[#1DB954] transition-colors duration-300">Track Name</h3>
      <p class="text-xs text-white/60 truncate">Artist Name</p>
    </div>
    {/* Duration */}
  </div>
</div>
```

## Customization Tips

1. **Changing Colors**
   - Replace the hex color codes with your preferred colors
   - Use Tailwind's color palette or custom colors
   - Maintain contrast ratios for accessibility

2. **Modifying Layout**
   - Adjust padding and margins using Tailwind's spacing scale
   - Change flex layouts and grid structures
   - Modify component sizes and proportions

3. **Adding Animations**
   - Use Tailwind's transition utilities
   - Add custom keyframes in `tailwind.config.js`
   - Implement hover and active states

4. **Responsive Design**
   - Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
   - Adjust layouts for different screen sizes
   - Test on various devices

5. **Accessibility**
   - Maintain proper contrast ratios
   - Add appropriate ARIA labels
   - Ensure keyboard navigation works

## File Structure

```
src/
├── components/
│   └── Player.tsx         # Main player component
├── lib/
│   └── utils.ts           # Utility functions
├── stylesheets/
│   └── global.css         # Global styles
└── App.tsx                # Root component
```

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [SolidJS Documentation](https://www.solidjs.com/docs)
- [Lucide Icons](https://lucide.dev) 