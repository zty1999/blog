<template>
  <div class="search-wrapper shadow-light">
    <!-- <el-input v-model="searchVal" class="w-50 m-2" placeholder="Please Input">
      <template #suffix>
        <el-icon class="el-input__icon">
          <i-ep-menu></i-ep-menu>
        </el-icon>
      </template>
    </el-input> -->
    <el-input class="w-50 m-2" v-model="searchVal" placeholder="Please Input" @keyup.enter="search()">
      <template #suffix>
        <el-icon class="el-input__icon" @click="search()">
          <i-ep-search></i-ep-search>
        </el-icon>
      </template>
    </el-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:value', 'search'])
const searchVal = ref(props.value)

const search = () => {
  emit("search", searchVal.value)

}
watch(() => searchVal.value,
  val => {
    emit("update:value", val)
  })
</script>
<style lang="scss" scoped>
.search-wrapper {
  width: 280px;
  padding: 10px;
  margin: 0 0px 10px;
  border-radius: 4px;
  background-color: $sectionBgColor;

}

.el-input__icon {
  cursor: $cursorPointer;
}
</style>
