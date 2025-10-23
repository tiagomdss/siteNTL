export const useScrollAnimation = () => {
  const scrollY = ref(0)
  const isScrolled = computed(() => scrollY.value > 50)

  const updateScroll = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })

  return {
    scrollY,
    isScrolled
  }
}

export const useSmoothScroll = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    scrollTo
  }
}
