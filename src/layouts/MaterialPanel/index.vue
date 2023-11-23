<template>
  <div class="material-panel">
    <template v-for="items in $store.state.materialComponent">
      <draggable
        class="block"
        :key="`components-${items.title}`"
        :list="items.list"
        tag="dl"
        :group="{ name: 'component', pull: 'clone', put: false }"
        :sort="false"
        :clone="onClone"
        @start="onStart"
        @end="onEnd"
        draggable=".item"
      >
        <template #header>
          <dt class="title" :key="items.title">
            {{ items.title }}
          </dt>
        </template>
        <dd class="item" v-for="item in items.list" :key="item.name">
          {{ item.name }}
        </dd>
      </draggable>
    </template>
  </div>
</template>

<script>
import { deepClone } from "@/utils";
import Vue from "vue";
import draggable from "vuedraggable";
export default Vue.extend({
  name: "MaterialPanel",
  computed: {},
  components: {
    draggable,
  },
  methods: {
    onStart() {
      this.$store.commit("updateIsDargging", true);
    },
    onEnd() {
      this.$store.commit("updateIsDargging", false);
    },
    onClone(item) {
      item = deepClone({
        ...item,
        id: Date.now(),
      });
      return item;
    },
  },
});
</script>

<style lang="less">
.material-panel {
  .block {
    display: flex;
    flex-wrap: wrap;
    .title {
      flex: 1 0 100%;
      font-size: 14px;
      font-weight: bold;
      padding: 16px 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #efefef;
    }
    .item {
      padding: 0 10px;
      box-sizing: border-box;
      line-height: 40px;
      flex: 1 1 50%;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        background-color: #f6f7ff;
      }
    }
    .item:nth-of-type(n + 3) {
      margin-top: 10px;
    }
  }
}
</style>
