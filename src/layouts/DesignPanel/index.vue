<template>
  <div :class="['design-panel', { 'is-dragging': $store.state.isDragging }]">
    <draggable draggable=".render-item" animation="300" class="drawing-wrapper" tag="el-row" v-model="drawingList" group="component" @start="onStart" @end="onEnd">
      <RenderItem
        v-for="(item, index) in drawingList"
        :list="drawingList"
        :index="index"
        :key="item.id"
        :item="item"
        :active="activeItem"
        @remove="onRemove"
        @copy="onCopy"
        @dragStart="onStart"
        @dragEnd="onEnd"
        @active="onActiveItemChange"
      />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import RenderItem from "@/components/Render/index.js";
import { deepClone } from "@/utils";
export default {
  name: "DesignPanel",
  components: {
    draggable,
    RenderItem,
  },
  computed: {
    activeItem: {
      set(v) {
        this.$store.commit("setActiveTarget", v);
      },
      get() {
        return this.$store.state.active;
      },
    },
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
    onActiveItemChange(item) {
      this.activeItem = item;
    },
    onRemove(list = [], target) {
      const idx = list.findIndex((item) => target.id === item.id);
      list.splice(idx, 1);
      this.$store.commit("setActiveTarget", undefined);
    },
    onCopy(list = [], target) {
      const newItem = deepClone(target);
      newItem.id = Date.now();
      list.push(newItem);
      this.$store.commit("setActiveTarget", target);
    },
    onStart() {
      this.$store.commit("updateIsDargging", true);
    },
    onEnd() {
      this.$store.commit("updateIsDargging", false);
    },
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>
