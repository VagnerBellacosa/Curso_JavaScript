// Usando for sem uma declaração 
// O ciclo for a seguir calcula a posição de deslocamento de um nó na seção [expressão final] e,
//  portanto, não requer o uso de uma declaração ou de um bloco de declaração, e no seu lugar
// é usado um ponto-vírgula - ;.


function showOffsetPos (sId) {
    var nLeft = 0, nTop = 0;
  
    for (var oItNode = document.getElementById(sId); // inicialização
         oItNode; // condition
         nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // expressão final
         /* empty statement */ ;
  
    console.log("Offset position of \"" + sId + "\" element:\n left: " + nLeft + "px;\n top: " + nTop + "px;");
  }
  
  // Exemplo de call:
  
  showOffsetPos("content");
  
  // Resultado:
  // "Offset position of "content" element:
  // left: 0px;
  // top: 153px;"