<template>
  <span v-for="o in tags" :key="o" class="text tags-item" :style="randomRGB()">{{ o }}</span>
</template>
<script lang="ts" setup>
import { defineProps, toRef } from 'vue';

const props = defineProps({
  tags: {
    type: Array<number>,
    default: []

  }
})
const tags = toRef(props, "tags");
console.log(tags);
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
.tags-item {
  box-sizing: border-box;
  display: inline-block;
  min-width: 30px;
  padding: 2px 6px;
  margin: 2px;
  text-align: center;
  border-radius: 6px;
}

.text {
  color: #fff;
  font-size: 14px;
}
</style>
