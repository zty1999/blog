<template>

  <!-- <Particles id="tsparticles" :key="themeParticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
    :options="particlesJson"></Particles> -->
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
// import { Engine, tsParticles } from "tsparticles-engine";
import PerfectScrollbar from 'perfect-scrollbar';
// import * as cursoreffects from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
// import clickEffect from "@/assets/js/cursor-effect.js";
import { CursorSpecialEffects } from "@/assets/js/cursor-effects/fireworks.js";

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    const store = useStore()
    const particlesInit = async (engine: any) => {
      await loadFull(engine);
    }
    const particlesLoaded = async (container: any) => {
    }
    let particlesJson = ref({})
    let themeParticles = ref('')
    particlesJson.value = initThemes(store.state.theme)
    store.commit("switchParticles", particlesJson)
    watch(() => store.state.particlesJson,
      val => {
        console.log('change particles');
        particlesJson.value = val;
        themeParticles.value = store.state.theme;
      })
    nextTick(() => {
      new PerfectScrollbar('#app');
      // Initialize the plugin
      const demo: any = document.querySelector('#app');
      const ps = new PerfectScrollbar(demo);
      // clickEffect()
      new CursorSpecialEffects()
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
  width: 100%;
  height: 100%;
  color: var(--sk-text-color);
  background-color: #f5f5f5;
  // font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  //   'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-family: $fontFamily;

}
</style>

