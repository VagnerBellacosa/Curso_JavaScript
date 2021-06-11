var line = gets().split(" ");
var Ct_CasosDeTeste = parseInt(line[0]);

var arr_Alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

let a = 0 ;
let Ct_Letra = 0;
var x = 0;
var y=1 ;

while ( a < Ct_CasosDeTeste ) {

   var n = 0 ;
   var Ct_Hash = 0; 
   
   var line2 = gets().split(" ");
   var Ct_Linhas = parseInt(line2[0]);

   while ( n < Ct_Linhas ) {
  
     let line3 = gets().split(" ");

// cria arrays com os valores input
     let Ax_Texto =  line3[0].split( "" );

//     for ( x=0 ; x < Ax_Texto.length ; x++ );  {

     for( x in Ax_Texto) {
  
//       Ct_Letra = Ax_Texto[x];
       
// console.log( Ax_Texto[x]) ;

       for ( y in arr_Alfabeto ) {

 // console.log( arr_Alfabeto[y] ) ;
    
    
         if ( Ax_Texto[x] == arr_Alfabeto[y] ) {
//        console.log( Ct_Hash, x, y, n ) ;       
//        console.log( Ax_Texto[x] + " = " +  arr_Alfabeto[y] );
//         console.log( Ct_Hash );
           
           Ct_Hash += parseInt(x) + parseInt(y) + parseInt(n)  ;
//           break;
          }
       }
     }

// formata output

     n++; 

  }  

  a++;

}

console.log( Ct_Hash);
// console.log( "Fim");

