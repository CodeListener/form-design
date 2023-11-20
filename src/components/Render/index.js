import draggable from 'vuedraggable'

function renderControl(h, item) {
  return (
    <div class="controls">
      <i
        class="el-icon-aim"
        onClick={(e) => {
          e.stopPropagation()
          this.$store.commit('updateActiveItem', item)
        }}
      />
      <i class="el-icon-document-copy" style={{ color: 'blue' }} />
      <i class="el-icon-delete-solid" style={{ color: 'red' }} />
    </div>
  )
}
function renderLayoutItem(h, item) {
  const { children = [], component } = item
  const { style = {}, props = {}, tag } = component

  const childs = children.map((child) => {
    return <RenderItem item={child} key={child.id} />
  })
  const layout = (
    <draggable
      tag={tag}
      componentData={{
        props,
      }}
      style={style}
      list={item.children}
      group="component"
      onStart={() => this.$store.commit('updateIsDargging', true)}
      onEnd={() => this.$store.commit('updateIsDargging', false)}
    >
      {childs}
    </draggable>
  )
  return layout
}
function renderChildItem(h, item) {
  const { component, formItemProps } = item
  const { style = {}, props = {}, tag } = component
  let _item = h(tag, {
    style,
    props,
    nativeOn: {
      click: (e) => {
        this.$store.commit('updateActiveItem', item)
        e.stopPropagation()
      },
    },
  })
  if (this.isForm) {
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
  inject: {
    isForm: { default: false },
  },
  provide() {
    return {
      isForm: this.isForm || !!this.item.isForm,
    }
  },
  render(h) {
    const { item } = this
    const { isLayout } = item
    const classList = (item) => {
      const arr = ['render-item']
      if (isLayout) {
        arr.push('render-layout-item')
      }
      if (this.$store.state.activeItem.id === item.id) {
        arr.push('active')
      }
      return arr
    }

    return (
      <el-col
        span={item.component.span}
        class={classList(item)}
        nativeOnClick={(e) => {
          this.$store.commit('updateActiveItem', item)
          e.stopPropagation()
        }}
      >
        {isLayout
          ? renderLayoutItem.call(this, h, item)
          : renderChildItem.call(this, h, item)}
        {renderControl.call(this, h, item)}
      </el-col>
    )
  },
}
