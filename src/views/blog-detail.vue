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
                <template v-if="blog.editorType == 'markdown'">
                    <mavon-editor class="content" id="content" v-dompurify-html="blog.content"
                        :subfield="markdownPreviewConfig.subfield" :defaultOpen="markdownPreviewConfig.defaultOpen"
                        :toolbarsFlag="markdownPreviewConfig.toolbarsFlag" :editable="markdownPreviewConfig.editable"
                        :scrollStyle="markdownPreviewConfig.scrollStyle" :boxShadow="markdownPreviewConfig.boxShadow"
                        :previewBackground="markdownPreviewConfig.previewBackground" />
                </template>
                <div v-else class="content" id="content" v-dompurify-html="blog.content"></div>
            </div>
        </article>
        <side-bar class="side-bar" :toc="blog.toc"></side-bar>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getPost, Post, editPost } from "@/utils/http/parse-restapi";
import dayjs from 'dayjs';
// import MarkdownIt from 'markdown-it';
// import { toc } from 'markdown-toc';
// import * as toc from 'markdown-toc'; 
// import { marked } from 'marked';
import toc from '@/utils/editor/markdown-toc';
// import { AutocJs } from '@/utils/editor/autoc.min.js';
import AutocJs from 'autocjs';

const router = useRouter()
let currentRoute = router.currentRoute.value;
let blogId: string = (currentRoute.params.id as string);
let post: Post = new Post();
const blog = ref(post)
getPost(blogId).then(async post => {
    console.log(post);
    (post.createdAt as any) = dayjs(post.createdAt).format('YYYY-MM-DD');
    post.views += 1;
    if (post.editorType == 'markdown') {
        let markedData = await toc.marked(post.content)
        console.log(markedData);
        post.toc = markedData.toc;
        post.content = markedData.content;
        console.log(post.content, post.toc);

    } else {
        initToc()
    }
    blog.value = post;
    editPost({ objectId: post.objectId, views: post.views })
})
const markdownPreviewConfig = ref({
    subfield: false,// 单双栏模式 true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)c
    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
    editable: false,// true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
    toolbarsFlag: false,// 	工具栏是否显示
    scrollStyle: false,// 开启滚动条样式(暂时仅支持chrome)
    boxShadow: false,// 开启边框阴影
    previewBackground: '#fff',// 语=预览框背景色
})
const initToc = () => {
    // 创建 Outline 实例
    let navigation = new AutocJs({
        // 文章正文 DOM 节点的 ID 选择器
        article: '#content',
        // 要收集的标题选择器
        selector: 'h1,h2,h3,h4,h5,h6',
        // 侧边栏导航的标题
        title: '文章导读',
        // 文章导读导航的位置
        // outside - 以侧边栏菜单形式显示（默认值）
        // inside - 在文章正文一开始的地方显示
        position: 'outside',
        // 标题图标链接的 URL 地址
        // （默认）没有设置定制，点击链接页面滚动到标题位置
        // 设置了链接地址，则不会滚动定位
        anchorURL: '',
        // 链接的显示位置
        // front - 在标题最前面（默认值）
        // back - 在标题后面
        anchorAt: 'front',
        // 是否生成文章导读导航
        isGenerateOutline: true,
        // 是否在文章导读导航中显示段落章节编号
        isGenerateOutlineChapterCode: true,
        // 是否在正文的文章标题中显示段落章节编号
        isGenerateHeadingChapterCode: false,
        // 是否在正文的文章标题中创建锚点
        isGenerateHeadingAnchor: true
    });

    // 可以在创建导航后，重置配置信息，重新生成新的导航
    navigation.reload({
        // 调整位直接在文章内生成导航
        position: 'outside',
        // 并且在文章标题前显示段落的章节层次索引值
        isGenerateHeadingChapterCode: true
    })
}

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
            align-items: center;
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
