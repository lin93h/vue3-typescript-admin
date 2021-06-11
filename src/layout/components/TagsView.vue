<template>
  <div class="tags-view-wrapper">
    <div class="tags-view-inner" ref="scrollContainer" @wheel="handleScroll">
      <div class="tag-item pointer">
        <span class="txt">首页</span>
      </div>
      <router-link class="tag-item" v-for="tag in visibleViews" :key="tag" :to="tag.fullPath">
        <span>{{tag.meta.title}}</span>
        <i class="el-icon-close" @click="handleRemove(tag)"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tagsView', ['visibleViews', 'cacheViews'])
  },
  created() {
    this.setTagsView(this.$route)
  },
  watch: {
    $route: function(val) {
      this.setTagsView(val)
    }
  },
  methods: {
    ...mapActions('tagsView', ['setTagsView', 'removeTagsView']),
    handleScroll(event) {
      // console.log('滚动111111', event.deltaY)
      this.$refs['scrollContainer'].scrollLeft += (event.deltaY / 2)
    },

    // 移除标签
    handleRemove(route) {
      this.removeTagsView(route).then(res => {
        console.log('11111111', res, this.visibleViews)
        this.$router.replace(this.cacheViews[this.cacheViews.length - 1])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  // overflow-y: scroll;
  width: 100%;
  .el-scrollbar__bar {
    bottom: 0px;
  }
  .el-scrollbar__wrap {
    height: 49px;
  }
}
.tags-view-wrapper {
  .tags-view-inner {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 40px;
    padding: 5px 0 0;
    position: relative;
  }
  .tag-item {
    flex-shrink: 0;
    font-size: 12px;
    padding: 5px;
    margin-right: 5px;
    border: 1px solid #eee;
    border-radius: 2px;
    &:first-child {
      margin-left: 10px;
    }
    &:last-child {
      margin-right: 10px;
    }
  }
}
</style>