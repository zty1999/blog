<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>归档</span>
      </div>
    </template>
    <div v-for="(item, index) in list" :key="index" class="text item" @click="toPage(item)">
      {{ item.year }}年{{ item.month }} 月 ({{ item.count }})
    </div>

  </el-card>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';


interface archive {
  year: string,
  month: string,
  count: number
}
const props = defineProps({
  list: {
    type: Array<archive>,
    default: []
  },
})
const list = computed(() => {
  let data = props.list;

  return data
});
const router = useRouter()
const toPage = (item: archive) => {
  router.push(`/archive/${item.year}/${item.month}`)


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
  