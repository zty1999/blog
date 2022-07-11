**点击按钮切换主题及粒子动画，粒子动画无法成功切换**

使用 v-if 控制粒子动画切换无效， 需使用:key 设置组件的 key 值，切换粒子动画时，切换 key 值，实现组件更新。

**父组件样式无法覆盖子组件样式**
组件 style 标签 添加 scope 属性，类名后会添加组件标识，只作用当前组件样式
解决：

- 添加无 scope 属性的 style 标签，放置子组件可被外部自定义样式
- 使用 ::v-deep 进行样式穿透 如：`::v-deep .tag-box`

**linux 打包项目内存不足，打包进程被 killed**
解决：build 命令 去掉 vue-tsc --noEmit 。

```json
//  "build": " vue-tsc --noEmit && vite build",
 "build": " vite build",
```

**设置全局环境变量 process is not defined**
process 已被移除，需使用 import.meta.dev 获取当前环境变量 MODE。
