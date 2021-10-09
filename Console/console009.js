foo();

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}