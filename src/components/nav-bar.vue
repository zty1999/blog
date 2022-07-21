<template>
  <el-row :gutter="2" justify="space-evenly" align="middle" class="nav-bar shadow-light">
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
      <ul class="menu-list">
        <li class="menu-list-item hvr-underline-from-center"
          :class="cate.path == fullPath ? 'active-underline active-text' : ''" v-for="cate in categoryNav"
          :key="cate.name">
          <span>
            <router-link :to="cate.path">{{ cate.name }} </router-link>
          </span>
        </li>
      </ul>
    </el-col>
    <el-col :span="2">
      <el-switch v-model="theme" active-value="blackCyan" inactive-value="base" class="ml-2" name="主题切换"
        style="--el-switch-on-color: #50556b; --el-switch-off-color: #f5f5f5" @change="changeTheme" />
      <!-- <i-arcticons-defaultdarktheme></i-arcticons-defaultdarktheme> -->
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { initThemes } from "@/config/theme";
import { defineComponent, Ref, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    let show: Ref<boolean> = ref(true);
    const categoryNav = [
      {
        name: '首页',
        path: '/home'
      },
      // {
      //   name: '学海无涯',
      //   path: '/products'
      // },
      {
        name: '时间轴',
        path: '/timeline'
      },
      {
        name: '分类',
        path: '/category'
      },
      {
        name: 'demo',
        path: '/examples'
      },
      // {
      //   name: '随笔',
      //   path: '/products'
      // }
    ]
    let router = useRouter();
    const fullPath = ref(router.currentRoute.value.fullPath)
    const store = useStore();
    const theme = ref("")
    theme.value = store.state.theme;

    watch(() => router.currentRoute.value.fullPath,
      val => {
        fullPath.value = val;
      })
    const changeTheme = (theme: string | number | boolean): void => {
      let particlesJson = initThemes(theme as string);
      store.commit('switchTheme', theme)
      store.commit('switchParticles', particlesJson)

    }
    return {
      show,
      categoryNav,
      fullPath,
      theme,
      changeTheme,

    };
  },
});
</script>

<style lang="scss" scoped>
// @use "@/assets/styles/base.scss" as *;

.nav-bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 80px;
  background-color: $navBgColor;
  z-index: 99;
}

// .nav-content {
//   max-width: 1200px;
// }
.logo {
  color: $textActiveColor;
}

.link-nav {
  // padding: 20px;
  color: $textActiveColor;
  text-decoration: none;

  &:hover {
    color: $textActiveColor;
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

.menu-list {
  display: flex;
}

.menu-list-item {
  z-index: 2;
  color: #666;

  a {
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #03dac6;

    a {
      transform: translate3d(0, -3px, 22px);
    }
  }

}

.hvr-underline-from-center:before {
  height: 2px;
  background-color: #03dac6;
}

.active-underline {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}

.active-underline:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #03dac6;
  height: 2px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.active-text {
  color: #03dac6;
}
</style>
