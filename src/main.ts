import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 全量引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// 按需引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 全量引入
// app.use(ElementPlus)

// 按需引入
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
