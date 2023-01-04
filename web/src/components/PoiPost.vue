<script lang="ts" setup>
import type { IPost } from '@/global';
const props = defineProps<{
  post: IPost;
}>();
</script>

<template>
  <div class="post">
    <div class="updated-time">{{ props.post.updated_at }}</div>
    <div class="context">
      <div class="post-title text-lg">{{ props.post.title }}</div>
      <div class="post-content text-sm">{{ props.post.content }}</div>
    </div>
  </div>
</template>
