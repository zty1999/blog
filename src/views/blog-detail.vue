<template>
    <div id="blog-detail-container">
        <article class="blog-detail-wrapper">
            <div class="blog-detail shadow-light">
                <div class="title">{{ blog.title }}</div>
                <div class="desc">
                    <tags-text v-if="blog.tags" :tags="blog.tags"></tags-text>
                    <span class="date">{{ blog.createdAt }}</span>
                    <span class="views">
                        <i-ep-view></i-ep-view>
                        <span>{{ blog.views }}</span>
                    </span>
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
import { getPost, Post, editPost } from "@/utils/http/parse-restapi";
import dayjs from 'dayjs';

export default defineComponent({
    setup() {
        const router = useRouter()
        let currentRoute = router.currentRoute.value;
        let blogId: string = (currentRoute.params.id as string);
        let post: Post = new Post();
        const blog = ref(post)
        getPost(blogId).then(post => {
            console.log(post);
            (post.createdAt as any) = dayjs(post.createdAt).format('YYYY-MM-DD');
            post.views += 1;
            blog.value = post;
            editPost(post)
        })

        return {
            blog
        };
    },
    methods: {
        addViews() {

        }
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
            display: flex;
            justify-content: end;
            padding: 10px 0;
            font-size: 13px;
            color: $textTipColor;

            span {
                padding: 0 6px;
            }

            .views {
                display: flex;
                align-items: center;

                span {
                    padding: 0 6px;
                }
            }

        }
    }
}






.side-bar {}
</style>
