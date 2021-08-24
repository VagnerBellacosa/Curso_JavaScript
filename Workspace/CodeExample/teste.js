const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const cases = Number(lines.shift());

for ( var x = 1; x < cases ; x++   ) {
  const str = lines.shift();

  const [r1, r2] = str.split(" ").map(str);

  const d = r1 * 2 + r2 * 2;
  const r =  d / 2 ;

  console.log(r);
}