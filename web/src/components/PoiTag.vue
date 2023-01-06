<script lang="ts" setup>
import { computed } from 'vue';
import SmartIcon from '@/components/SmartIcon.vue';
// Todo: support nested tag
const props = defineProps<{
  name: string;
  selected: boolean;
}>();

const color = computed(() => {
  return props.selected ? 'white' : '#7e7f80';
});
</script>

<template>
  <div
    tabindex="-1"
    :class="`tag flex items-center ${selected ? 'selected' : ''}`"
  >
    <smart-icon :name="props.name" :color="color" />
    <div class="tag-name ml-3 text-sm">{{ props.name }}</div>
  </div>
</template>

<style lang="less" scoped>
.tag {
  width: 100%;
  padding: 4px 0 4px 20px;
  cursor: pointer;
  border-radius: 4px;
  @apply focus:!bg-primary;
  &.selected {
    background-color: #424747;
  }
}
</style>
