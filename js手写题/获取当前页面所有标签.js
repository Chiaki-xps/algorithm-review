/**
 * 获取当前页面所有标签
 * 1. 获取所有标签
 * 2. * 通配符
 * 3. 数据是一个集合类型，对于一些数组的操作方法不支持，可以考虑转数组
 */
function getAllTags() {
  const allTags = document.querySelectorAll("*");
  let arr = [];
  allTags.forEach((item) => arr.push(item.tagName));
  return [...new Set(arr)];
}
console.log(getAllTags());

/**
 * NodeList 和 HTMLCollection 区别？
 * 1. 两者都是类数组对象
 * 2. NodeList` 可以包含**任何类型的节点**（元素节点、文本节点、注释节点等）
 * 3. `HTMLCollection` 仅包含**元素节点**（Element nodes）。
 * 4. `HTMLCollection` 是**实时（live）**的集合。这意味着当底层文档结构发生变化时（例如添加或删除了元素），集合会自动更新以反映这些变化。
 * 5. `NodeList` 可以是**静态的（static）**也可以是**实时的（live）**。
 * 6. 通过 `querySelectorAll` 返回的 `NodeList` 是**静态的**，不会随文档变化而更新。(捕获调用时的 DOM 快照（querySelectorAll 返回的）：)
 * 7. 而通过 `childNodes` 属性得到的 `NodeList` 是**实时的**。
 * 8. NodeList 支持现代遍历方法,forEach (map不支持)
 * 9. HTMLCollection 需先转换才能用数组方法
 * 10. HTMLCollection 实时性代价,每次访问 length 或成员都会重新查询 DOM，避免在循环中重复访问
 * 11. NodeList 更适合复杂操作,静态特性使其在批量操作时更安全
 * 12. `HTMLCollection` 支持通过元素的 `id` 或 `name` 属性来访问（使用 `namedItem` 方法或直接使用属性名）。(HTMLCollection.namedItem('id') / HTMLCollection.id)
 * 13. `NodeList` 不支持通过 `id` 或 `name` 访问，只能通过索引或 `item` 方法。(NodeList[0] / NodeList.item(0))
 */

/**
 * document.querySelectorAll 和 document.getElementsByTagName 的区别
 * document.querySelectorAll 支持css选择器
 * getElementsByTagName 只支持标签名
 */
