<template>
  <div class="setting-panel">
    <div class="not-setting" v-if="!activeItem">暂无设置目标</div>
    <div class="settting-form" v-else>
      <template v-for="settingItem in activeItem.settings || []">
        <BlockSetting :schema="settingItem" :config="activeItem" />
      </template>
      <!-- <h2>Row</h2>
      <div>span</div>
      <el-slider v-model="activeItem.component.span" :min="0" :max="24" :step="1" show-stops> </el-slider>
      <div>gutter</div>
      <el-slider v-if="activeItem.component.tag === 'el-row'" v-model="activeItem.component.props.gutter" :min="0" :max="24" :step="1" show-stops> </el-slider> -->
    </div>
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
  computed: {
    activeItem() {
      return this.$store.state.active;
    },
  },
};
</script>
