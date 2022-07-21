<template>
  <div id="main">
    <el-scrollbar>
      <nav-bar></nav-bar>
      <!-- <el-scrollbar> -->
      <div class="content">
        <router-view :key="key"></router-view>
      </div>
      <!-- </el-scrollbar> -->
      <!-- <el-aside width="200px">Aside</el-aside>
          <el-footer>Footer</el-footer> -->
      <base-footer></base-footer>
    </el-scrollbar>
  </div>

</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const title = ref("")
// const key = computed(() => {
//   console.log(route, route.path);
//   return route.path + Math.random()
// })
const key = ref('');
watch(() => route.path, path => key.value = path + Math.random())
watch(() => router,
  router => {
    // if you go to the redirect page, do not update the breadcrumbs
    if (router.currentRoute.value.path.startsWith('/redirect/')) {
      return;
    }
    title.value = route.meta.title as string;
  })



</script>

<style lang="scss">
$themeColor: #2ac2d1;

:root {
  --van-background-color-light: $themeColor;
  --van-button-primary-background-color: $themeColor;
}

.el-scrollbar {
  height: 100vh;
  // padding-bottom: 80px;
}

#main {
  position: relative;

  .content {
    min-height: calc(100vh - 140px);
  }
}
</style>
