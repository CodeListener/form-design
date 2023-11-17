<template>
    <div class="layout">
        <slot />
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="less">
.layout {
    height: 100vh;
    display: grid;
    grid-template-columns: 200px minmax(400px, 1fr) 200px;
    grid-template-rows: 1fr;

    .material-panel,
    .design-panel {
        border-right: 1px solid #efefef;
    }
}
</style>