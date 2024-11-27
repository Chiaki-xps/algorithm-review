/**
 * 思路：通过递归，一点点把对象里的值拿出来。
 * 1. 判断是否为对象。注意 typeof null 为 object
 * 2. 函数是对象，但是不需要递归直接返回
 * 3. 需要考虑如果对象里的属性是一个循环引用。通过创建一个map保存新对象和就对象映射关系，如果已经存在旧对象，直接返回对应新对象。
 * 4. 创建一个新对象或者数组
 * 5. 遍历对象/数组的key，递归调用deepClone，返回到新对象，新数组中
 * 我觉得掌握到这个程度差不多了，如果更复杂，还需要考虑其他数据类型
 * 1. Set -> 直接返回创建一个 new Set()。然后遍历里面的值，返回
 * 2. Map -> 同上
 * 3. symbol...
 */

// 判断是为新对象
function isObject(value) {
  const valueType = typeof value;
  return value !== null && ["object", "function"].includes(valueType);
}

function deepClone(originValue, map = new Map()) {
  // 1. 判断是不是对象
  if (!isObject(originValue)) {
    return originValue;
  }

  // 2. 如果是函数直接返回
  if (typeof originValue === "function") {
    return originValue;
  }

  // 3. 判断是否是循环引用
  if (map.has(originValue)) {
    return map.get(originValue);
  }

  // 4. 根据数组/对象，创建新的
  const newObj = Array.isArray(originValue) ? [] : {};

  // 5. 建立新值和旧值的映射
  map.set(originValue, newObj);

  // 6. 递归，进行深拷贝
  // 遍历key，数组就是index。
  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key], map);
  }

  return newObj;
}
