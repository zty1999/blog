import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'


const app = createApp(App);

app.use(store).use(router).use(Antd);
// 路由准备完毕再挂载
router.isReady().then(() => app.mount('#app'));