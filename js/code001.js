var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n');

let Ax_isSum = lines.shift();
let ct_num = 0;
let ct_acum = 0;
let ct_count = 0;
let i = 0;
let ct_resp = 0;

for ( var x = 0 ; x < 12 ; x++ ) {
  
  for ( var y = 0; y < 12 ; y++   ) {

    ct_num = parseFloat(lines.shift());
    
    ct_acum = ct_acum + ct_num;
    ct_count++;
  }
}
    
if ( Ax_isSum != "S"  ) {
        ct_resp = ct_acum / ct_count;
    }
    else {
      ct_resp = ct_acum;
}

console.log( ct_resp );