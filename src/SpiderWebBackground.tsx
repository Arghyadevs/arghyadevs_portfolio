import { useEffect, useRef } from 'react'

export function SpiderWebBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    function drawWeb() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = 'rgba(0,255,213,0.15)'
      ctx.lineWidth = 1.2
      const centerX = width / 2
      const centerY = height / 2
      const rings = 8
      const spokes = 16
      const maxRadius = Math.min(width, height) / 2.2
      // Draw rings
      for (let r = 1; r <= rings; r++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (r / rings) * maxRadius, 0, 2 * Math.PI)
        ctx.stroke()
      }
      // Draw spokes
      for (let s = 0; s < spokes; s++) {
        const angle = (2 * Math.PI * s) / spokes
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle))
        ctx.stroke()
      }
    }
    drawWeb()
    // Animate subtle movement
    let t = 0
    function animate() {
      if (!ctx) return
      const centerX = width / 2
      const centerY = height / 2
      t += 0.01
      ctx.save()
      ctx.clearRect(0, 0, width, height)
      ctx.translate(centerX, centerY)
      ctx.rotate(Math.sin(t) * 0.01)
      ctx.translate(-centerX, -centerY)
      drawWeb()
      ctx.restore()
      requestAnimationFrame(animate)
    }
    animate()
    // Responsive resize
    function handleResize() {
      if (!canvas) return
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
