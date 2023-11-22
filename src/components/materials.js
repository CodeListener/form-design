import './utils/config'
import { COMPONENT_CONFIG_MAPS } from './utils/config'

export default [
  {
    title: '基础组件',
    list: Object.values(COMPONENT_CONFIG_MAPS['base']),
  },
  {
    title: '布局组件',
    list: Object.values(COMPONENT_CONFIG_MAPS['layout']),
  },
]
