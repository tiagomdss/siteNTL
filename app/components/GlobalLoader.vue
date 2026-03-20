<template>
  <Transition name="loading-fade">
    <div
      v-if="loading"
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none"
      aria-label="Carregando página"
    >
      <!-- Dark gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"></div>

      <div class="relative flex flex-col items-center gap-8">
        <!-- Logo with glow -->
        <div class="relative group">
          <div class="absolute -inset-4 bg-primary-500/20 rounded-full blur-[40px] animate-pulse"></div>
          <img
            src="/img/Marca NTL Branca.png"
            alt="NTL - Nova Tecnologia"
            class="relative h-16 animate-[loadingPulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          />
        </div>

        <!-- Progress bar -->
        <div class="w-[200px] h-[3px] bg-white/[0.08] rounded-full overflow-hidden relative">
          <div
            class="loading-bar-fill absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500"
            :style="{ width: progress + '%' }"
          ></div>
        </div>

        <!-- Loading text -->
        <p class="font-sans text-[0.8rem] font-normal tracking-[0.15em] uppercase text-white/[0.35] m-0">
          Carregando
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()

const progress = ref(0)

onMounted(() => {
  // Animate from 0 to 90% quickly, then slow down
  const fast = setInterval(() => {
    if (progress.value < 90) {
      progress.value += 3
    } else {
      clearInterval(fast)
    }
  }, 20)

  // Jump to 100% right before hiding
  setTimeout(() => {
    progress.value = 100
  }, 700)
})
</script>

<style scoped>
.loading-fade-leave-active {
  transition: opacity 0.6s ease-out;
}

.loading-fade-leave-to {
  opacity: 0;
}

.loading-bar-fill {
  transition: width 0.15s ease-out;
}

@keyframes loadingPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.97);
  }
}
</style>
