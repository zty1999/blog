<template>
  <div class="side-bar shadow-light">
    <el-skeleton class="blog-skeleton" :loading="searchLoading" animated :rows="1">
      <search-bar class="section-box" v-model:value="searchVal" @search="search()"></search-bar>
    </el-skeleton>
    <el-skeleton class="blog-skeleton" :loading="sectionLoading" animated :rows="4" :count="3">
      <recent-list class="section-box" :list="recentPosts">
      </recent-list>
      <archive-list class="section-box" :list="archivePosts"></archive-list>
      <cate-list class="section-box" :list="cates"></cate-list>
      <!-- <tags-card class="section-box"></tags-card> -->
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { getPostListByTitle, Post, getCateList, getArchiveList } from '@/utils/http/parse-restapi';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const emit = defineEmits(['searchChange'])
const searchLoading = ref(true)
const sectionLoading = ref(true)
const temp: any[] = []
const recentPosts = ref(temp)
const cates = ref(temp)
const archivePosts = ref(temp)
const searchVal = ref('')
const getRecentPosts = async (title?: string) => {
  let list = await getPostListByTitle(title);
  list.forEach((item: Post) => {
    (item.createdAt as any) = dayjs(item.createdAt).format('YYYY-MM-DD');
    // item.tags = item.tags ? item.tags.join(' ') : ''
  });
  list = list.sort((a: Post, b: Post): number => { return (a.createdAt as any) - (b.createdAt as any) })
  return list;
}

const search = () => {
  if (searchVal.value.trim() != '') {
    if (router.currentRoute.value.name != 'search') {
      console.log('to search');
      router.push({ name: 'search', params: { word: searchVal.value } })
    }
    console.log('search');
    emit("searchChange", searchVal.value)
  } else {
    ElMessage.warning("请输入关键词");
  }
}

// watch(() => searchVal.value,
//   async val => {
//     if (val.trim() != '') {
//       if (router.currentRoute.value.name != 'search') {
//         console.log('to search');

//         router.push({ name: 'search', params: { word: val } })
//       }
//       console.log('searchChange');
//       emit("searchChange", val)
//       // recentPosts.value = await getRecentPosts(val)

//     }
//   })
const getData = async (title?: string) => {
  searchLoading.value = false
  recentPosts.value = await getRecentPosts(title)
  cates.value = await getCateList('blog');
  archivePosts.value = await getArchiveList();
  sectionLoading.value = false
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