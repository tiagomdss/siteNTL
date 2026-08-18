<template>
  <Transition name="loading-fade">
    <div
      v-if="loading"
      class="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-colors dark:bg-[#06182f]"
      aria-label="Carregando página"
      role="status"
    >
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,127,246,.12),transparent_42%)]" />

      <div class="relative flex flex-col items-center gap-7">
        <div class="relative">
          <div class="absolute -inset-5 rounded-full bg-primary-500/10 blur-[40px] dark:bg-primary-400/15" />
          <img src="/img/Marcas NTL3.png" alt="NTL - Nova Tecnologia" class="relative h-14 w-auto animate-[loadingPulse_1.8s_ease-in-out_infinite] object-contain dark:hidden sm:h-16" />
          <img src="/img/Marca NTL Branca.png" alt="NTL - Nova Tecnologia" class="relative hidden h-14 w-auto animate-[loadingPulse_1.8s_ease-in-out_infinite] object-contain dark:block sm:h-16" />
        </div>

        <div class="relative h-1 w-[190px] overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
          <div class="absolute inset-y-0 left-0 rounded-full bg-[#0b2345] transition-[width] duration-150 dark:bg-primary-300" :style="{ width: `${progress}%` }" />
        </div>

        <p class="m-0 text-[.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Carregando</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ loading: boolean }>()

const progress = ref(0)
let progressTimer: ReturnType<typeof setInterval> | null = null
let finishTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  progressTimer = setInterval(() => {
    if (progress.value < 90) progress.value += 3
    else if (progressTimer) {
      clearInterval(progressTimer)
      progressTimer = null
    }
  }, 20)

  finishTimer = setTimeout(() => {
    progress.value = 100
  }, 380)
})

onBeforeUnmount(() => {
  if (progressTimer) clearInterval(progressTimer)
  if (finishTimer) clearTimeout(finishTimer)
})
</script>

<style scoped>
.loading-fade-leave-active { transition: opacity .35s ease-out; }
.loading-fade-leave-to { opacity: 0; }

@keyframes loadingPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .72; transform: scale(.985); }
}
</style>
