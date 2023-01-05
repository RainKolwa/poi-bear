<script lang="ts" setup>
import SmartIcon from '@/components/SmartIcon.vue';
// Todo: support nested tag
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="tag flex items-center">
    <smart-icon :name="props.name" />
    <div class="tag-name ml-3 text-sm">{{ props.name }}</div>
  </div>
</template>
