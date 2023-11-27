export function withBaseBlockSetting(expands = []) {
  return {
    title: '块设置',
    list: [
      {
        span: 24,
        label: 'ColSpan',
        component: {
          tag: 'el-input-number',
          props: { min: 0, max: 24 },
        },
        fieldPaths: 'component.span',
      },
      ...expands,
    ],
  }
}
