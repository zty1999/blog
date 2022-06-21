<template>
  <div class="nav-bar">
     <div class="logo">
        <div class="collapse">
            <el-button @click="show = !show">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px">
      <el-collapse-transition>
        <div v-show="show">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div> 
        </div>
     </div>
  </div>
</template>

<script lang="ts">   
import {defineComponent, Ref, ref} from 'vue'
export default defineComponent({
    setup(){
        let show:Ref<boolean> = ref(true);
        return {
            show
        }
    }
})
</script>

<style module>

</style>