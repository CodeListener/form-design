<template>
  <div id="app">
    <!-- <div>
      <button @click="add">新增</button>
      <test v-for="(item, index) in list" :value="item.a" :key="item.a">
        <button @click="up(index)" v-if="index > 0">上移</button>
        <button @click="down(index)" v-if="index < list.length - 1">下移</button>
        <button @click="() => list.splice(index, 1)">删除</button>
      </test>
    </div> -->
    <Layout>
      <MaterialPanel />
      <DesignPanel />
      <SettingPanel />
    </Layout>
  </div>
</template>

<script>
import Layout from "./layouts/index.vue";
import DesignPanel from "./layouts/DesignPanel/index.vue";
import MaterialPanel from "./layouts/MaterialPanel/index.vue";
import SettingPanel from "./layouts/SettingPanel/index.vue";
import test from "./test.vue";
export default {
  name: "App",
  components: {
    Layout,
    DesignPanel,
    MaterialPanel,
    SettingPanel,
    test,
  },
  methods: {
    add() {
      this.list.push({ a: this.list.length + 1 });
    },
    up(idx) {
      const item = this.list[idx];
      const prevIdx = Math.max(idx - 1, 0);
      const prevItem = this.list[prevIdx];
      console.log(JSON.stringify(prevItem), JSON.stringify(item));
      this.list.splice(prevIdx, 2, item, prevItem);
    },
    down(idx) {
      const item = this.list[idx];
      const nextIdx = Math.min(idx + 1, this.list.length - 1);
      const nextItem = this.list[nextIdx];
      this.list.splice(idx, 2, nextItem, item);
    },
  },
  data() {
    return {
      list: [{ a: 1 }, { a: 2 }],
    };
  },
};
</script>
<style>
html,
body {
  margin: 0;
}
dl,
dt,
dd {
  margin: 0;
}
</style>
