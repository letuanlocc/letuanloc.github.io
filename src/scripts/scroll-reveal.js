import ScrollReveal from 'scrollreveal'

export function initScrollReveal() {
  const sr = ScrollReveal({
    reset: false,
  })

  sr.reveal('.banner-text', { delay: 200, origin: 'top' })
  sr.reveal('.banner-cta', { delay: 400, origin: 'bottom' })
  sr.reveal('.section-title', { delay: 200, origin: 'left' })
  sr.reveal('.section-content', { delay: 400, origin: 'right' })
}
