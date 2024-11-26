/*
选择排序:
找出最小的，和最前面未排序的进行互换为位置
*/
function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    // k 标记最小的位置
    let k = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[k]) {
        k = j;
      }
    }

    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
}

let arr = [1, 44, 155, 13, 89, 15, 46, 23, 456, 78];
selectionSort(arr);
console.log("🚀 ~ arr:", arr);
