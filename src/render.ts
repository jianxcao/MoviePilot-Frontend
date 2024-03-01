import { VAceEditor } from 'vue3-ace-editor'
import { createApp } from 'vue'
import '@/@iconify/icons-bundle'
import ToastPlugin from 'vue-toast-notification'
import VuetifyUseDialog from 'vuetify-use-dialog'
import './ace-config'
import VueApexCharts from 'vue3-apexcharts'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import vuetify from '@/plugins/vuetify'
import store from '@/store'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import 'vue3-perfect-scrollbar/style.css'
import DialogCloseBtn from '@/@core/components/DialogCloseBtn.vue'
import { fixArrayAt } from '@/@core/utils/compatibility'
import FormRender from '@/components/renderWrap/FormWrap.vue'
import PageRender from '@/components/renderWrap/PageWrap.vue'

// 修复低版本Safari等浏览器数组不支持at函数的问题
fixArrayAt()


const create = function (com: Component, props: any) {
  const app = createApp(com, props)
  // 注册全局组件
  app.component('VAceEditor', VAceEditor)
    .component('VApexChart', VueApexCharts)
    .component('VDialogCloseBtn', DialogCloseBtn)

  app
    .use(vuetify)
    .use(store)
    .use(ToastPlugin, {
      position: 'bottom-right',
    })
    .use(VuetifyUseDialog)
    .use(PerfectScrollbarPlugin)
    .mount('#app')
  return app
}
const Renders = {
  FormRender: (props: any) => create(FormRender, props),
  PageRender: (props: any) => create(PageRender, props),
}

;(window as any).Renders = Renders
