<template>
  <div class="archive-container" id="archive-container">
    <div class="blog-list">
      <el-skeleton class="blog-skeleton" :loading="loading" :rows="5" :count="3" animated>
        <blog-card v-for="(item, index) in posts" :blog="item" :key="item.objectId" shadow="hover"
          @click="toDetails(item)">
        </blog-card>
      </el-skeleton>
    </div>
    <side-bar></side-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Post, getArchivePosts } from '@/utils/http/parse-restapi';
import dayjs from 'dayjs';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()

const items: Post[] = []
const posts = ref(items)
const loading = ref(true)
const getData = async (year: string, month: string) => {
  let list = await getArchivePosts(year, month);
  list.forEach((item: Post) => {
    (item.createdAt as any) = dayjs(item.createdAt).format('YYYY-MM-DD');
  });
  console.log(posts.value, loading.value)
  posts.value = list;
  loading.value = false
  console.log(posts.value, loading.value)

}
getData(route.params.year as string, route.params.month as string)

const toDetails = (item: Post) => {
  console.log('todetails');
  router.push('/blog-detail/' + item.objectId)
}

</script>
<style lang="scss" scoped>
body {
  font-size: 16px;
}

.header {
  background-color: #1e1e1e;

}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}


.archive-container {
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








.scrollbar {
  margin-left: 30px;
  float: left;
  height: 300px;
  width: 65px;
  background: #fff;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}
</style>

