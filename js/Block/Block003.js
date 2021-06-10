// O mesmo true de const:

const c = 1;
{
  const c = 2;
}

console.log(c); // imprime 1 e não invoca uma throw SyntaxError...