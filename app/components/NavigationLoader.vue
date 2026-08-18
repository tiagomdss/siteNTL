<template>
  <Transition name="route-loader">
    <div v-if="loading" class="fixed inset-0 z-[45] overflow-hidden bg-white pt-20 dark:bg-[#06182f]" aria-live="polite" aria-label="Carregando conteúdo">
      <div v-if="targetPath === '/vagas'" class="min-h-screen">
        <section class="border-b border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#051426]">
          <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
            <div class="animate-pulse">
              <div class="h-8 w-52 rounded-full bg-slate-200 dark:bg-white/10" />
              <div class="mt-7 h-12 w-full max-w-xl rounded-xl bg-slate-200 dark:bg-white/10 sm:h-16" />
              <div class="mt-4 h-12 w-full max-w-2xl rounded-xl bg-slate-100 dark:bg-white/5" />
              <div class="mt-8 flex gap-3">
                <div class="h-12 w-48 rounded-full bg-slate-200 dark:bg-white/10" />
                <div class="h-12 w-40 rounded-full bg-slate-100 dark:bg-white/5" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              <div class="h-32 animate-pulse rounded-3xl bg-slate-200 dark:bg-white/10" />
              <div class="h-32 animate-pulse rounded-3xl bg-slate-200 dark:bg-white/10" />
              <div class="col-span-2 h-28 animate-pulse rounded-3xl bg-[#0b2345]/20 dark:bg-white/10" />
            </div>
          </div>
        </section>
        <section class="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div class="h-10 w-72 animate-pulse rounded-xl bg-slate-200 dark:bg-white/10" />
          <div class="mt-8 h-14 w-full animate-pulse rounded-2xl bg-slate-100 dark:bg-white/5" />
          <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="i in 6" :key="i" class="h-[330px] animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <div class="h-6 w-24 rounded-full bg-slate-200 dark:bg-white/10" />
              <div class="mt-6 h-7 w-4/5 rounded bg-slate-200 dark:bg-white/10" />
              <div class="mt-4 h-4 w-2/3 rounded bg-slate-100 dark:bg-white/5" />
              <div class="mt-3 h-4 w-1/2 rounded bg-slate-100 dark:bg-white/5" />
              <div class="mt-20 h-12 rounded-xl bg-slate-200 dark:bg-white/10" />
            </div>
          </div>
        </section>
      </div>

      <div v-else class="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div class="animate-pulse">
          <div class="h-8 w-48 rounded-full bg-slate-200 dark:bg-white/10" />
          <div class="mt-8 h-14 w-full max-w-3xl rounded-xl bg-slate-200 dark:bg-white/10 sm:h-20" />
          <div class="mt-5 h-6 w-full max-w-2xl rounded bg-slate-100 dark:bg-white/5" />
          <div class="mt-3 h-6 w-4/5 max-w-xl rounded bg-slate-100 dark:bg-white/5" />
          <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="i in 6" :key="i" class="h-44 rounded-3xl bg-slate-100 dark:bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const router = useRouter()
const loading = ref(false)
const targetPath = ref('')
let timer: ReturnType<typeof setTimeout> | null = null

router.beforeEach((to) => {
  targetPath.value = to.path
  loading.value = true
  if (timer) clearTimeout(timer)
})

router.afterEach(() => {
  timer = setTimeout(() => {
    loading.value = false
  }, 120)
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.route-loader-enter-active,
.route-loader-leave-active { transition: opacity .18s ease; }
.route-loader-enter-from,
.route-loader-leave-to { opacity: 0; }
</style>
