<template>
  <div 
    class="card-liquid"
    :class="[variant, { 'hover:scale-105': hoverable }]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'strong'
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  hoverable: true
})
</script>

<style scoped>
.card-liquid.strong {
  @apply bg-gradient-to-br from-white/80 to-white/90 border-gray-200 shadow-lg;
  @apply dark:from-white/10 dark:to-white/20 dark:border-white/20 dark:shadow-none;
  @apply backdrop-blur-xl;
}
</style>
