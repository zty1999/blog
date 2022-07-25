import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Particles from 'particles.vue3'; // 粒子动画
// import layui from 'layui'; 
    
const app = createApp(App);

// markdown展示
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'
app.use(mavonEditor)

// 防止xss注入
import vueDompurifyHtml from 'vue-dompurify-html';
app.use(vueDompurifyHtml)


// CSS base style sheet
import './assets/styles/hover.css';
import './assets/styles/animate.css';

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

// import PerfectScrollbar from 'perfect-scrollbar';

// import { initThemes } from '@/config/theme';
// let particlesJson = initThemes('base');

// element-plus
// import './assets/styles/element/index.scss';// 自定义主题样式
// import 'element-plus/theme-chalk/dark/css-vars.css';// 暗黑模式
// import ElementPlus from 'element-plus';
// import zhCn from 'element-plus/es/locale/lang/zh-cn';

// element-plus 过渡动画
// collapse
import { ElCollapseTransition } from 'element-plus';
// fade/zoom
// import 'element-plus/lib/theme-chalk/base.css'
app.use(store).use(router).use(Particles);
// .use(ElementPlus, {
//   locale: zhCn
// });
app.component(ElCollapseTransition.name, ElCollapseTransition);
// 路由准备完毕再挂载
router.isReady().then(() => app.mount('#app'));
