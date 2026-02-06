import useCanvasCursor from './hooks/useCanvasCursor'

const CanvasCursor = () => {
  useCanvasCursor()
  return <canvas className="canvas-cursor pointer-events-none fixed inset-0" id="canvas" />
}

export default CanvasCursor
