<template>
  <div>
    <el-row v-for="item in list" :key="item._id_">
      <el-col :span="6"> label</el-col>
      <el-col :span="6"> <el-input v-model="item.label" @blur="onBlur"></el-input></el-col>
      <el-col :span="6"> value</el-col>
      <el-col :span="6"> <el-input v-model="item.value" @blur="onBlur"></el-input></el-col>
    </el-row>
    <el-row>
      <el-button @click="add">新增</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      list: this.value,
    };
  },
  methods: {
    onBlur() {
      this.$emit("input", this.list);
    },
    add() {
      this.list.push([{ label: `label-${this.list.length}`, value: this.list.length, _id_: Date.now() }]);
    },
  },
};
</script>
