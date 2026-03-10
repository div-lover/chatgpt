# PrismaticBurst

A high-performance WebGL prismatic burst background effect built with [OGL](https://github.com/o-gl/ogl). It features customizable ray patterns, 3D animations, and dynamic color gradients.

## Dependencies
- `ogl`: ^0.0.116
- `react`: ^18.x
- `react-dom`: ^18.x

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `intensity` | `number` | `2` | Overall brightness/intensity of the rays. |
| `speed` | `number` | `0.5` | Speed of the animation loops. |
| `animationType` | `'rotate' \| 'rotate3d' \| 'hover'` | `'rotate3d'` | The logic for how the rays move/interact. |
| `colors` | `string[]` | `undefined` | Array of hex color strings to create the prismatic gradient. |
| `distort` | `number` | `0` | Amount of wave distortion applied to rays. |
| `paused` | `boolean` | `false` | Whether to pause the time-based animation. |
| `offset` | `Offset` | `{ x: 0, y: 0 }` | X/Y offset for the center of the burst. |
| `hoverDampness` | `number` | `0.25` | Smoothness of mouse follow (0-1). |
| `rayCount` | `number` | `24` | Number of distinct rays to render. |
| `mixBlendMode` | `CSSProperties['mixBlendMode'] \| 'none'` | `'lighten'` | Canvas CSS blend mode. |
| `className` | `string` | `""` | Additional CSS classes for the container. |

## Usage

```tsx
import { PrismaticBurst } from './src/Component';

function MyBackground() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <PrismaticBurst
        animationType="rotate3d"
        colors={['#ff007a', '#4d3dff', '#ffffff']}
        rayCount={32}
        speed={0.5}
      />
    </div>
  );
}
```
