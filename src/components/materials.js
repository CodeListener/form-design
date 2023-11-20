const BaseComponents = [
  {
    name: '按钮',
    icon: '',
    component: {
      tag: 'el-button',
      props: {
        type: 'primary',
      },
      span: 24,
    },
  },
  {
    name: '输入框',
    icon: '',
    // layout: {
    //   tag: 'el-form-item',
    //   props: {},
    // },
    formItemProps: {
      label: '输入框',
      labelWidth: '80px',
    },
    component: {
      tag: 'el-input',
      props: {
        value: undefined,
      },
      span: 24,
    },
  },
  {
    name: '选择框',
    icon: '',
    // layout: {
    //   tag: 'el-form-item',
    //   props: {},
    // },
    component: {
      tag: 'el-select',
      props: {
        value: '',
      },
      span: 6,
    },
  },
]
const LayoutComponents = [
  {
    name: 'Form表单',
    icon: '',
    isLayout: true,
    isForm: true,
    children: [],
    component: {
      tag: 'el-form',
      props: {},
      style: {
        minHeight: '40px',
        // background: '#efefef',
      },
    },
  },
  {
    name: 'Row布局',
    icon: '',
    isLayout: true,
    children: [],
    component: {
      tag: 'el-row',
      props: {
        // gutter: 20,
      },
      style: {
        minHeight: '40px',
        // background: '#999',
      },
    },
  },
  // {
  //   name: 'Col布局',
  //   icon: '',
  //   isLayout: true,
  //   children: [],
  //   component: {
  //     tag: 'el-col',
  //     style: {
  //       // background: 'tomato',
  //       minHeight: '20px',
  //     },
  //     props: {
  //       span: 6,
  //     },
  //   },
  // },
]
export default [
  {
    title: '基础组件',
    list: BaseComponents,
  },
  {
    title: '布局组件',
    list: LayoutComponents,
  },
]
