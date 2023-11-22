export function deepClone(obj) {
  // 过滤原始类型
  if (typeof obj !== 'object') return obj;
  // 过滤null类型 因为typeof null==object，使用不能使用typeof判断null数据类型
  if (obj == null) return obj;
  let newObj = Array.isArray(obj) ? [] : {};
  // let newObj=obj instanceof Array ?[]:{};
  // 拷贝Date对象
  if (obj instanceof Date) {
      newObj = new Date(obj)
  }
  // 拷贝RegExp对象
  if (obj instanceof RegExp) {
      newObj = new RegExp(obj)
  }
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) { //自己本身具有的属性
          newObj[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key];
      }
  }
  return newObj;
}
