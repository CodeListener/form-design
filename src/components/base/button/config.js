export const config = {
  name: '按钮',
  icon: '',
  component: {
    tag: 'el-button',
    props: {
      type: 'primary',
    },
    text: '主要按钮',
    span: 6,
    slots: {
      default(item) {
        return item.component.text
      },
    },
  },
  settings: [
    {
      title: '块设置',
      list: [
        {
          label: 'span',
          componentName: 'el-slider',
          componentProps: { min: 0, max: 24 },
          fieldPaths: 'component.span',
        },
      ],
    },
  ],
}
