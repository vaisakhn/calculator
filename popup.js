
// var app = chrome.runtime.getBackgroundPage();

function hello() {
  document.getElementById('exp').value += this.id;
}
function expeval() {
	var a = 0;
	try{
		a = eval(document.getElementById('exp').value);
		 alert(" The Output is "+ a);
		 document.getElementById('exp').value = a;
	}
	catch(ex){
		alert(ex.message);
	}

	
}
function clear() {
	document.getElementById('exp').value = '';
}


document.getElementById('1').addEventListener('click', hello);
document.getElementById('2').addEventListener('click', hello);
document.getElementById('3').addEventListener('click', hello);
document.getElementById('4').addEventListener('click', hello);
document.getElementById('5').addEventListener('click', hello);
document.getElementById('6').addEventListener('click', hello);
document.getElementById('7').addEventListener('click', hello);
document.getElementById('8').addEventListener('click', hello);
document.getElementById('9').addEventListener('click', hello);
document.getElementById('0').addEventListener('click', hello);
document.getElementById('.').addEventListener('click', hello);
document.getElementById('+').addEventListener('click', hello);
document.getElementById('-').addEventListener('click', hello);
document.getElementById('%').addEventListener('click', hello);
document.getElementById('*').addEventListener('click', hello);
document.getElementById('/').addEventListener('click', hello);
document.getElementById('=').addEventListener('click', expeval);
document.getElementById('C').addEventListener('click', clear);
