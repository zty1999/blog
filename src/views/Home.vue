<template>
  <div class="home-container" id="home-container">
    <div class="blog-list">
      <post-list :posts="posts" :total="total" :pageSize="10" :sizeChange="getData" pagination></post-list>
    </div>
    <side-bar></side-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref, } from 'vue';
import { getPostList, Post, restrict } from '@/utils/http/parse-restapi';
import dayjs from 'dayjs';
const items: Post[] = []
const posts = ref(items)
const total = ref(0)
const getData = async (restrict?: restrict) => {
  let [list, count] = await getPostList(restrict);
  console.log(list)
  list.forEach((item: Post) => {
    (item.createdAt as any) = dayjs(item.createdAt).format('YYYY-MM-DD');
  });
  posts.value = list;
  total.value = count;

}

getData()
</script>
<style lang="scss" scoped>
body {
  font-size: 16px;
  // color: #fff;
  // background-color: rgba(0,0,0,.8);
  // background-image: url(http://www.laixiangran.cn/CDN/custom/img/bg1.jpg);
}

.header {
  background-color: #1e1e1e;

}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}


.home-container {
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