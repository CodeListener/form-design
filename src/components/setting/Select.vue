<template>
  <BaseSelect v-bind="$attrs" v-on="$listeners" :options="opts" />
</template>
<script>
import BaseSelect from "@/components/base/select/index.vue";
export default {
  inheritAttrs: false,
  props: {
    config: {
      type: Object,
      defualt: () => ({}),
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    opts() {
      let options = this.config.component.props.options;
      if (!this.config.component.props.options.length) {
        options = this.options || [];
      }
      return options;
    },
  },
  components: {
    BaseSelect,
  },
};
</script>
