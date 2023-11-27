<template>
  <div class="setting-panel">
    <div class="not-setting" v-if="!activeItem">暂无设置目标</div>
    <el-form size="mini" class="settting-form" label-position="left" v-else>
      <el-collapse v-model="selected" ccordion>
        <el-collapse-item :name="settingItem.title" v-for="(settingItem, index) in activeItem.settings || []" :title="settingItem.title" :key="index">
          <BlockSetting :schema="settingItem" :config="activeItem" />
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>

<script>
import BlockSetting from "./components/BlockSetting/index";
import "./index.less";
export default {
  name: "SettingPanel",
  components: {
    BlockSetting,
  },
  data() {
    return {
      selected: [],
    };
  },
  computed: {
    activeItem() {
      return this.$store.state.active;
    },
  },
};
</script>
