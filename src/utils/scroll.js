// Ease-in-out cubic for buttery smooth scroll
export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function smoothScrollTo(targetY, duration = 600) {
  const startY = window.pageYOffset
  const diff = targetY - startY
  let startTime = null

  function step(currentTime) {
    if (!startTime) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + diff * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function scrollToSection(sectionId, navOffset = 72, duration = 600) {
  const id = sectionId.replace('#', '')

  if (id === 'hero') {
    smoothScrollTo(0, duration)
    return
  }

  const el = document.getElementById(id)
  if (!el) return

  const target = el.getBoundingClientRect().top + window.pageYOffset - navOffset
  smoothScrollTo(target, duration)
}
