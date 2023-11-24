import materials from '@/components/components'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    active: undefined,
    isDragging: false,
    drawingList: [],
    materialComponent: materials,
  },
  getters: {},
  mutations: {
    setActiveTarget(state, item) {
      state.active = item
    },
    updateIsDargging(state, flag) {
      state.isDragging = flag
    },
    updateDrawingList(state, item) {
      state.drawingList = item
    },
  },
  actions: {},
})
