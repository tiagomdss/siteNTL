<template>
  <transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="close">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm dark:bg-black/80 bg-gray-500/50"></div>
      
      <div class="relative bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-white/10 shadow-2xl">
        <!-- Header -->
        <div class="sticky top-0 bg-gradient-to-r from-primary-500 to-primary-600 p-6 flex items-center justify-between border-b border-primary-400/20">
          <h3 class="text-2xl font-bold text-white">{{ projeto.titulo }}</h3>
          <button @click="close" class="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-4">
          <div v-for="(item, index) in projeto.items" :key="index" class="glass-strong rounded-2xl overflow-hidden">
            <button 
              @click="toggleItem(index)"
              class="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white text-left">{{ item.titulo }}</h4>
              </div>
              <svg 
                class="w-5 h-5 text-primary-500 dark:text-primary-400 transition-transform duration-300" 
                :class="{ 'rotate-180': openItems[index] }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <transition name="accordion">
              <div v-if="openItems[index]" class="px-4 pb-4">
                <div class="space-y-3 pl-15">
                  <div v-for="(cliente, i) in item.clientes" :key="i" class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-black/20">
                    <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center">
                      <span class="text-primary-600 dark:text-primary-400 text-sm font-bold">{{ Number(i) + 1 }}</span>
                    </div>
                    <div class="flex-1">
                      <p class="text-gray-900 dark:text-white font-medium">{{ cliente.nome }}</p>
                      <ul v-if="cliente.detalhes" class="mt-2 space-y-1">
                        <li v-for="(detalhe, d) in cliente.detalhes" :key="d" class="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span class="text-primary-500 dark:text-primary-400 mt-1">•</span>
                          <span>{{ detalhe }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Footer -->
        <div class="sticky bottom-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 border-t border-gray-200 dark:border-white/10">
          <button @click="close" class="w-full btn-liquid">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
  projeto: any
}>()

const emit = defineEmits(['close'])

const openItems = ref<Record<string | number, boolean>>({})

const toggleItem = (index: number | string) => {
  openItems.value[index] = !openItems.value[index]
}

const close = () => {
  emit('close')
}

// Close on ESC key
onMounted(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
      close()
    }
  }
  window.addEventListener('keydown', handleEsc)
  onUnmounted(() => window.removeEventListener('keydown', handleEsc))
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>
