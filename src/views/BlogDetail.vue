<template>
    <div id="blog-detail-container">
        <article class="blog-detail-wrapper">
            <div class="blog-detail shadow-light">
                <div class="title">{{ blog.title }}</div>
                <div class="desc">
                    <tags-text class="tags" :tags="blog.tags"></tags-text>
                    <span class="date">{{ blog.createdAt }}</span>
                    <span class="views">{{ blog.views }}</span>
                </div>
                <div class="content" :innerHTML="blog.content"></div>
            </div>
        </article>
        <side-bar class="side-bar"></side-bar>
    </div>

</template>
<script lang="ts">
import { defineComponent, reactive, Ref, ref } from "vue";
import { useRouter } from "vue-router";
import { getPost, Post } from "@/utils/http/parse-restapi";
import dayjs from 'dayjs';

export default defineComponent({
    setup() {
        const router = useRouter()
        let currentRoute = router.currentRoute.value;
        let blogId: string = (currentRoute.params.id as string);
        let post: Post = new Post();
        const blog = ref(post)
        getPost(blogId).then(post => {
            (post.createdAt as any) = dayjs(post.createdAt).format('YYYY-MM-DD');
            blog.value = post
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
#blog-detail-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
}

.blog-detail-wrapper {
    width: 100%;
    padding: 10px 0;
    margin: 0 10px;

    .blog-detail {
        width: 1000px;
        min-height: calc(100vh - 80px);
        padding: 20px;

        margin: 0 auto;
        background-color: $articleBgColor;
        border-radius: 6px;


        .title {
            padding: 40px 0;
            text-align: center;
            font-size: 26px;
            font-weight: 600;
            color: $headingColor;
        }

        .desc {
            text-align: right;
            padding: 10px 0;
            font-size: 12px;
            color: $textTipColor;

            span {
                padding: 0 6px;
            }
        }
    }
}






.side-bar {}
</style>
