<template>
  <el-row class="block-setting" :gutter="10">
    <el-col :span="item.span" v-for="(item, index) in schema.list" :key="index">
      <el-form-item :label="item.label" :label-width="item.labelWidth || '80px'">
        <component :is="item.component.tag" v-bind="item.component.props" :value="getValueFromPath(item.fieldPaths)" @[getModelEvent(item)]="onInput($event, item.fieldPaths)" />
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script>
import { deepClone } from "@/utils";

export default {
  props: {
    config: Object,
    schema: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    getModelEvent(item) {
      return item.modelEvent || "input";
    },
    getValueFromPath(fieldPaths) {
      const paths = fieldPaths.split(".");
      const target = paths.reduce((prev, path) => {
        return prev[path];
      }, this.config);
      return target;
    },
    findParent(fieldPaths) {
      const paths = fieldPaths.split(".").slice(0, -1);
      const target = paths.reduce((prev, path) => {
        return prev[path];
      }, this.config);
      return target;
    },
    onInput(v, fieldPaths) {
      const [key] = fieldPaths.split(".").slice(-1);
      const parent = this.findParent(fieldPaths);
      parent[key] = v;
      this.$store.commit("updateActiveItem", deepClone(this.config));
      // Vue.set(this.findParent(fieldPaths), key, v);
    },
  },
};
</script>
