import { VAceEditor } from 'vue3-ace-editor'
import { createApp } from 'vue'
import '@/@iconify/icons-bundle'
import ToastPlugin from 'vue-toast-notification'
import VuetifyUseDialog from 'vuetify-use-dialog'
import './ace-config'
import VueApexCharts from 'vue3-apexcharts'
import { removeEl } from './@core/utils/dom'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import store from '@/store'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
import DialogCloseBtn from '@/@core/components/DialogCloseBtn.vue'
import { fixArrayAt } from '@/@core/utils/compatibility'

// 修复低版本Safari等浏览器数组不支持at函数的问题
fixArrayAt()

// 加载字体
loadFonts()

// 创建Vue实例
const app = createApp(App)

// 注册全局组件
app
  .component('VAceEditor', VAceEditor)
  .component('VApexChart', VueApexCharts)
  .component('VDialogCloseBtn', DialogCloseBtn)

// 注册插件
app
  .use(vuetify)
  .use(router)
  .use(store)
  .use(ToastPlugin, {
    position: 'bottom-right',
  })
  .use(VuetifyUseDialog, {
    confirmDialog: {
      dialogProps: {
        maxWidth: '40rem',
      },
      confirmationButtonProps: {
        variant: 'elevated',
        color: 'primary',
        class: 'me-3 px-5',
        'prepend-icon': 'mdi-check',
      },
      cancellationButtonProps: {
        variant: 'outlined',
        color: 'secondary',
        class: 'me-3',
      },
      confirmationText: '确认',
      cancellationText: '取消',
    },
  })
  .use(PerfectScrollbarPlugin)
  .mount('#app')
  .$nextTick(() => removeEl('#loading-bg'))
