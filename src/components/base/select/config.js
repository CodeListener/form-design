import { withBaseBlockSetting } from "@/components/utils/setting";

export const config = {
  name: '选择框',
  icon: '',
  component: {
    tag: 'el-select',
    props: {
      value: '',
    },
    span: 6,
  },
  settings: [withBaseBlockSetting()],
}
