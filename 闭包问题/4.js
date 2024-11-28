var arr = [];
for (let i = 0; i < 10; i++) {
  function foo() {
    var j = i;
    arr[j] = function () {
      console.log(j);
    };
  }
  foo();
}

arr.forEach((item) => {
  item();
});
