<script lang="ts" setup>
import type { IPost } from '@/global';
const props = defineProps<{
  post: IPost;
  selected: boolean;
}>();
</script>

<template>
  <div class="post">
    <div class="status">
      <div class="text-sm text-gray-400 text-center pt-0.5">
        {{ props.post.updated_at }}
      </div>
    </div>
    <div class="content">
      <div class="font-medium text-base">{{ props.post.title }}</div>
      <div class="post-content text-gray-500 text-sm">
        {{ props.post.content }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.post {
  @apply flex cursor-pointer;
  .status {
    width: 50px;
    @apply py-3;
  }
  .content {
    flex: 1;
    @apply border-b border-gray-300 py-3;

    .post-content {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      // todo line-clamp: title + content = 3, title first
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding-right: 20px;
    }
  }
}
</style>
