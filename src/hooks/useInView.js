import { useState, useEffect, useRef } from 'react'

/**
 * Hook that returns true when element enters viewport
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Once in view, stop observing
          observer.unobserve(element)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

/**
 * Hook for scroll position
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

/**
 * Hook that tracks which section is currently active with high-precision scroll detection
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160 // offset for fixed navbar + natural sightline
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      // If scrolled close to the bottom of the page, activate the last section
      if (window.scrollY + windowHeight >= fullHeight - 60) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      // Default to the first section (e.g. 'about' during initial scroll / top)
      let currentSection = sectionIds[0]

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            currentSection = id
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Run on initial render
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [sectionIds])

  return activeSection
}

/**
 * Hook to lock body scroll
 */
export function useBodyScrollLock(active) {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])
}
