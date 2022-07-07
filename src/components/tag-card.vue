<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>标签云</span>
      </div>
    </template>
    <div class="tags">
      <span v-for="o in tags" :key="o" class="text tags-item" :style="randomRGB()">{{ o }}</span>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { defineProps, toRef } from 'vue';

const props = defineProps({
  tags: {
    type: Array<number>,
    default: [...new Array(8).keys()]

  }
})
const tags = toRef(props, "tags");

const randomRGB = () => {
  let R = Math.floor(Math.random() * 130 + 110)
  let G = Math.floor(Math.random() * 130 + 110)
  let B = Math.floor(Math.random() * 130 + 110)
  return {
    background: `rgb(${R},${G},${B},.5)`
  }
}
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  color: #fff;
  font-size: 14px;
}

.tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.tags-item {
  // float: left;

  width: 30%;
  padding: 2px;
  margin: 2px;
  text-align: center;
  border-radius: 6px;
}

.box-card {
  width: 280px;
  padding: 0 10px;
  margin: 0 10px;
}
</style>
