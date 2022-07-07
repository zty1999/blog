<template>
  <i-ep-menu></i-ep-menu>
  <div class="search-wrapper shadow-light">
    <el-input v-model="searchVal" class="w-50 m-2" placeholder="Please Input">
      <template #suffix-icon>
        <i-ep-menu></i-ep-menu>
      </template>
    </el-input>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref, Ref, nextTick } from 'vue';
const searchVal = ref('')
</script>
<style lang="scss" scoped>
.search-wrapper {
  width: 280px;
  padding: 10px;
  margin: 0 10px 10px;
  border-radius: 4px;
  background-color: #fff;

}
</style>
