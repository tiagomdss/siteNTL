<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#071b35]/92'
      : 'bg-transparent'"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="group flex shrink-0 items-center" aria-label="NTL - Início">
        <img
          src="/img/Marcas NTL3.png"
          alt="NTL Nova Tecnologia"
          class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] dark:hidden sm:h-11"
        />
        <img
          src="/img/Marca NTL Branca.png"
          alt="NTL Nova Tecnologia"
          class="hidden h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] dark:block sm:h-11"
        />
      </NuxtLink>

      <div class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-900/5 hover:text-[#0b2345] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <div class="relative" ref="themeMenuRef">
          <button
            class="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-primary-300 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label="Alterar tema"
            @click="themeMenuOpen = !themeMenuOpen"
          >
            <svg v-if="theme === 'light'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <svg v-else-if="theme === 'dark'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </button>

          <Transition name="menu-fade">
            <div v-if="themeMenuOpen" class="absolute right-0 mt-3 w-40 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-[#0b2345]">
              <button
                v-for="option in themeOptions"
                :key="option.value"
                class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                @click="setTheme(option.value); themeMenuOpen = false"
              >
                {{ option.label }}
                <span v-if="theme === option.value" class="h-2 w-2 rounded-full bg-primary-500" />
              </button>
            </div>
          </Transition>
        </div>

        <NuxtLink to="/contato" class="rounded-full bg-[#0b2345] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#0b2345]/15 transition hover:-translate-y-0.5 hover:bg-[#12345d] dark:bg-white dark:text-[#071b35] dark:hover:bg-slate-100">
          Fale com a NTL
        </NuxtLink>
      </div>

      <button
        class="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 backdrop-blur lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
        aria-label="Abrir menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="border-t border-slate-200/70 bg-white/95 px-5 pb-6 pt-4 shadow-2xl backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#071b35]/98">
        <div class="mx-auto max-w-7xl space-y-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            class="block rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>

          <div class="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200 pt-4 dark:border-white/10">
            <button
              v-for="option in themeOptions"
              :key="option.value"
              class="rounded-xl border px-3 py-2 text-sm font-semibold transition"
              :class="theme === option.value
                ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-500/15 dark:text-primary-200'
                : 'border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300'"
              @click="setTheme(option.value)"
            >
              {{ option.short }}
            </button>
          </div>

          <NuxtLink to="/contato" class="mt-4 block rounded-xl bg-[#0b2345] px-5 py-3 text-center font-bold text-white dark:bg-white dark:text-[#071b35]" @click="mobileMenuOpen = false">
            Fale com a NTL
          </NuxtLink>
        </div>
      </div>
    </Transition>
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
  { name: 'Clientes', path: '/#clientes' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Vagas', path: '/vagas' }
]

const themeOptions = [
  { value: 'light' as const, label: 'Modo claro', short: 'Claro' },
  { value: 'dark' as const, label: 'Modo escuro', short: 'Escuro' },
  { value: 'system' as const, label: 'Automático', short: 'Auto' }
]

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

const onDocumentClick = (event: MouseEvent) => {
  if (themeMenuRef.value && event.target instanceof Node && !themeMenuRef.value.contains(event.target)) {
    themeMenuOpen.value = false
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocumentClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocumentClick)
})
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active,
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(.98);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
