import materials from '@/components/materials'
import { deepClone } from '@/utils'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function findParentFromPaths(list, paths = []) {
  const parentPaths = [...paths].slice(0, paths.length - 1)
  let path
  let parent = [...list]
  if (parentPaths.length === 0) return list
  do {
    path = parentPaths.shift()
    parent = parent[path]
    if (parent && parent.children) {
      parent = parent.children
    } else {
      break
    }
  } while (parent && parentPaths.length)
  return parent
}
export const store = new Vuex.Store({
  state: {
    isDragging: false,
    drawingList: [],
    materialComponent: materials,
    activeItemPaths: undefined,
  },
  getters: {
    activeItem(state) {
      const { drawingList, activeItemPaths = [] } = state
      const parent = findParentFromPaths(drawingList, activeItemPaths)
      const targetIdx = activeItemPaths[activeItemPaths.length - 1]
      return parent[targetIdx]
    },
  },
  mutations: {
    updateIsDargging(state, flag) {
      state.isDragging = flag
    },
    updateDrawingList(state, item) {
      state.drawingList = item
    },
    setActiveItemPaths(state, paths) {
      state.activeItemPaths = paths
    },
  },
  actions: {
    removeDrawingItem(context, paths) {
      const { drawingList } = context.state
      const parent = findParentFromPaths(drawingList, paths)
      const targetIdx = paths[paths.length - 1]
      if (parent) {
        const target = parent.splice(targetIdx, 1)
        console.warn('移除目标', target[0])
        context.commit('setActiveItemPaths', undefined)
      }
    },
    copyDrawingItem(context, paths) {
      const { drawingList } = context.state
      const parent = findParentFromPaths(drawingList, paths)
      const targetIdx = paths[paths.length - 1]
      if (parent) {
        const newItem = deepClone(parent[targetIdx])
        newItem.id = Date.now()
        parent.push(newItem)
        console.warn('复制目标', newItem)
        context.commit('setActiveItemPaths', [
          ...paths.slice(0, paths.length - 1),
          targetIdx + 1,
        ])
      }
    },
  },
})
