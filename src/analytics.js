function createAnalytics() {
  let counter = 0
  let Destroyed = false

  const listener = () => counter++

  document.addEventListener('click', listener)

  return {
    destroy() {
      document.removeEventListener('click', listener)
      Destroyed = true
    },

    getClicks() {
      if (isDestroyed) {
        return 'analytics is destroyed clics = ${counter}'
      }
      return counter
    }
  }
}

window.analytics = createAnalytics()