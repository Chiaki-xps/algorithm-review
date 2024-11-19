/* 
冒泡排序:
思路就是把最大的值从左往右比较，一直找到最大的然后冒出
最外出层用来收敛，已经冒泡成功的不需要再参与进来比较
*/
function bubbleSort(nums) {
  // 外循环：未排序区间为 [0, i]
  for (let i = nums.length - 1; i > 0; i--) {
    // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        // 交换 nums[j] 与 nums[j + 1]
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }
}

// 写法二：
function bubbleSort2(nums) {
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
}
