<script lang="ts" setup>
import { useTheme } from 'vuetify'
import PageRender from '@/components/render/PageRender.vue'

const props = defineProps<{ config: Array<RenderProps>; theme: string }>()

const { global: globalTheme } = useTheme()
console.debug(globalTheme)
if (props.theme)
  globalTheme.name.value = props.theme

// 组件接口
interface RenderProps {
  component: string
  text: string
  html: string
  content?: any
  props?: any
}
</script>

<template>
  <VCard class="rounded-t">
    <VCardText>
      <PageRender
        v-for="(item, index) in props.config"
        :key="index"
        :config="item"
      />
    </VCardText>
  </VCard>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
