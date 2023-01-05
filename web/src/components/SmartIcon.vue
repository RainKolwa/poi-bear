<script lang="ts" setup>
/**
 * detect icon by name, use hashtag icon as default
 */
import { computed, withDefaults } from 'vue';
import { HashIcon, MovieIcon, CheckboxIcon, BeachIcon } from 'vue-tabler-icons';

const props = withDefaults(defineProps<{ name: string; color: string }>(), {
  color: '#7e7f80',
});

const iconMap = {
  movie: MovieIcon,
  todo: CheckboxIcon,
  travel: BeachIcon,
};

const icon = computed(() => {
  const name = props.name.toLowerCase() as keyof typeof iconMap;
  return iconMap[name] || HashIcon;
});
</script>

<template>
  <component :is="icon" size="20" :style="`color: ${color}`" />
</template>
