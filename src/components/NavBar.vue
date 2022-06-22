<template>
  <el-row :gutter="2" justify="space-evenly" align="middle" class="nav-bar">
    <el-col :span="4">
      <div class="logo">
        <router-link to="/" class="link-nav">Spark's Blog</router-link>
        <!-- <div class="collapse">
            <el-button @click="show = !show">Click Me</el-button>
            <div style="margin-top: 20px; height: 200px">
              <el-collapse-transition>
                <div v-show="show">
                  <div class="transition-box">el-collapse-transition</div>
                  <div class="transition-box">el-collapse-transition</div>
                </div>
              </el-collapse-transition>
            </div> 
        </div> -->
      </div>
    </el-col>
    <el-col :span="18">
      <el-row class="cates" justify="space-around" align="middle">
        <router-link to="/" class="cates-item">首页</router-link>
        <router-link to="" class="cates-item">学海无涯</router-link>
        <router-link to="" class="cates-item">时间轴</router-link>
        <router-link to="/" class="cates-item">标签</router-link>
        <router-link to="" class="cates-item">demo</router-link>
        <router-link to="" class="cates-item">随笔</router-link>
      </el-row>
    </el-col>
  </el-row>

  <!-- <el-row class="cates">
      <el-col class="cates-item">首页</el-col>
      <el-col class="cates-item">前端</el-col>
      <el-col class="cates-item">音乐</el-col>
      <el-col class="cates-item">读书</el-col>
      <el-col class="cates-item">电影</el-col>
      <el-col class="cates-item">分类</el-col>
     </el-row> -->
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  setup() {
    let show: Ref<boolean> = ref(true);
    return {
      show,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 60px;
  background-color: #1e1e1e;
}

// .nav-content {
//   max-width: 1200px;
// }
.link-nav {
  // padding: 20px;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #409eff;
  }
}

.cates {
  // display: flex;
  flex-wrap: nowrap;
  font-size: 16px;

  .cates-item {
    @extend .link-nav;
  }
}
</style>
