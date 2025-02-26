/**
 * 快速排序的思路
 * 1. 选择一个基准数
 * 2. 将比基准数小的数放在基准数的左边，比基准数大的数放在基准数的右边
 * 3. 对左右两个小数列重复第二步，直至各区间只有一个数
 */
/* 元素交换 */
function swap(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function partition(nums, left, right) {
  // 以 nums[left] 为基准数
  let i = left,
    j = right;
  while (i < j) {
    while (i < j && nums[j] >= nums[left]) {
      j -= 1; // 从右向左找首个小于基准数的元素
    }
    while (i < j && nums[i] <= nums[left]) {
      i += 1; // 从左向右找首个大于基准数的元素
    }
    // 元素交换
    this.swap(nums, i, j); // 交换这两个元素
  }
  this.swap(nums, i, left); // 将基准数交换至两子数组的分界线
  return i; // 返回基准数的索引
}
