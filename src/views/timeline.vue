<template>
  <div class="timeline-container">
    <lay-timeline>
      <lay-timeline-item :title="item" v-for=" (item, index) in timeArr" :key="index">
        <!-- <template #dot>
        </template> -->
        <template v-for=" (post, index) in timeMap[item]" :key="index">
          <p class="pointer" @click="toPage(post)">{{ post.title }}</p>
        </template>
      </lay-timeline-item>
    </lay-timeline>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { getTimelinePosts, Post } from '@/utils/http/parse-restapi';
const router = useRouter()

interface archive {
  year: string,
  month: string,
  count: number,
  title?: string
}
const temp: any[] = []

const timeMap: any = ref({})
const timeArr = ref(temp)
getTimelinePosts().then(res => {

  let posts = res[0];
  timeMap.value = posts;
  timeArr.value = Object.keys(posts)
  console.log(timeMap.value, timeArr.value);

})

const toPage = (item: Post) => {
  router.push('/blog-detail/' + item.objectId)
}
</script>
<style lang="scss" scoped>
.layui-timeline {
  margin: 40px auto;
  width: 40vw;

  p {
    padding: 10px 0;
  }
}
</style>
