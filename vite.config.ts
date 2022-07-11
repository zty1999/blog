import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import { resolve } from 'path';

// element-plus
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

// import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
const pathSrc = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }], // `style: true` 会加载 less 文件],
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // AntDesignVueResolver(),
        ElementPlusResolver()
      ]
    }),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver({
          exclude: new RegExp(/^(?!.*loading-directive).*$/), // 解决使用v-loading报错 无法找到样式 element-plus/es/components/loading-directive/style/css 问题
          importStyle: true
        }),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: resolve(pathSrc, 'types', 'auto-imports.d.ts')
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      '~/': `${resolve(__dirname, 'src')}/`
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/assets/styles/base.scss" as *;`
      }
    }
  },
  define: {
    'process.env': {}
  }
  // server: {
  //   //服务器主机名
  //   host: '0.0.0.0',
  //   //端口号
  //   port: 3000,
  //   //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
  //   // strictPort: false,
  //   //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
  //   open: false,
  //   // 允许跨域
  //   cors: true,
  //   //自定义代理规则 根据项目实际情况配置
  //   proxy: {
  //     // '/parse': {
  //     //   // target: 'http://106.55.30.242/parse/classes/',
  //     //   target: 'http://localhost:1337/parse/classes/',
  //     //   changeOrigin: true,
  //     //   secure: false,
  //     //   rewrite: path => path.replace(/^\/parse/, '/')
  //     // },
  //     // '/api': {
  //     //   // target: 'http://106.55.30.242/parse/classes/',
  //     //   target: 'http://localhost:1337/api/',
  //     //   changeOrigin: true,
  //     //   secure: false,
  //     //   rewrite: path => path.replace(/^\/api/, '/')
  //     // }
  //   }
  // }
});
