<template>
  <div class="dark min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Scroll to Top Button -->
    <button 
      @click="scrollToTop"
      class="scroll-to-top"
      :class="{ 'show': showScrollTop }"
      aria-label="Voltar ao topo"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>

    <!-- Footer -->
    <footer class="glass mt-20 py-12 border-t border-white/10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <img src="/img/Marca NTL Branca.png" alt="NTL Logo" class="h-10" />
            </div>
            <p class="text-gray-200 text-sm mb-4">
              Há mais de 30 anos oferecendo soluções sob medida para a performance de sua empresa.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul class="space-y-2">
              <li v-for="item in menuItems" :key="item.name">
                <NuxtLink :to="item.path" class="text-gray-200 hover:text-primary-400 transition-colors text-sm">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contato</h3>
            <ul class="space-y-2 text-sm text-gray-200">
              <li>Rio de Janeiro, RJ</li>
              <li>contato@ntl.com.br</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} NTL - Nova Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const showScrollTop = ref(false)

const menuItems = [
  { name: 'Início', path: '/' },
  { name: 'A Empresa', path: '#empresa' },
  { name: 'Soluções', path: '#solucoes' },
  { name: 'Clientes', path: '#clientes' },
  { name: 'Projetos', path: '#projetos' }
]

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Handle scroll effect
onMounted(() => {
  window.addEventListener('scroll', () => {
    showScrollTop.value = window.scrollY > 300
  })
})
</script>
