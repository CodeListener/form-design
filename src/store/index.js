import materials from '@/components/materials'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isDragging: false,
    activeItem: {},
    drawingList: [],
    materialComponent: materials,
  },
  mutations: {
    updateIsDargging(state, flag) {
      state.isDragging = flag
    },
    updateDrawingList(state, item) {
      state.drawingList = item
    },
    updateActiveItem(state, item) {
      state.activeItem = item
    },
  },
  actions: {},
  getters: {},
})
