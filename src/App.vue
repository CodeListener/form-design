<template>
  <div id="app">
    <Layout>
      <MaterialPanel />
      <DesignPanel />
      <SettingPanel />
    </Layout>
  </div>
</template>

<script >
import Layout from "./layouts/index.vue";
import DesignPanel from "./layouts/DesignPanel/index.vue";
import MaterialPanel from "./layouts/MaterialPanel/index.vue";
import SettingPanel from "./layouts/SettingPanel/index.vue";
export default {
  name: "App",
  components: {
    Layout,
    DesignPanel,
    MaterialPanel,
    SettingPanel,
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