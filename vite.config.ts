import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }], // `style: true` 会加载 less 文件],
    // Components({
    //   resolvers: [AntDesignVueResolver()],
    // }),
  ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    },
    server: {
      //服务器主机名
      host: '0.0.0.0',
      //端口号
      port: 3000,
      //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      // strictPort: false,
      //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
      open: false,
      // 允许跨域
      cors: true,
      //自定义代理规则 根据项目实际情况配置
      proxy: {
        '/parse': {
          // target: 'http://106.55.30.242/parse/classes',
          target: 'http://localhost:1337/parse/classes',
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/parse/, '/')
          // rewrite: path => path.replace('/api/', '/')
        }
      }
    }
})
