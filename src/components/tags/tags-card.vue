<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>标签云</span>
      </div>
    </template>
    <div class="tags">

      <tags-text :tags="tags"></tags-text>
    </div>

  </el-card>
</template>
<script lang="ts" setup>
const props = defineProps({
  tags: {
    type: Array<Number>,
    default: [...new Array(8).keys()]

  }
})
const tags = toRef(props, "tags");
console.log(tags);

</script>
<style lang="scss" scoped>
.box-card {
  width: 280px;
  padding: 0 10px;
  margin-bottom: 10px;
  border: 1px solid transparent;
  background-color: $sectionBgColor;

}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
