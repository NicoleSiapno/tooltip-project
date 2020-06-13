const usePosition = (element: HTMLElement | null) => {
  if (!element) return null

  const { top, right, bottom, left } = element.getBoundingClientRect()
  return { top, right, bottom, left }
}

export default usePosition
