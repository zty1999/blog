<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <div class="header-content">
          <nav-bar></nav-bar>
        </div>
      </el-header>
      <el-main class="main">
        <blog-card v-for="(item, index) in items" :key="index" shadow="hover" @click="toDetails"></blog-card>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
// import { parse } from '../utils/http/parse';
import request from '@/utils/http/request';
import { log } from 'console';
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const value = ref('');
    const items = reactive([1, 2, 3, 4, 5])
    console.log('items', items);
    const getBanners = () => {
      // let Banner = new Parse.Query('Banner');
      console.log('request', request);

      //  {
      //           params: {
      //             // appId: 'spark',
      //             // masterKey: 'mulean666',
      //             // restApiKey: 'spark666'
      //             // pageNumber: 1,
      //             // pageSize: 1000,
      //             // categoryLevel: level + 1,
      //             // parentId: value || 0
      //           }
      //         }
      request
        .get('/Article?where={"company":{"$eq":"fHf9A4nkbo"}}')
        .then((res: any) => console.log(res));
      // console.log(Banner);
    };
    getBanners();
    
    return {
      value,
      items,
      getBanners,
      
    };
  },
  methods: {
    toDetails() {
      console.log('todetails');
      this.$router.push('/blog-detail')
    }
  },
});
</script>
<style lang="scss">
body {
  font-size: 16px;
  // color: #fff;
  // background-color: rgba(0,0,0,.8);
  // background-image: url(http://www.laixiangran.cn/CDN/custom/img/bg1.jpg);
}
.header {
  background-color: #1e1e1e;

}
.header-content{
  max-width: 1200px;
  margin:0 auto;
}

.main {
  margin: 0 auto;
  max-width: 1200px;
}
</style>