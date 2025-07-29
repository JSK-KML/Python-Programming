<template>
  <MagneticGlow
    :variant="contentType"
    :is-active="isCurrentPage"
    :intensity="glowIntensity"
    :show-trail="false"
    class="sidebar-magnetic-item"
  >
    <slot />
  </MagneticGlow>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import MagneticGlow from './MagneticGlow.vue'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    default: 'primary',
    validator: (value) => ['labs', 'tutorials', 'lectures', 'assessments', 'installations', 'course', 'primary'].includes(value)
  }
})

const route = useRoute()

// Check if this item is the current page
const isCurrentPage = computed(() => {
  const currentPath = route.path
  const targetPath = props.href
  
  // Exact match or starts with the target path (for nested routes)
  return currentPath === targetPath || 
         currentPath.startsWith(targetPath + '/') ||
         (targetPath !== '/' && currentPath.includes(targetPath))
})

// Adjust glow intensity based on content type
const glowIntensity = computed(() => {
  const intensities = {
    labs: 0.4,
    tutorials: 0.35,
    lectures: 0.3,
    assessments: 0.45,
    installations: 0.25,
    course: 0.3,
    primary: 0.3
  }
  return intensities[props.contentType] || 0.3
})
</script>

<style scoped>
.sidebar-magnetic-item {
  display: block;
  margin: 4px 8px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-magnetic-item:hover {
  transform: translateX(4px);
}

/* Enhanced active state styling */
.sidebar-magnetic-item :deep(.magnetic-glow--active) {
  box-shadow: 
    0 0 20px rgba(var(--glow-color), 0.3),
    0 0 40px rgba(var(--glow-color), 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
</style>