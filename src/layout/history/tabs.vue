<script lang="ts" setup>
import { onMounted, ref, watch } from "vue"
import type { TabPanelName } from "element-plus"
import { useRoute } from "vue-router"
import type { RouteLocationNormalizedLoaded } from "vue-router"
import _ from "lodash"

const route = useRoute()

const editableTabsValue = ref("")
const editableTabs = ref<RouteLocationNormalizedLoaded[]>([])
let tabIndex = 2

onMounted(() => {
  const curRoute = _.cloneDeep(route)
  editableTabsValue.value = curRoute.fullPath
  editableTabs.value.push(curRoute)
})

watch(route, () => {
  console.log(route)
  const curRoute = _.cloneDeep(route)
  editableTabsValue.value = curRoute.fullPath
  let count = 0
  for (const item of editableTabs.value) {
    if (item.fullPath === route.fullPath) {
      break
    } else {
      count++
    }
  }
  if (editableTabs.value.length === count) {
    editableTabs.value.push(curRoute)
  }
})

const removeTab = (targetName: TabPanelName) => {
  // const tabs = editableTabs.value
  // let activeName = editableTabsValue.value
  // if (activeName === targetName) {
  //   tabs.forEach((tab, index) => {
  //     if (tab.name === targetName) {
  //       const nextTab = tabs[index + 1] || tabs[index - 1]
  //       if (nextTab) {
  //         activeName = nextTab.name
  //       }
  //     }
  //   })
  // }
  // editableTabsValue.value = activeName
  // editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<template>
  <div class="history-tabs-wrapper">
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.fullPath"
        :label="(item.meta.title as string)"
        :name="item.fullPath"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.history-tabs-wrapper {
  background-color: #fff;
  .el-tabs__header {
    margin: 0;
  }
}
</style>
