// https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：第一次做，拿到这题第一反应就是冒泡，就把所有0冒泡到最最后面
 */
{
  var moveZeroes = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (nums[j] === 0) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }
  };
}

/**
 * 思路：利用快慢指针
 * 1. 快指针用来遍历整个数组
 * 2. 慢指针表示前面已经是处理过的数据
 * 3. 当快指针遇到非0的时候，说明要慢指针交换位置，这样使得慢指针前面的数据都是非0。
 * 4. 这样就形成了在慢指针前面的都是非0，而快指针和慢指针区间内都是0
 */
{
  var moveZeroes = function (nums) {
    // 1. 初始化一个慢指针
    let j = 0;
    // 需要从0开始.第0个不为0，i、j一起向前移动
    for (let i = 0; i < nums.length; i++) {
      // 3. 不为0都挪动
      if (nums[i] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
      }
    }
  };
}
