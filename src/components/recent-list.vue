<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>最近文章</span>
      </div>
    </template>
    <div v-for="item in list" :key="item.objectId" class="text item" @click="toPage(item.objectId)">{{ item.title
    }}</div>

  </el-card>
</template>
<script lang="ts" setup>
import { Post } from '@/utils/http/parse-restapi';
import { Ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  list: {
    type: Array<Post>,
    default: []
  },
})

const list = ref(props.list)
// :Post[]
const router = useRouter()
const toPage = (id: string) => {
  router.push('/blog-detail/' + id)
}

</script>
<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  cursor: $cursorPointer;
}

.box-card {
  width: 280px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: $sectionBgColor;
  border: 1px solid transparent;
}
</style>
  