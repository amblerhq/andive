import {useState, useCallback, useEffect} from 'react'

export default function useElementRect(ref: any) {
  const [rect, setRect] = useState(null)

  const onResize = useCallback(() => {
    if (ref.current) {
      setRect(() => ref.current.getBoundingClientRect())
    }
  }, [ref.current])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return rect
}
