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
  @apply bg-gradient-to-br from-white/10 to-white/20;
  @apply backdrop-blur-xl border-white/20;
}
</style>
