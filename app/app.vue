<template>
  <div>
    <GlobalLoader :loading="isLoading" />

    <div class="min-h-screen overflow-x-clip bg-white text-slate-900 transition-colors duration-300 dark:bg-[#06182f] dark:text-white">
      <Navbar />
      <NavigationLoader />

      <main class="min-w-0 overflow-x-clip">
        <NuxtPage />
      </main>

      <button
        class="fixed bottom-5 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#0b2345] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-white dark:text-[#071b35] sm:right-5"
        :class="showScrollTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'"
        aria-label="Voltar ao topo"
        @click="scrollToTop"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
      </button>

      <footer class="overflow-x-clip border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#051426]">
        <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div class="grid min-w-0 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div class="min-w-0 lg:col-span-2">
              <NuxtLink to="/" class="inline-flex max-w-full items-center">
                <img src="/img/Marcas NTL3.png" alt="NTL Nova Tecnologia" class="h-10 w-auto max-w-full object-contain dark:hidden sm:h-11" />
                <img src="/img/Marca NTL Branca.png" alt="NTL Nova Tecnologia" class="hidden h-10 w-auto max-w-full object-contain dark:block sm:h-11" />
              </NuxtLink>
              <p class="mt-5 max-w-xl break-words text-sm leading-7 text-slate-600 dark:text-slate-300">
                Desde 1988, tecnologia, serviços e pessoas trabalhando juntos para melhorar a operação e a performance de organizações em todo o Brasil.
              </p>
              <div class="mt-6 flex max-w-full flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 sm:text-xs sm:tracking-[0.18em]">
                <span class="rounded-full border border-slate-200 px-3 py-2 dark:border-white/10">Tecnologia</span>
                <span class="rounded-full border border-slate-200 px-3 py-2 dark:border-white/10">Facilities</span>
                <span class="rounded-full border border-slate-200 px-3 py-2 dark:border-white/10">Software</span>
                <span class="rounded-full border border-slate-200 px-3 py-2 dark:border-white/10">Transformação Digital</span>
              </div>
            </div>

            <div class="min-w-0">
              <h3 class="text-sm font-bold uppercase tracking-[0.18em] text-[#0b2345] dark:text-primary-300">Navegação</h3>
              <ul class="mt-5 space-y-3">
                <li v-for="item in menuItems" :key="item.name">
                  <NuxtLink :to="item.path" class="text-sm text-slate-600 transition hover:text-[#0b2345] dark:text-slate-300 dark:hover:text-white">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="min-w-0">
              <h3 class="text-sm font-bold uppercase tracking-[0.18em] text-[#0b2345] dark:text-primary-300">Contato</h3>
              <div class="mt-5 space-y-4 break-words text-sm text-slate-600 dark:text-slate-300">
                <p>Rio de Janeiro, RJ</p>
                <a href="mailto:contato@ntl.com.br" class="block break-all transition hover:text-[#0b2345] dark:hover:text-white">contato@ntl.com.br</a>
                <a href="tel:+552131507309" class="block transition hover:text-[#0b2345] dark:hover:text-white">(21) 3150-7309</a>
                <a href="https://wa.me/5521993259808?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20institucional." target="_blank" rel="noopener" class="block transition hover:text-[#0b2345] dark:hover:text-white">WhatsApp: (21) 99325-9808</a>
              </div>
              <div class="mt-6 flex gap-3">
                <a href="https://www.linkedin.com/company/ntl-nova-tecnologia-ltda./" target="_blank" rel="noopener" class="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-[#0b2345] hover:text-[#0b2345] dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:text-white" aria-label="LinkedIn">in</a>
                <a href="https://instagram.com/ntl_nova_tecnologia" target="_blank" rel="noopener" class="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-[#0b2345] hover:text-[#0b2345] dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:text-white" aria-label="Instagram">ig</a>
              </div>
            </div>
          </div>

          <div class="mt-12 flex min-w-0 flex-col gap-3 border-t border-slate-200 pt-7 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p class="break-words">© {{ currentYear }} NTL - Nova Tecnologia. Todos os direitos reservados.</p>
            <p>Inovação e serviços desde 1988.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const showScrollTop = ref(false)
const isLoading = ref(true)
const currentYear = new Date().getFullYear()
const { initTheme } = useTheme()

const menuItems = [
  { name: 'Início', path: '/' },
  { name: 'Empresa', path: '/#empresa' },
  { name: 'Soluções', path: '/#solucoes' },
  { name: 'Clientes', path: '/#clientes' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Vagas', path: '/vagas' },
  { name: 'Contato', path: '/contato' }
]

const onScroll = () => {
  showScrollTop.value = window.scrollY > 420
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
  initTheme()
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  nextTick(() => {
    window.setTimeout(() => {
      isLoading.value = false
    }, 450)
  })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
