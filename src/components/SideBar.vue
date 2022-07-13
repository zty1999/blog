<template>
  <div class="side-bar shadow-light">
    <el-skeleton class="blog-skeleton" :loading="searchLoading" animated :rows="1">
      <search-bar class="section-box"></search-bar>
    </el-skeleton>
    <el-skeleton class="blog-skeleton" :loading="sectionLoading" animated :rows="4" :count="3">
      <blog-list class="section-box" :list="recentPosts"></blog-list>
      <archive-list class="section-box" :list="archivePosts"></archive-list>
      <cate-list class="section-box" :list="cates"></cate-list>
      <!-- <tags-card class="section-box"></tags-card> -->
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { getPostList, Post, getCateList, getArchiveList } from '@/utils/http/parse-restapi';
import dayjs from 'dayjs';

const searchLoading = ref(true)
const sectionLoading = ref(true)
const temp: any[] = []
const recentPosts = ref(temp)
const cates = ref(temp)
const archivePosts = ref(temp)

const getData = async () => {
  searchLoading.value = false
  let list = await getPostList();
  console.log(list)
  list.forEach((item: Post) => {
    (item.createdAt as any) = dayjs(item.createdAt).format('YYYY-MM-DD');
    // item.tags = item.tags ? item.tags.join(' ') : ''
  });
  list = list.sort((a: Post, b: Post): number => { return (a.createdAt as any) - (b.createdAt as any) })
  recentPosts.value = list;
  console.log('cates', cates)

  cates.value = await getCateList('blog');
  archivePosts.value = await getArchiveList();
  console.log('archivePosts', archivePosts)

  sectionLoading.value = false
  console.log(recentPosts.value);
}
getData()


</script>

<style lang="scss" >
.side-bar {
  margin: 10px;
  height: fit-content;
  padding: 0 10px;
  background: $sectionBgColor;
  border-radius: 6px;
}
</style>
<style lang="scss" scoped>
// ::v-deep .section-box {
//   width: 300px;
//   box-shadow: none;
// }
:deep(.section-box) {
  width: 300px;
  box-shadow: none;
}
</style>