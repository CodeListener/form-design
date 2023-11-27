import { withBaseBlockSetting } from '@/components/utils/setting'
import Select from '@/components/base/select/index.vue'
export const config = {
  name: 'Row布局',
  icon: '',
  isLayout: true,
  children: [],
  component: {
    tag: 'el-row',
    props: {
      gutter: 10,
      type: 'block',
    },
    span: 24,
    style: {
      minHeight: '40px',
    },
  },
  settings: [
    withBaseBlockSetting(),
    {
      title: '组件属性',
      list: [
        {
          span: 12,
          label: 'Flex布局',
          component: {
            tag: 'el-switch',
            props: {
              activeValue: 'flex',
              inactiveValue: 'block',
            },
          },
          fieldPaths: 'component.props.type',
        },
        {
          span: 12,
          modelEvent: 'change',
          label: 'Justify',
          component: {
            tag: Select,
            props: {
              options: [
                { label: 'start', value: 'start' },
                { label: 'end', value: 'end' },
                { label: 'center', value: 'center' },
                { label: 'space-around', value: 'space-around' },
                { label: 'space-between', value: 'space-between' },
              ],
            },
          },
          fieldPaths: 'component.props.justify',
        },
        {
          span: 12,
          modelEvent: 'change',
          label: 'Align',
          component: {
            tag: Select,
            props: {
              options: [
                { label: 'top', value: 'top' },
                { label: 'middle', value: 'middle' },
                { label: 'bottom', value: 'bottom' },
              ],
            },
          },
          fieldPaths: 'component.props.align',
        },
        {
          span: 12,
          label: 'Getter',
          component: {
            tag: 'el-input-number',
            props: { min: 0 },
          },
          fieldPaths: 'component.props.gutter',
        },
      ],
    },
  ],
}
