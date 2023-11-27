<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script></script>

<style lang="less">
.layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px minmax(400px, 1fr) 400px;
  grid-template-rows: 1fr;

  .material-panel,
  .design-panel {
    border-right: 1px solid #efefef;
  }
  .setting-panel {
    padding: 16px;
    box-sizing: border-box;
  }
}
</style>
