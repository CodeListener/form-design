<template>
  <div class="design-panel">
    <draggable class="drawing-wrapper" v-model="drawingList" group="component" @change="change" @start="onStart" @end="onEnd">
      <RenderItem v-for="item in drawingList" :key="item.id" :item="item" />
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
      // this.$set(this.$store.state.activeItem, item);
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

<style lang="less" scoped>
.drawing-wrapper {
  height: 100%;
}
</style>
