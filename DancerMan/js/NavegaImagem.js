const twSpriteStyle = document.querySelector('#tw-sprite-style'),
	mainSprite = document.querySelector('#main-sprite'),
	inputRangew = document.querySelector('#input-range-w'),
  inputRangeh = document.querySelector('#input-range-h'),
  inputRangex = document.querySelector('#input-range-x'),
  inputRangey = document.querySelector('#input-range-y');

let height = 50,
	width = 50,
  x = 0;
  y = 0;
  
inputRangew.addEventListener('input', (event) => {
	width = inputRangew.value;
  setStyle();
})

inputRangeh.addEventListener('input', (event) => {
	height = inputRangeh.value;
  setStyle();
})

inputRangex.addEventListener('input', (event) => {
	x = inputRangex.value;
  setStyle();
})

inputRangey.addEventListener('input', (event) => {
	y = inputRangey.value;
  setStyle();
})

function setStyle(){
	twSpriteStyle.innerText = `
.tw-sprite-github{
	width: ${width}px;
  	height: ${height}px;
    	background-position: ${x}px ${y}px;
}`;
}

setStyle();