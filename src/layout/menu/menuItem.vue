<script lang='ts' setup>
import type { RouteRecordRaw } from 'vue-router';

const props = defineProps<{
  route: RouteRecordRaw
}>()

</script>

<template>
  <el-menu-item :index="props.route.path">
    <el-icon v-if="props.route.meta?.icon">
      <component :is="props.route.meta.icon" />
    </el-icon>
    <template #title>{{ props.route.meta?.title }}</template>
  </el-menu-item>
</template>

<style lang='scss'>

</style>