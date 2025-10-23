<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled ? 'backdrop-blur-2xl bg-black/40 shadow-2xl border-b border-white/10' : 'bg-transparent'">
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
