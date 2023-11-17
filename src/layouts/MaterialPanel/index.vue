<template>
  <div class="material-panel">
    <dl>
      <template v-for="items in $store.state.materialComponent">
        <dt :key="items.title">
          {{ items.title }}
        </dt>
        <draggable
          :key="`components-${items.title}`"
          :list="items.list"
          :group="{ name: 'component', pull: 'clone', put: false }"
          :sort="false"
          :clone="onClone"
          @start="onStart"
          @end="onEnd"
        >
          <dd v-for="item in items.list" :key="item.name">
            {{ item.name }}
          </dd>
        </draggable>
      </template>
    </dl>
  </div>
</template>

<script>
import Vue from "vue";
import draggable from "vuedraggable";
export default Vue.extend({
  name: "MaterialPanel",
  computed: {},
  components: {
    draggable,
  },
  methods: {
    onStart() {
      this.$store.commit("updateIsDargging", true);
    },
    onEnd() {
      this.$store.commit("updateIsDargging", false);
    },
    onClone(item) {
      return JSON.parse(
        JSON.stringify({
          ...item,
          id: Date.now(),
        })
      );
    },
  },
});
</script>
