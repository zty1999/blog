<template>
  <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
    :options="particlesJson"></Particles>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script  lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { loadFull } from "tsparticles";
import { particlesJson } from '@/assets/js/particles.js'
export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {

    const particlesInit = async (engine: any) => {
      await loadFull(engine);
    }

    const particlesLoaded = async (container: any) => {
      console.log("Particles container loaded", container);
    }
    return {
      locale: zhCn,
      particlesInit,
      particlesLoaded,
      particlesJson
    };
  },
});
</script>
<style lang="scss">
// @use 'xxx.scss' as *;
#app {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>

