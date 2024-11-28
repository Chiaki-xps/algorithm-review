var count = 0;
function add() {
  var count = 0;
  function foo() {
    count++;
    return count;
  }
  return foo;
}
var bar = add();
console.log(bar());
console.log(bar());
console.log(bar());
