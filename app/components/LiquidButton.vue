<template>
  <component 
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    class="btn-liquid relative z-10"
    :class="[variant, size]"
  >
    <span class="relative z-10">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag?: 'button' | 'a' | 'NuxtLink'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  type: 'button',
  variant: 'primary',
  size: 'md'
})
</script>

<style scoped>
.btn-liquid.secondary {
  @apply bg-gradient-to-r from-dark-700 to-dark-600;
}

.btn-liquid.outline {
  @apply bg-transparent border-2 border-primary-500 hover:bg-primary-500/10;
}

.btn-liquid.sm {
  @apply px-6 py-2 text-sm;
}

.btn-liquid.md {
  @apply px-8 py-4 text-base;
}

.btn-liquid.lg {
  @apply px-10 py-5 text-lg;
}
</style>
