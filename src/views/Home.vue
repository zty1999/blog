<template>
  <div class="home-container" id="home-container">
    <!-- <el-container> -->
    <!-- <el-header class="header">
        <div class="header-content">
          <nav-bar></nav-bar>
        </div>
      </el-header> -->
    <div class="blog-list">
      <blog-card v-for="(item, index) in posts" :blog="item" :key="index" shadow="hover" @click="toDetails(item)">
      </blog-card>
    </div>
    <div class="side-bar">
      <search-bar></search-bar>
      <tag-card class="tag-box"></tag-card>
    </div>
    <!-- </el-container> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref, nextTick } from 'vue';
// import { parse } from '../utils/http/parse';
import request from '@/utils/http/request';
import { getPostList, Post } from '@/utils/http/parse-restapi';
import PerfectScrollbar from 'perfect-scrollbar';
import dayjs from 'dayjs';
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const value = ref('');
    const items: Post[] = []
    const posts = ref(items)
    getPostList().then(res => {
      console.log(res)

      res.forEach((item: Post) => {
        (item.createdAt as any) = dayjs(item.createdAt).format('YYYY-MM-DD');
      });
      posts.value = res;
      console.log(posts)
    })

    nextTick(() => {
      new PerfectScrollbar('#home-container');

      // Initialize the plugin
      const demo: any = document.querySelector('#home-container');
      const ps = new PerfectScrollbar(demo);

    });
    return {
      value,
      items,
      posts
    };
  },
  methods: {
    toDetails(item: Post) {
      console.log('todetails');
      // , { id: item.objectId }
      this.$router.push('/blog-detail/' + item.objectId)
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

.home-container {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.header {
  background-color: #1e1e1e;

}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.home-content {
  margin: 0 auto;
  max-width: 1200px;

  .blog-list {
    padding: 0 8px;
  }

  tag-box {
    padding: 0 8px;

  }
}




.scrollbar {
  margin-left: 30px;
  float: left;
  height: 300px;
  width: 65px;
  background: #fff;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}

.scrollbar-primary::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-primary::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #4285F4;
}

.scrollbar-danger::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-danger::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-danger::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #ff3547;
}

.scrollbar-warning::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-warning::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-warning::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #FF8800;
}

.scrollbar-success::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-success::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-success::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #00C851;
}

.scrollbar-info::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-info::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-info::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #33b5e5;
}

.scrollbar-default::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-default::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-default::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #2BBBAD;
}

.scrollbar-secondary::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-secondary::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-secondary::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #aa66cc;
}
</style>