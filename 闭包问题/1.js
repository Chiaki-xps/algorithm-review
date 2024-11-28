var arr = [];
// 1.
for (var i = 0; i < 3; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

arr.forEach(function (item) {
  item();
});

// 2.
var arr = [];
// let 每次循环回创建一个块级作用域
for (let i = 0; i < 3; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

arr.forEach(function (item) {
  item();
});
