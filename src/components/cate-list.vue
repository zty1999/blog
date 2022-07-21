<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>分类</span>
      </div>
    </template>
    <div v-for="item in list" :key="item.objectId" class="text item" @click="toPage(item.objectId)">{{ item.name
    }}</div>

  </el-card>
</template>
<script lang="ts" setup>
import router from '@/router';

const props = defineProps({
  list: {
    type: Array<any>,
    default: []
  },
})
const list = computed(() => props.list);
const toPage = (id: string) => {
  router.push({ name: 'category', params: { id } })
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
  