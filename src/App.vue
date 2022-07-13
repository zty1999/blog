<template>
  <Particles id="tsparticles" :key="themeParticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
    :options="particlesJson"></Particles>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script  lang="ts">
import { defineComponent, watch, ref } from "vue";
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { loadFull } from "tsparticles";
import { initThemes } from '@/config/theme';
import { useStore } from "vuex";
import { Engine, tsParticles } from "tsparticles-engine";
import PerfectScrollbar from 'perfect-scrollbar';

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    const store = useStore()
    const particlesInit = async (engine: any) => {
      console.log("Particles container init", engine);
      await loadFull(engine);
    }
    const particlesLoaded = async (container: any) => {
      console.log("Particles container loaded", container);
    }
    let particlesJson = ref({})
    let themeParticles = ref('')
    console.log(store.state.particlesJson.value);
    if (!store.state.particlesJson.value) {
      particlesJson.value = initThemes('base')
    }
    store.commit("switchParticles", particlesJson)
    watch(() => store.state.particlesJson,
      val => {
        console.log('change particles');
        particlesJson.value = val;
        themeParticles.value = store.state.theme;
        console.log(val);
      })
    nextTick(() => {
      new PerfectScrollbar('#app');
      // Initialize the plugin
      const demo: any = document.querySelector('#app');
      const ps = new PerfectScrollbar(demo);
    });
    return {
      locale: zhCn,
      particlesInit,
      particlesLoaded,
      particlesJson,
      themeParticles
    };
  },
  methods: {

  }
});
</script>
<style lang="scss">
// @use 'xxx.scss' as *;

#app {
  position: relative;
  padding-bottom: 80px;
  min-height: 100vh;
  color: var(--sk-text-color);
  background-color: #f5f5f5;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>

