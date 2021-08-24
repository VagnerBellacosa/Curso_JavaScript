//const NotaCalc = gets();

const NotaCalc = [ -3.5 , 3.5 , 11.0 , 10.0 , 4 ,  1 , 8.0 , 9.0 , 2 , 2];

//const NotaCalc = gets();

let getout = false;
let validResponse = true;
let numA = null;
let numB = null;

// calcula a media
while ( validResponse  ) {
  
  // obtem a nota
  const num = Number(NotaCalc.shift());
  
  console.log( num );
  
  if ( num < 0  ) {
    console.log("nota invalida");
    continue;
  }

  if ( numA == null ) {
    numA = num;
    continue;
  } else  { 
    numB = num;
  }   

  const average = ( numA + numB )  / 2 ;
    
  numA = null;
  numB = null;
  
  console.log("media = " + average.toFixed(2));

  let response = null;
  getout = false;
		  
  while ( getout == false ) {
    console.log( "novo calculo (1-sim 2-nao)"  );

    response = Number(NotaCalc.shift());

    switch (response) {
      case 1:
        validResponse = true;
        getout = true;	
        continue;		
      case 2:
        validResponse = false;
        getout = true;	
        break;
    }
  } 
}