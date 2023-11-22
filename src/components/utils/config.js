export let COMPONENT_CONFIG_MAPS = {}
// 物料组件目录白名单
const whiteList = ['base', 'layout']

function genComponentDependencies() {
  const context = require.context('../', true, /config\.js$/)
  const keys = context.keys()
  const pattern = /\/(.*)\/(.*)\/config\.js$/
  const map = keys.reduce((prev, item) => {
    const result = pattern.exec(item)
    if (!result) return prev
    const [_, type, component] = result
    if (!whiteList.includes(type)) return prev
    // console.log(prev, type, component)
    if (!prev[type]) prev[type] = {}
    prev[type][component] = context(item).config
    return prev
  }, {})
  return map
}

COMPONENT_CONFIG_MAPS = genComponentDependencies()
