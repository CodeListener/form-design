import { withBaseBlockSetting } from "@/components/utils/setting";

export const config = {
  name: '输入框',
  icon: '',
  formItemProps: {
    label: '输入框',
    labelWidth: '80px',
  },
  component: {
    tag: 'el-input',
    props: {
      value: undefined,
    },
    span: 6,
    slots: {
      prepend(...args) {
        return 'aaa'
      },
    },
  },
  settings: [withBaseBlockSetting()],
}
