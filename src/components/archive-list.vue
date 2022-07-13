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
import router from '@/router';
import { Post } from '@/utils/http/parse-restapi';
import { Ref } from 'vue';

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
console.log(list.value);

const toPage = (item: archive) => {
}

</script>
<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  cursor: pointer;
}

.box-card {
  width: 280px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: $sectionBgColor;
  border: 1px solid transparent;
}
</style>
  