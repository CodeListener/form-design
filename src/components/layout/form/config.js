import { withBaseBlockSetting } from "@/components/utils/setting";

export const config = {
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
    },
  },
  settings: [withBaseBlockSetting()],
}
