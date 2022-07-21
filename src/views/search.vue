<template>
  <div class="search-container" id="search-container">
    <div class="blog-list">
      <el-skeleton class="blog-skeleton" :loading="loading" :rows="5" :count="3" animated>
        <template v-if="posts.length">
          <blog-card v-for="(item, index) in posts" :blog="item" :key="index" shadow="hover" @click="toDetails(item)">
          </blog-card>
        </template>
        <template v-else>
          <p>暂无内容！</p>
        </template>
      </el-skeleton>
    </div>
    <side-bar @searchChange="searchChange"></side-bar>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { getPostListByTitle, Post } from '@/utils/http/parse-restapi';
import dayjs from 'dayjs';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
console.log(router);

const items: Post[] = []
const posts = ref(items)
const loading = ref(true)
const searchChange = async (val: string) => {
  console.log(val);
  let list = await getPostListByTitle(val);
  console.log(list)
  list.forEach((item: Post) => {
    (item.createdAt as any) = dayjs(item.createdAt).format('YYYY-MM-DD');
  });
  posts.value = list;
  loading.value = false
}
searchChange(route.params.word as string)

const toDetails = (item: Post) => {
  console.log('todetails');
  router.push('/blog-detail/' + item.objectId)
}
</script>
<style lang="scss" scoped>
.search-container {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

}

.blog-list {
  flex: 1;
  max-width: 900px;
  padding: 10px 8px 0;

  div {
    height: 200px;
  }
}

.blog-skeleton {
  width: 100%;
  // height: 200px;
}
</style>