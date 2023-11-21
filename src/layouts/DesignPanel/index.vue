<template>
  <div :class="['design-panel', { 'is-dragging': $store.state.isDragging }]">
    <draggable draggable=".render-item" animation="300" class="drawing-wrapper" tag="el-row" v-model="drawingList" group="component" @change="change" @start="onStart" @end="onEnd">
      <RenderItem v-for="(item, index) in drawingList" :index="index" :key="item.id" :item="item" @click.native.stop="onClick(item)"> </RenderItem>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import RenderItem from "@/components/Render/index.js";
export default {
  name: "DesignPanel",
  components: {
    draggable,
    RenderItem,
  },
  computed: {
    drawingList: {
      set(res) {
        this.$store.commit("updateDrawingList", res);
      },
      get() {
        return this.$store.state.drawingList;
      },
    },
  },
  methods: {
    onClick(item) {
      this.setActiveItem(item);
    },
    onStart() {
      this.$store.commit("updateIsDargging", true);
    },
    onEnd() {
      this.$store.commit("updateIsDargging", false);
    },
    setActiveItem(item) {
      this.$store.commit("updateActiveItem", item);
    },
    onInput(v) {
      const item = this.$store.state.activeItem;
      item.component.props.value = v;
      this.$store.commit("updateActiveItem", item);
    },
    change(res) {
      const { added } = res;
      if (added) {
        this.$store.commit("updateActiveItem", added.element);
      }
    },
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>
