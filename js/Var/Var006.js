
// Unqualified identifier assignments
// The global object sits at the top of the scope chain. When attempting to resolve a name to a value,
// the scope chain is searched. This means that properties on the global object are conveniently 
// visible from every scope, without having to qualify the names with globalThis. or window. 
// or global..

// So you can just type:

function foo() {
  String('s') // Note the function `String` is implicitly visible
}