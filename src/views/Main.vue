<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-scrollbar>
      <router-view></router-view>
    </el-scrollbar>
    <!-- <el-aside width="200px">Aside</el-aside>
          <el-footer>Footer</el-footer> -->
  </el-container>

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
      console.log(this.$route);
    }
  },
  setup() {
    const route = useRoute();
    console.log(route);
    let title: Ref<string> = ref(route.meta.title as string);
    // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeColor = '#2ac2d1';
    const themeVars = {
      navBarBackgroundColor: '#2ac2d1',
      navBarTitleTextColor: '#ffffff',
      searchBackgroundColor: themeColor
      // rateIconFullColor: '#07c160',
      // sliderBarHeight: '4px',
      // sliderButtonWidth: '20px',
      // sliderButtonHeight: '20px',
      // sliderActiveBackgroundColor: '#07c160',
      // buttonPrimaryBorderColor: '#07c160',
      // buttonPrimaryBackgroundColor: '#07c160',
    };
    const active = ref(0);
    console.log(title.value);

    return { title, themeVars, active };
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
