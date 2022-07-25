<template>
  <div class="side-bar shadow-light">
    <template v-if="showToc">
      <el-card class="box-card toc-wrapper section-box">
        <template #header>
          <div class="card-header">
            <span>文章目录</span>
          </div>
        </template>
        <div v-dompurify-html="toc" class="toc-list">
        </div>
      </el-card>
    </template>
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
const route = useRoute()
const emit = defineEmits(['searchChange'])
const props = defineProps({
  toc: {
    type: String,
    default: ''
  }
})
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
console.log(route.matched);
const showToc = ref(false)
const toc = computed(() => {
  console.log(props.toc);
  return props.toc
})
if (route.matched[route.matched.length - 1].path == '/blog-detail/:id') {
  console.log(toc.value);
  showToc.value = true;
}

const getData = async (title?: string) => {
  searchLoading.value = false
  recentPosts.value = await getRecentPosts(title)
  cates.value = await getCateList('blog');
  archivePosts.value = await getArchiveList();
  sectionLoading.value = false
}
getData()


</script>

<style lang="scss" scoped>
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

<style lang="scss">
.toc-wrapper {
  // padding: 10px 0;

  // border-left: 1px solid #eee;
  // box-shadow: $shadow-light;
  box-shadow: none;

  ul {
    padding: 10px 0;

    li {
      padding: 10px;
    }

    a {
      color: $textSecondaryColor;
    }

    &:hover {

      a:hover,
      a.focus {
        color: $themeColor;
      }
    }

  }

}
</style>