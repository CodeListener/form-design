<template>
  <el-form class="form-setting">
    <h6>{{ schema.title }}</h6>
    <el-form-item v-for="item in schema.list" :label="item.label" label-width="80px">
      <component :is="item.componentName" v-bind="item.componentProps" :value="getValueFromPath(item.fieldPaths)" @input="onInput($event, item.fieldPaths)" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    config: Object,
    schema: {
      type: Object,
      required: true,
    },
  },
  methods: {
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
      this.$set(this.findParent(fieldPaths), key, v);
    },
  },
};
</script>
