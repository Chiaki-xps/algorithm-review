function bar() {
  var myName = 'Tom';
  let test1 = 100;
  if (1) {
    let myName = 'Jerry';
    console.log(test, myName);
  }
}

function foo() {
  var myName = '彭于晏';
  let test = 2;
  {
    let test = 3;
    bar();
  }
}
var myName = '晟哥';
let test = 1;
foo();
