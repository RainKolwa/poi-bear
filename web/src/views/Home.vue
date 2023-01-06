<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRouteQuery } from '@vueuse/router';
import PoiTag from '@/components/PoiTag.vue';
import PoiPost from '@/components/PoiPost.vue';
import { EditIcon } from 'vue-tabler-icons';
import type { ITag, IPost } from '@/global';
import type { LocationQuery } from 'vue-router';

const router = useRouter();
const route = useRoute();
const tags = reactive<ITag[]>([
  { id: 1, name: 'tag1' },
  { id: 3, name: 'read' },
  { id: 2, name: 'movie' },
  { id: 4, name: 'travel' },
]);
const posts = reactive<IPost[]>([
  // generate three posts with mock title and content
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    updated_at: '3y',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    updated_at: '3y',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]);
const updateQuery = (query: LocationQuery) => {
  router.replace({
    query: {
      ...route.query,
      ...query,
    },
  });
};
const currentTag = useRouteQuery('tag');
const selectTag = (id: number) => {
  updateQuery({ tag: id.toString() });
};
const currentPost = useRouteQuery('post');
const selectPost = (id: number) => {
  updateQuery({ post: id.toString() });
};
const newPost = () => {
  console.log('new post');
};
</script>
<template>
  <div class="page-home">
    <div class="col-tags w-56">
      <poi-tag
        v-for="tag in tags"
        :key="tag.id"
        :name="tag.name"
        :selected="currentTag === tag.id.toString()"
        @click="selectTag(tag.id)"
      />
    </div>
    <div class="col-posts w-96">
      <div>
        <search-bar />
        <edit-icon @click="newPost" />
      </div>
      <poi-post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :selected="currentPost === post.id.toString()"
        @click="selectPost(post.id)"
      />
    </div>
    <div class="col-detail flex-1">
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
  background-color: #fbfbfb;
  .col-tags,
  .col-posts,
  .col-detail {
    height: 100vh;
    @apply overflow-y-scroll;
  }
  .col-tags {
    min-width: 130px;
    background: #2f3235;
    color: white;
    padding: 5px;
  }
  .col-posts {
    min-width: 220px;
    @apply border-r border-gray-300;
  }
  .col-detail {
    min-width: 300px;
    .editor {
      margin: 0 auto;
      min-width: 300px;
      max-width: 600px;
    }
  }
}
</style>
