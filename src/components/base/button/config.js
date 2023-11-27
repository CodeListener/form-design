import { withBaseBlockSetting } from '@/components/utils/setting'

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
  settings: [withBaseBlockSetting()],
}
