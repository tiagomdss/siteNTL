<template>
  <nav class="fixed top-0 left-0 right-0 z-50 navbar-custom" :class="{ 'scrolled': scrolled }">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img src="/img/Marca NTL Branca.png" alt="NTL Logo" class="h-12 transform group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_0px_rgba(0,0,0,0.8)] dark:drop-shadow-none" />
        </NuxtLink>

        <!-- Desktop Navigation Items -->
        <div class="hidden lg:flex items-center gap-8">
          <!-- Main Menu -->
          <div v-for="item in menuItems" :key="item.name" class="relative group">
            <NuxtLink 
              :to="item.path" 
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors flex items-center gap-1"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Right Side Actions (inside desktop flex) -->
          <div class="flex items-center border-l border-gray-200 dark:border-white/10 ml-4 pl-8">

            <!-- Theme Switcher -->
            <div class="relative ml-6" ref="themeMenuRef">
              <button 
                @click="themeMenuOpen = !themeMenuOpen"
                class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
                aria-label="Alternar tema"
              >
                <svg v-if="theme === 'light'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <svg v-else-if="theme === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </button>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div v-if="themeMenuOpen" class="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-1 overflow-hidden z-50">
                  <button @click="setTheme('light'); themeMenuOpen = false" class="w-full px-4 py-2 text-sm text-left flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200" :class="{'text-primary-500': theme === 'light'}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <span>Claro</span>
                  </button>
                  <button @click="setTheme('dark'); themeMenuOpen = false" class="w-full px-4 py-2 text-sm text-left flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200" :class="{'text-primary-500': theme === 'dark'}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <span>Escuro</span>
                  </button>
                  <button @click="setTheme('system'); themeMenuOpen = false" class="w-full px-4 py-2 text-sm text-left flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200" :class="{'text-primary-500': theme === 'system'}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>Auto</span>
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden mt-4 bg-white dark:bg-gray-950 rounded-2xl p-4 space-y-2 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary-600 dark:hover:text-primary-400 text-gray-700 dark:text-white"
          >
            {{ item.name }}
          </NuxtLink>
          
          <div class="px-4 py-3 border-t border-gray-200 dark:border-white/10 mt-2">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider font-semibold">Tema</p>
            <div class="flex space-x-2">
              <button @click="setTheme('light')" class="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-200 flex items-center justify-center space-x-2" :class="{'ring-2 ring-primary-500': theme === 'light'}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <span class="text-sm text-xs">Claro</span>
              </button>
              <button @click="setTheme('dark')" class="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-200 flex items-center justify-center space-x-2" :class="{'ring-2 ring-primary-500': theme === 'dark'}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                <span class="text-sm text-xs">Escuro</span>
              </button>
            </div>
          </div>

          <NuxtLink to="/contato" class="w-full btn-liquid mt-2 block text-center" @click="mobileMenuOpen = false">
            Contato
          </NuxtLink>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const themeMenuOpen = ref(false)
const themeMenuRef = ref<HTMLElement | null>(null)
const { theme, setTheme } = useTheme()

const menuItems = [
  { name: 'Início', path: '/' },
  { name: 'Empresa', path: '/#empresa' },
  { name: 'Soluções', path: '/#solucoes' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Vagas', path: '/vagas' },
  { name: 'Contato', path: '/contato' }
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (themeMenuRef.value && e.target instanceof Node && !themeMenuRef.value.contains(e.target)) {
      themeMenuOpen.value = false
    }
  })
})
</script>

<style scoped>
.navbar-custom {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  will-change: background-color, backdrop-filter, box-shadow;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-custom::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.9); /* Default Light */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  pointer-events: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.dark .navbar-custom::before {
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.9));
  box-shadow: none;
}

.navbar-custom.scrolled::before {
  opacity: 1; 
}

.navbar-custom.scrolled {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.dark .navbar-custom.scrolled {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
</style>
