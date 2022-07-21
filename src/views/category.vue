<template>
  <div class="cate-container" id="cate-container">
    <div class="blog-list">
      <!-- <el-skeleton class="blog-skeleton" :loading="loading" :rows="5" :count="3" animated> -->
      <blog-card v-for="(item, index) in posts" :blog="item" :key="item.objectId + new Date()" shadow="hover"
        @click="toDetails(item)">
      </blog-card>
      <!-- </el-skeleton> -->
    </div>
    <side-bar></side-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Post, getPostListByCate } from '@/utils/http/parse-restapi';
import dayjs from 'dayjs';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const items: Post[] = []
const posts = ref(items)
const loading = ref(false)
const getData = async (cateId?: string) => {
  let list = await getPostListByCate(cateId);
  list.forEach((item: Post) => {
    (item.createdAt as any) = dayjs(item.createdAt).format('YYYY-MM-DD');
  });
  console.log(posts.value, loading.value)
  loading.value = false;
  posts.value = list;
  console.log(posts.value.length, loading.value)

}
getData(route.params.id as string)

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


.cate-container {
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
