
let valor = parseInt(gets());
let Ct_Nota_100 = 0 ;
let Ct_Nota_50 = 0 ;
let Ct_Nota_20 = 0 ;
let Ct_Nota_10 = 0 ;
let Ct_Nota_5 = 0 ;
let Ct_Nota_2 = 0 ;
let Ct_Nota_1 = 0 ;

while (valor > 0) {

  if ( valor >= 100) {
     valor = valor - 100;
     Ct_Nota_100 ++;  }
  else  {
     if (valor >= 50)   {
       valor = valor - 50;
       Ct_Nota_50 ++;}
     else {
       if (valor >= 20 ){
         valor = valor - 20;
         Ct_Nota_20 ++ ;}
       else {
          if ( valor >= 10 ){
             valor = valor - 10;
             Ct_Nota_10 ++ ;}  
             else {
               if (valor >= 5) {
                 valor = valor - 5;
                 Ct_Nota_5 ++ ; }
               else {     
                 if ( valor >= 2) {
                   valor = valor - 2;
                   Ct_Nota_2 ++ ;}
                 else {                
                   if (valor >= 1) {
                     valor = valor - 1;
                     Ct_Nota_1 ++ ;}
                    
                   }
                }
            }
        }
    }
}
}

console.log(valor );
console.log(Ct_Nota_100 + " nota(s) de R$ 100,00");
console.log(Ct_Nota_50 + " nota(s) de R$ 50,00");
console.log(Ct_Nota_20 + " nota(s) de R$ 20,00");
console.log(Ct_Nota_10 + " nota(s) de R$ 10,00");
console.log(Ct_Nota_5 + " nota(s) de R$ 5,00");
console.log(Ct_Nota_2 + " nota(s) de R$ 2,00");
console.log(Ct_Nota_1 + " nota(s) de R$ 1,00");