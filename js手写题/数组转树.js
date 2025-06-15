//实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
//以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
// 现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
// 原始 list 如下
let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];
// 转换后的结果如下
let needResult = [
  {
    id: 1,
    name: "部门A",
    parentId: 0,
    children: [
      {
        id: 3,
        name: "部门C",
        parentId: 1,
        children: [
          {
            id: 6,
            name: "部门F",
            parentId: 3,
          },
          {
            id: 16,
            name: "部门L",
            parentId: 3,
          },
        ],
      },
      {
        id: 4,
        name: "部门D",
        parentId: 1,
        children: [
          {
            id: 8,
            name: "部门H",
            parentId: 4,
          },
        ],
      },
    ],
  },
  {
    // id 2 的
  },
  // ···
];

/**
 * 思路：
 * 1. 建立映射，[parentId, 收集相同parentId的节点,值为数组]，id和节点一一对应
 */
function convert(list) {
  // 存储id到节点的映射
  const idMap = new Map();
  // 存储parentId到子节点列表的映射
  const parentMap = new Map();

  // 第一次遍历，填充idMap和parentMap
  for (const item of list) {
    const node = { ...item, children: [] };
    idMap.set(item.id, node);
    const parentId = item.parentId;
    if (!parentMap.has(parentId)) {
      parentMap.set(parentId, []);
    }
    parentMap.get(parentId).push(node);
  }

  // 第二次遍历，设置每个节点的children
  for (const item of list) {
    const node = idMap.get(item.id);
    node.children = parentMap.get(node.id) || [];
  }

  // 返回所有根节点（parentId为0的子节点列表）
  return parentMap.get(0) || [];
}
console.log(JSON.stringify(convert(list)));
