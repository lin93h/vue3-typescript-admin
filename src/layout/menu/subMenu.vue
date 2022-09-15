<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router"
import SubMenu from "./subMenu.vue"

const props = defineProps<{
  route: RouteRecordRaw
}>()
</script>

<template>
  <el-sub-menu :index="props.route.path">
    <template #title>
      <el-icon v-if="props.route.meta?.icon">
        <component :is="props.route.meta.icon" />
      </el-icon>
      <span>{{ props.route.meta?.title }}</span>
    </template>
    <template v-for="(item, index) of props.route.children" :key="index">
      <el-menu-item v-if="!item.children?.length" :index="item.path">
        <el-icon v-if="item.meta?.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <template #title>{{ item.meta?.title }}</template>
      </el-menu-item>
      <SubMenu v-else :route="item" />
    </template>
  </el-sub-menu>
</template>

<style lang="scss"></style>
