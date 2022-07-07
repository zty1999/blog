<template>
    <article class="blog-detail-wrapper">
        <div class="blog-detail">
            <div class="title">{{ blog.title }}</div>
            <div class="content" :innerHTML="blog.content"></div>
        </div>
    </article>
</template>
<script lang="ts">
import { defineComponent, reactive, Ref, ref } from "vue";
import { useRouter } from "vue-router";
import { getPost, Post } from "@/utils/http/parse-restapi";
export default defineComponent({
    setup() {
        const router = useRouter()
        let currentRoute = router.currentRoute.value;
        let blogId: string = (currentRoute.params.id as string);
        let post: Post = {};
        const blog = ref(post)
        getPost(blogId).then(res => {
            blog.value = res
        })

        return {
            blog
        };
    },
    methods: {

    }
});
</script>
<style lang="scss" scoped>
.title {
    padding: 60px 0;
    text-align: center;
    font-size: 26px;
    font-weight: 600;
}

.blog-detail-wrapper {
    width: 100%;
}

.blog-detail {
    width: 1000px;
    min-height: calc(100vh - 80px);
    padding: 20px;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 4px;
}
</style>
