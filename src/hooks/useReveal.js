import { useEffect, useRef } from 'react'

/**
 * Adds the "in-view" class to an element the first time it scrolls
 * into the viewport. Keeps animation logic in one small, reusable hook
 * instead of a heavier animation library.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}
