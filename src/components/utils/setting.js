import Select from '@/components/base/select/index.vue'
import SelectSetting from '@/components/setting/Select.vue'
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

export function createReactiveSelectConfig(
  fieldPaths,
  label,
  options = [],
  obj = {},
) {
  return {
    span: 24,
    modelEvent: 'change',
    label,
    component: {
      tag: SelectSetting,
      props: {
        options,
      },
    },
    fieldPaths,
    ...obj,
  }
}

export function createSelectConfig(fieldPaths, label, options = [], obj = {}) {
  return {
    span: 24,
    modelEvent: 'change',
    label,
    component: {
      tag: Select,
      props: {
        options,
      },
    },
    fieldPaths,
    ...obj,
  }
}

export function createInputNumber(fieldPaths, label, opt = {}) {
  const { span = 24, props = {} } = opt
  return {
    span,
    label,
    component: {
      tag: 'el-input-number',
      props: { ...props },
    },
    fieldPaths,
  }
}

export function createSwitch(fieldPaths, label, opt = {}) {
  const { span = 24, props = {} } = opt
  return {
    span,
    label,
    component: {
      tag: 'el-switch',
      props: {
        activeValue: 'flex',
        inactiveValue: 'block',
        ...props,
      },
    },
    fieldPaths,
  }
}
