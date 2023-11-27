import { withBaseBlockSetting } from '@/components/utils/setting'

export const config = {
  name: 'Alert 警告',
  icon: '',
  component: {
    tag: 'el-alert',
    props: {
      type: 'success',
      title: '成功类型警告',
    },
    span: 24,
  },
  settings: [withBaseBlockSetting()],
}
