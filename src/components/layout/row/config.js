export const config = {
  name: 'Row布局',
  icon: '',
  isLayout: true,
  children: [],
  component: {
    tag: 'el-row',
    props: {
      gutter: 10,
    },
    span: 24,
    style: {
      minHeight: '40px',
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
    {
      title: '组件属性',
      list: [
        {
          label: '类型',
          componentName: 'el-slider',
          componentProps: { min: 0, max: 24 },
          fieldPaths: 'component.span',
        },
      ],
    },
  ],
}
