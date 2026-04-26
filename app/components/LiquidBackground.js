"use client"

import { useEffect, useRef } from "react"

export function LiquidBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const script = document.createElement("script")
    script.type = "module"
    script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';

      const canvas = document.getElementById('liquid-canvas');
      if (canvas) {
        const app = LiquidBackground(canvas);

        const c = document.createElement('canvas');
        c.width = 1920;
        c.height = 1080;
        const ctx = c.getContext('2d');

        const g = ctx.createRadialGradient(960, 340, 80, 960, 540, 1300);
        g.addColorStop(0, '#1e78d0');
        g.addColorStop(0.3, '#1260b0');
        g.addColorStop(0.6, '#0a4080');
        g.addColorStop(1, '#072e6e');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 1920, 1080);

        app.loadImage(c.toDataURL());
        app.liquidPlane.material.metalness = 0.5;
        app.liquidPlane.material.roughness = 0.45;
        app.liquidPlane.uniforms.displacementScale.value = 2.5;
        app.setRain(false);
        window.__liquidApp = app;
      }
    `
    document.body.appendChild(script)

    return () => {
      if (window.__liquidApp && window.__liquidApp.dispose) {
        window.__liquidApp.dispose()
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="liquid-canvas"
      className="liquid-canvas"
    />
  )
}
