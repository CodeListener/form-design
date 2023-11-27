import {
  createReactiveSelectConfig,
  withBaseBlockSetting,
} from '@/components/utils/setting'
import Select from './index.vue'
import OptionsOperation from '@/components/setting/OptionsOperation/index.vue'
export const config = {
  name: '选择框',
  icon: '',
  component: {
    tag: Select,
    props: {
      value: '',
      options: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
      ],
    },
    span: 6,
  },
  settings: [
    withBaseBlockSetting(),
    {
      title: '组件属性',
      list: [
        createReactiveSelectConfig('component.props.value', '默认值', [
          { label: '1', value: 1 },
        ]),
        {
          span: 24,
          label: '选项列表',
          component: {
            tag: OptionsOperation,
            props: {},
          },
          fieldPaths: 'component.props.options',
        },
      ],
    },
  ],
}
