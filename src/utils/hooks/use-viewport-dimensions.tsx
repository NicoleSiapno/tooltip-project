const useViewportDimensions = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  return { viewportWidth, viewportHeight }
}

export default useViewportDimensions
