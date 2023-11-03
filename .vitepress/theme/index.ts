// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { inject } from '@vercel/analytics'

inject()
import './index.css'
import './custom.css'
import './custom-blocks.css'

export default {
  ...DefaultTheme,

  setup() {
    // 获取路由信息
    const route = useRoute()
    // 初始化缩放
    const initZoom = () => {
      // 设置图片缩放
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
      // 设置图片缩放
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    // 组件加载完成时执行
    onMounted(() => {
      // 初始化缩放
      initZoom()
    })
    // 监听路由变化，当路由变化时执行
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
