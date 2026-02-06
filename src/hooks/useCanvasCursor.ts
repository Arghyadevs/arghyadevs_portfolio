import { useEffect } from 'react'

type TrailConfig = {
  spring: number
}

type Point = {
  x: number
  y: number
  vx: number
  vy: number
}

class Oscillator {
  private phase: number
  private offset: number
  private frequency: number
  private amplitude: number
  private value: number

  constructor(options: { phase: number; offset: number; frequency: number; amplitude: number }) {
    this.phase = options.phase
    this.offset = options.offset
    this.frequency = options.frequency
    this.amplitude = options.amplitude
    this.value = options.offset
  }

  update() {
    this.phase += this.frequency
    this.value = this.offset + Math.sin(this.phase) * this.amplitude
    return this.value
  }
}

class TrailLine {
  private spring: number
  private friction: number
  private nodes: Point[]
  private tension: number
  private dampening: number

  constructor(config: TrailConfig, settings: { friction: number; size: number; tension: number; dampening: number }, pos: { x: number; y: number }) {
    this.spring = config.spring + 0.1 * Math.random() - 0.02
    this.friction = settings.friction + 0.01 * Math.random() - 0.002
    this.tension = settings.tension
    this.dampening = settings.dampening
    this.nodes = []
    for (let i = 0; i < settings.size; i += 1) {
      this.nodes.push({ x: pos.x, y: pos.y, vx: 0, vy: 0 })
    }
  }

  update(pos: { x: number; y: number }) {
    let spring = this.spring
    let node = this.nodes[0]
    node.vx += (pos.x - node.x) * spring
    node.vy += (pos.y - node.y) * spring

    for (let i = 0; i < this.nodes.length; i += 1) {
      node = this.nodes[i]
      if (i > 0) {
        const prev = this.nodes[i - 1]
        node.vx += (prev.x - node.x) * spring
        node.vy += (prev.y - node.y) * spring
        node.vx += prev.vx * this.dampening
        node.vy += prev.vy * this.dampening
      }
      node.vx *= this.friction
      node.vy *= this.friction
      node.x += node.vx
      node.y += node.vy
      spring *= this.tension
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let a = this.nodes[0].x
    let b = this.nodes[0].y
    ctx.beginPath()
    ctx.moveTo(a, b)
    for (let i = 1; i < this.nodes.length - 2; i += 1) {
      const cur = this.nodes[i]
      const next = this.nodes[i + 1]
      a = 0.5 * (cur.x + next.x)
      b = 0.5 * (cur.y + next.y)
      ctx.quadraticCurveTo(cur.x, cur.y, a, b)
    }
    const penult = this.nodes[this.nodes.length - 2]
    const last = this.nodes[this.nodes.length - 1]
    ctx.quadraticCurveTo(penult.x, penult.y, last.x, last.y)
    ctx.stroke()
    ctx.closePath()
  }
}

const useCanvasCursor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')
    if (reduceMotion.matches || !finePointer.matches) return

    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const settings = {
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const lines: TrailLine[] = []
    for (let i = 0; i < settings.trails; i += 1) {
      lines.push(new TrailLine({ spring: 0.4 + (i / settings.trails) * 0.025 }, settings, pos))
    }

    const oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    })

    let running = true
    let rafId = 0

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const render = () => {
      if (!running) return
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'
      ctx.strokeStyle = `hsla(${Math.round(oscillator.update())}, 55%, 55%, 0.22)`
      ctx.lineWidth = 1
      for (let i = 0; i < lines.length; i += 1) {
        lines[i].update(pos)
        lines[i].draw(ctx)
      }
      rafId = window.requestAnimationFrame(render)
    }

    const handleMove = (event: MouseEvent | TouchEvent) => {
      if ('touches' in event && event.touches.length > 0) {
        pos.x = event.touches[0].clientX
        pos.y = event.touches[0].clientY
      } else if ('clientX' in event) {
        pos.x = event.clientX
        pos.y = event.clientY
      }
    }

    resizeCanvas()
    render()

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchmove', handleMove, { passive: true })
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('orientationchange', resizeCanvas)

    return () => {
      running = false
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('orientationchange', resizeCanvas)
    }
  }, [])
}

export default useCanvasCursor
