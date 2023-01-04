<script lang="ts" setup>
import { reactive } from 'vue';
import PoiTag from '@/components/PoiTag.vue';
import PoiPost from '@/components/PoiPost.vue';
import type { ITag, IPost } from '@/global';

const tags = reactive<ITag[]>([{ id: 1, name: 'tag1' }]);
const posts = reactive<IPost[]>([
  { id: 1, title: 'post1', content: 'content1' },
  { id: 2, title: 'title2', content: 'content2' },
]);
</script>
<template>
  <div class="page-home">
    <div class="tag w-56">
      <poi-tag v-for="tag in tags" :key="tag.id" :name="tag.name" />
    </div>
    <div class="list w-96">
      <poi-post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="detail flex-1">
      <div class="editor">
        <p>
          <!--demo text-->
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec fermentum lacinia, nunc nisl tincidunt nisl, vitae aliquam
          nisl nisl sit amet justo. Nullam auctor, nisl eget lacinia tincidunt,
          nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet justo.
          Nullam auctor, nisl eget lacinia tincidunt, nunc
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-home {
  @apply flex;
  .tag,
  .list,
  .detail {
    height: 100vh;
    @apply overflow-y-scroll border border-gray-300;
  }
  .tag {
    min-width: 130px;
  }
  .list {
    min-width: 220px;
  }
  .detail {
    min-width: 300px;
    .editor {
      margin: 0 auto;
      min-width: 300px;
      max-width: 600px;
    }
  }
}
</style>
