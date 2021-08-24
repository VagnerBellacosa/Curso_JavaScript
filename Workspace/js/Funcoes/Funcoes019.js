var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // Um código que não queremos que pessoas de fora sejam capazes de modificar

  return function () {
    return secureCode;
  };
})();

getCode();    // Retorna o secureCode

console.log(getCode());