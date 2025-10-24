<template>
  <nav class="fixed top-0 left-0 right-0 z-50 navbar-custom" :class="{ 'scrolled': scrolled }">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img src="/img/Marca NTL Branca.png" alt="NTL Logo" class="h-12 transform group-hover:scale-110 transition-transform duration-300" />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            class="px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-primary-400"
          >
            {{ item.name }}
          </NuxtLink>
          <button class="btn-liquid ml-4">
            Contato
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div v-if="mobileMenuOpen" class="lg:hidden mt-4 backdrop-blur-2xl bg-black/40 rounded-2xl p-4 space-y-2 border border-white/10">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-primary-400"
          >
            {{ item.name }}
          </NuxtLink>
          <button class="w-full btn-liquid mt-2">
            Contato
          </button>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Início', path: '/' },
  { name: 'A Empresa', path: '#empresa' },
  { name: 'Soluções', path: '#solucoes' },
  { name: 'Clientes', path: '#clientes' },
  { name: 'Projetos', path: '#projetos' }
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
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
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.9));
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  pointer-events: none;
}

.navbar-custom.scrolled::before {
  opacity: 1;
}

.navbar-custom.scrolled {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
</style>
