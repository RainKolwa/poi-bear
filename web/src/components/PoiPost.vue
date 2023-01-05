<script lang="ts" setup>
import type { IPost } from '@/global';
const props = defineProps<{
  post: IPost;
}>();
</script>

<template>
  <div class="post">
    <div class="updated-time">{{ props.post.updated_at }}</div>
    <div class="content">
      <div class="post-title text-lg">{{ props.post.title }}</div>
      <div class="post-content text-sm">{{ props.post.content }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.post {
  @apply flex;
  .updated-time {
    @apply text-gray-400;
    width: 50px;
    text-align: center;
  }
  .content {
    flex: 1;
    @apply border-b border-gray-300 pb-4;
    .post-title {
      @apply font-bold;
    }
    .post-content {
      display: -webkit-box;
      width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding-right: 20px;
    }
  }
}
</style>
