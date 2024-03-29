import { createApp } from "vue"

// 全量引入
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 按需引入
// import 'element-plus/theme-chalk/dark/css-vars.css'

import "@/assets/style/page.scss"
import App from "./App.vue"
import router from "./router"
import { pinia } from "@/pinia/index"
import "./permission"

const app = createApp(App)

app.use(pinia).use(router)

// 全量引入
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app")
