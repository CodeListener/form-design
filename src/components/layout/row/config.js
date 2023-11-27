import {
  createInputNumber,
  createSelectConfig,
  createSwitch,
  withBaseBlockSetting,
} from '@/components/utils/setting'
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
        createSwitch('component.props.type', 'Flex布局'),
        createSelectConfig('component.props.justify', 'Justify', [
          { label: 'start', value: 'start' },
          { label: 'end', value: 'end' },
          { label: 'center', value: 'center' },
          { label: 'space-around', value: 'space-around' },
          { label: 'space-between', value: 'space-between' },
        ]),
        createSelectConfig('component.props.align', 'Align', [
          { label: 'top', value: 'top' },
          { label: 'middle', value: 'middle' },
          { label: 'bottom', value: 'bottom' },
        ]),
        createInputNumber('component.props.gutter', 'Gutter', {
          props: { min: 0 },
        }),
      ],
    },
  ],
}
