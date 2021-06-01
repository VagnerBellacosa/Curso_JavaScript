// Consumo Médio do Automóvel

// declaraçao de variaveis
let Ct_Kms = parseInt(gets());
let Ct_gas = parseFloat(gets());

// calculo do consumo
let Ct_Consumo = (Ct_Kms / Ct_gas);

// lista o consumo obtido
console.log(Ct_Consumo.toFixed(3) + " km/l");