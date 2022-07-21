<template>
  <el-skeleton class="blog-skeleton" :loading="loading" :rows="5" :count="3" animated>
    <blog-card v-for="(item, index) in posts" :blog="item" :key="index" shadow="hover" @click="toDetails(item)">
    </blog-card>
  </el-skeleton>
  <template v-if="pagination">
    <div class="pagination">
      <el-pagination v-model:currentPage="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
        :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </template>
</template>
<script lang="ts" setup>
import { Post } from '@/utils/http/parse-restapi';
import { useRouter } from 'vue-router';

const props = defineProps({
  posts: {
    type: Array<Post>,
    default: []
  },
  pagination: {
    type: Boolean,
    default: false
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  }
})
const router = useRouter();
const emit = defineEmits(['sizeChange']);
const items: Post[] = []
const posts = ref(items);
const currentPage = ref(1);
const pageSize = ref(props.pageSize);
const total = ref(props.total);
const loading = ref(true)
const toDetails = (item: Post) => {
  console.log('todetails');
  router.push('/blog-detail/' + item.objectId)
}
watch(() => props.posts,
  val => {
    posts.value = val;
    total.value = props.total;
    loading.value = false;
  })
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  emit('sizeChange', { current: val, limit: pageSize.value })

}
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: end;
}
</style>
