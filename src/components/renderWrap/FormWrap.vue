<script lang="ts" setup>
import { useTheme } from 'vuetify'
import FormRender from '@/components/render/FormRender.vue'

// 组件接口
interface RenderProps {
  component: string
  text: string
  html: string
  content?: any
  props?: any
}
const props = defineProps<{ form: any; config: Array<RenderProps>; theme: string }>()
const { global: globalTheme } = useTheme()
const pluginConfigForm = ref(props.form)
if (props.theme)
  globalTheme.name.value = props.theme
</script>

<template>
  <VCard class="rounded-t">
    <VCardText>
      <FormRender
        v-for="(item, index) in props.config"
        :key="index"
        :config="item"
        :form="pluginConfigForm"
      />
    </VCardText>
  </VCard>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
