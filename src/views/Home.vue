<template>
  <div class="home">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Toast } from 'vant';
// import { parse } from '../utils/http/parse';
import request from '@/utils/http/request';
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const value = ref('');
    const onSearch = (val: string) => Toast(val);
    const onCancel = () => Toast('取消');
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
        .then(res => console.log(res));
      // console.log(Banner);
    };
    getBanners();
    return {
      value,
      onSearch,
      onCancel,
      getBanners
    };
  }
});
</script>
