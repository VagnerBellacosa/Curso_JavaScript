let Ct_Par = 0 ;
let Ct_Impar = 0 ;
let Ct_Positivo = 0 ;
let Ct_Negativo = 0;
var Fl_Stop = true;

while (Fl_Stop) {
  
  let valor1 = parseInt(gets(),10) ;
  let Ct_ParFlag = valor1 / 2 ;
  
  if (  (valor1 == null ) || (isNaN(valor1))  ) {
           Fl_Stop = false ;
        }
  else  { 
  // calcula numeros positivos e negativos  
       if (  valor1 > 0 ) {
           Ct_Positivo ++ ;
          }        
       else {
              if (  valor1 < 0 ) {
                Ct_Negativo ++ ;
              }
       }
               
  // verifica pares ou impares      
        
       if (Number.isInteger(Ct_ParFlag) || (valor1 == 0) ){
           Ct_Par ++;
          }
       else {
           Ct_Impar ++;
       }                
    }         
}

  console.log(Ct_Par + " valor(es) par(es)");
  console.log(Ct_Impar + " valor(es) impar(es)");
  console.log(Ct_Positivo + " valor(es) positivo(s)");
  console.log(Ct_Negativo + " valor(es) negativo(s)");  
  