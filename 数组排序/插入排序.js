/*
插入排序:
在一个数组拿出一个值作为基准base，然后从未排序的数组里依次到排序的数组中比较，找到正确的位置插入就行。
*/
function insertionSort(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    let base = nums[i];
    let j = i - 1;

    while (nums[j] > base && j >= 0) {
      // 往后挪动一位
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = base;
  }
}

const a = [45, 12, 36, 15, 77, 252, 95, 12, 41];
insertionSort(a);
console.log("🚀 ~ testAlgorithm ~ a:", a);
