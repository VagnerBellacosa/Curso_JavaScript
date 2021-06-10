// So the global object will ultimately be searched for unqualified identifiers.
//  You don't have to type globalThis.String, you can just type the unqualified String.
//  The corollary, in non-strict mode, is that assignment to unqualified identifiers will,
//  if there is no variable of the same name declared in the scope chain, assume you want 
//  to create a property with that name on the global object.

foo = 'f' // In non-strict mode, assumes you want to create a property named `foo` on the global object
globalThis.hasOwnProperty('foo') // true