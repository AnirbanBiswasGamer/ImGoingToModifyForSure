# Animations Guide

This guide provides templates and examples for adding animations to your music player application.

## Pre-built Animations

### 1. Fade Animations
```css
/* In tailwind.config.js */
keyframes: {
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "fade-out": {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
},
animation: {
  "fade-in": "fade-in 0.2s ease-out",
  "fade-out": "fade-out 0.2s ease-out",
}
```

Usage:
```tsx
<div class="animate-fade-in">
  {/* Content */}
</div>
```

### 2. Slide Animations
```css
/* In tailwind.config.js */
keyframes: {
  "slide-in": {
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0)" },
  },
  "slide-out": {
    from: { transform: "translateY(0)" },
    to: { transform: "translateY(-100%)" },
  },
},
animation: {
  "slide-in": "slide-in 0.2s ease-out",
  "slide-out": "slide-out 0.2s ease-out",
}
```

Usage:
```tsx
<div class="animate-slide-in">
  {/* Content */}
</div>
```

### 3. Scale Animations
```css
/* In tailwind.config.js */
keyframes: {
  "scale-in": {
    from: { transform: "scale(0.95)" },
    to: { transform: "scale(1)" },
  },
  "scale-out": {
    from: { transform: "scale(1)" },
    to: { transform: "scale(0.95)" },
  },
},
animation: {
  "scale-in": "scale-in 0.2s ease-out",
  "scale-out": "scale-out 0.2s ease-out",
}
```

Usage:
```tsx
<div class="animate-scale-in">
  {/* Content */}
</div>
```

## Component-Specific Animations

### 1. Search Bar Animation
```tsx
<div class={cn(
  "transform transition-all duration-300 ease-in-out",
  showSearch() ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 h-0"
)}>
  {/* Search content */}
</div>
```

### 2. Track List Animation
```tsx
<div class={cn(
  "border-t border-white/10 transform transition-all duration-300 ease-in-out",
  showQueue() ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 h-0"
)}>
  {/* Track list content */}
</div>
```

### 3. Play/Pause Button Animation
```tsx
<button 
  class="p-4 bg-[#1DB954] text-white rounded-full hover:bg-[#1ed760] transition-all duration-300 hover:scale-105 active:scale-95"
  onClick={handlePlayPause}
>
  {/* Button content */}
</button>
```

### 4. Track Item Hover Animation
```tsx
<div class="flex items-center gap-4 p-3 hover:bg-[#282828] cursor-pointer transition-colors duration-300 group">
  <div class="w-12 h-12 bg-[#282828] rounded-md flex items-center justify-center group-hover:bg-[#3E3E3E] transition-colors duration-300">
    {/* Track thumbnail */}
  </div>
  <div class="flex-1 min-w-0">
    <h3 class="font-medium text-white/90 truncate text-sm group-hover:text-[#1DB954] transition-colors duration-300">
      {/* Track name */}
    </h3>
  </div>
</div>
```

## Custom Animation Examples

### 1. Pulse Animation
```css
/* In tailwind.config.js */
keyframes: {
  "pulse": {
    "0%, 100%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.05)" },
  },
},
animation: {
  "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
}
```

### 2. Shake Animation
```css
/* In tailwind.config.js */
keyframes: {
  "shake": {
    "0%, 100%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-5px)" },
    "75%": { transform: "translateX(5px)" },
  },
},
animation: {
  "shake": "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
}
```

### 3. Rotate Animation
```css
/* In tailwind.config.js */
keyframes: {
  "rotate": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
},
animation: {
  "rotate": "rotate 2s linear infinite",
}
```

## Best Practices

1. **Performance**
   - Use `transform` and `opacity` for animations
   - Avoid animating layout properties
   - Use `will-change` for complex animations
   - Consider using `@media (prefers-reduced-motion)`

2. **Timing**
   - Keep animations short (0.2s - 0.3s)
   - Use appropriate easing functions
   - Maintain consistent timing across components

3. **Accessibility**
   - Respect user's motion preferences
   - Provide alternative states for reduced motion
   - Ensure animations don't interfere with usability

4. **Responsiveness**
   - Test animations on different devices
   - Adjust timing for mobile devices
   - Consider performance impact on low-end devices

## Resources

- [Tailwind Animation Documentation](https://tailwindcss.com/docs/animation)
- [CSS Animation Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Easing Functions](https://easings.net/) 