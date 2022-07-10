<template>
  <nav-bar></nav-bar>
  <el-scrollbar>
    <router-view></router-view>
  </el-scrollbar>
  <!-- <el-aside width="200px">Aside</el-aside>
          <el-footer>Footer</el-footer> -->

</template>

<script lang="ts">
import { defineComponent, Ref } from 'vue';
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: {},
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return;
      }
      this.title = this.$route.meta.title as string;
      console.log(this.$route.meta);
    }
  },
  setup() {
    const route = useRoute();
    console.log(route);
    let title: Ref<string> = ref(route.meta.title as string);
    console.log(title.value);
    return { title };
  },
  methods: {
    getTitle() {
      console.log(this.$route.meta);
    }
  }
});
</script>

<style lang="scss">
$themeColor: #2ac2d1;

:root {
  --van-background-color-light: $themeColor;
  --van-button-primary-background-color: $themeColor;
}
</style>
