import draggable from 'vuedraggable'

function renderControl(h, item) {
  const { remove, copy } = genControlMethods.call(this, item)
  return (
    <div class="controls">
      {item.id}
      <i
        class="el-icon-aim move"
        onClick={(e) => {
          e.stopPropagation()
          this.$store.commit('updateActiveItem', item)
        }}
      />
      <i
        class="el-icon-document-copy copy"
        style={{ color: 'blue' }}
        onClick={copy}
      />
      <i
        class="el-icon-delete-solid remove"
        style={{ color: 'red' }}
        onClick={remove}
      />
    </div>
  )
}
function genControlMethods(_item) {
  const remove = (e) => {
    e.stopPropagation()
    this.$store.dispatch('removeDrawingItem', this.paths)
  }
  const copy = (e) => {
    e.stopPropagation()
    this.$store.dispatch('copyDrawingItem', this.paths)
  }
  return {
    remove,
    copy,
  }
}
function renderLayoutItem(h, item) {
  const { children = [], component } = item
  const { style = {}, props = {}, tag } = component

  const childs = children.map((child, index) => {
    return h('RenderItem', {
      props: {
        index,
        item: child,
      },
      scopedSlots: {
        /* 支持自定义控制按钮 */
        controls: this.$scopedSlots.controls,
      },
    })
  })
  const layout = (
    <draggable
      draggable=".render-item"
      tag={tag}
      componentData={{
        props,
      }}
      animation={300}
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
    index: {
      required: true,
      type: Number,
    },
  },
  components: {
    draggable,
  },
  data() {
    return {}
  },
  inject: {
    parentPaths: { default: () => [] },
    isForm: { default: false },
  },
  provide() {
    return {
      parentPaths: this.paths,
      isForm: this.isForm || !!this.item.isForm,
    }
  },
  computed: {
    paths() {
      return [...this.parentPaths, this.index]
    },
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
        {this.$scopedSlots.controls
          ? this.$scopedSlots.controls({
              item,
              ...genControlMethods.call(this, item),
            })
          : renderControl.call(this, h, item)}
      </el-col>
    )
  },
}
