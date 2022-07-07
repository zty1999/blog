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
      <ul class="menu-list">
        <li class="menu-list-item hvr-underline-from-center"
          :class="cate.path == fullPath ? 'active-underline active-text' : ''" v-for="cate in categoryNav"
          :key="cate.name">
          <span>
            <router-link :to="cate.path">{{ cate.name }} </router-link>
          </span>
        </li>
      </ul>
      <!-- <el-row class="cates" justify="space-around" align="middle">
        <router-link to="/" class="cates-item hvr-underline-from-center">首页</router-link>
        <router-link to="" class="cates-item hvr-underline-from-center">学海无涯</router-link>
        <router-link to="" class="cates-item hvr-underline-from-center">时间轴</router-link>
        <router-link to="/" class="cates-item hvr-underline-from-center">标签</router-link>
        <router-link to="" class="cates-item hvr-underline-from-center">demo</router-link>
        <router-link to="" class="cates-item hvr-underline-from-center">随笔</router-link>
      </el-row> -->
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
import { defineComponent, Ref, ref, watch } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    let show: Ref<boolean> = ref(true);
    const categoryNav = [
      {
        name: '首页',
        path: '/home'
      },
      {
        name: '学海无涯',
        path: '/products'
      },
      {
        name: '时间轴',
        path: '/examples'
      },
      {
        name: '标签',
        path: '/products'
      },
      {
        name: 'demo',
        path: '/examples'
      },
      {
        name: '随笔',
        path: '/products'
      }
    ]
    let router = useRouter();
    const fullPath = ref(router.currentRoute.value.fullPath)
    console.log(fullPath);

    watch(() => router.currentRoute.value.fullPath,
      val => {
        console.log(val);
        fullPath.value = val;
      })

    return {
      show,
      categoryNav,
      fullPath
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 80px;
  background-color: #1e1e1e;
  z-index: 99;
}

// .nav-content {
//   max-width: 1200px;
// }
.link-nav {
  // padding: 20px;
  color: #fff;
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
