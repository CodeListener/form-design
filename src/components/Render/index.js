import draggable from 'vuedraggable'

let currentRenderIsForm = false
function renderLayoutItem(h, item) {
  const { children = [], component, isForm } = item
  const { style = {}, props = {}, tag } = component
  if (isForm) {
    currentRenderIsForm = true
  }
  currentRenderIsForm = isForm
  const childContent = children.map((child) => {
    return renderItem.apply(this, [h, child])
  })
  currentRenderIsForm = false
  return (
    <draggable
      tag={tag}
      componentData={{
        props,
      }}
      class="render-layout-item"
      style={style}
      list={item.children}
      group="component"
      onStart={() => this.$store.commit('updateIsDargging', true)}
      onEnd={() => this.$store.commit('updateIsDargging', false)}
    >
      {childContent}
    </draggable>
  )
}
function renderItem(h, item) {
  const { component, isLayout, formItemProps } = item
  const { style = {}, props = {}, tag } = component
  if (isLayout) {
    return renderLayoutItem.apply(this, [h, item])
  }
  let _item = h(tag, {
    class: 'render-item',
    style,
    props,
  })
  if (currentRenderIsForm) {
    return h(
      'el-form-item',
      {
        props: formItemProps,
      },
      [_item],
    )
  }
  return _item
}

export default {
  name: 'RenderItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    draggable,
  },
  render(h) {
    const { item } = this

    return renderItem.apply(this, [h, item])
  },
}
