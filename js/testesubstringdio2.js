// let size = gets();
// let line = gets();

let size = "abcdef";
let line = "cdofhij";

 size = "Vagner";
 line = "Vagner";

 size = "Vagner";
 line = "";

 size = "";
 line = "Vagner";

 size = "A";
 line = " ";

 size = "A";
 line = "a";

 size = " ";
 line = "A";

 size = "A";
 line = "A";

 size = "9";
 line = "A";


// size = "TWO";
// line = "FOUR";

// size = "abracadabra";
// line = "open";

// size = "Hey This java is hot";
// line = "Java is a new paradigm";

    let Ct_Compare = 0;
    
    const regex = /^(?!.*[!_@#$%¨&*\d\r\t\v\n]).{1,50}$/;

// continnua enquanto as palavras forem validas.
while (true) {

    if ( size.length == 0 || line.length == 0) break ;

    let x = 0;
    let Ct_Equal = 0;
    Ct_Compare = 0;
    
    if ( !(regex.test(line)) || !(regex.test(size)))  break;

    for (i = 0; i < size.length; i++) {

        let alfa = size.substr(i,1)

        console.log( "*** i " + i + " " + alfa );

        for (j = x; j < line.length; j++) {

            let beta =   line.substr(j,1)
            console.log(" x " + x + alfa +  " j " + j + " " + beta );

            if ( alfa == beta ) {
               Ct_Equal++;
               if (Ct_Compare < Ct_Equal) { Ct_Compare = Ct_Equal;}
               console.log("     Achei " + Ct_Equal );
               x = j + 1 ;
               break;
            } else {
              Ct_Equal = 0;
              x = 0;
             }            
      }

   }

 console.log(Ct_Compare);
 break;

// size = gets();
// line = gets();

}  

