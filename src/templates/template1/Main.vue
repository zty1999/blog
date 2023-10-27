<template>
<router-view></router-view>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" >
  .wrapper {
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
  }

  @media (min-width: 1080px) {
    .wrapper {
      width: 80%;
    }
  }
</style>
