let Ct_Kms = parseInt(gets());
let Ct_gas = parseFloat(gets());
let Ct_Consumo = (Ct_Kms / Ct_gas);

console.log(Ct_Consumo.toFixed(3) + " km/l");