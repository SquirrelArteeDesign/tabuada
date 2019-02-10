function verificar(){
	let n1 = parseInt(document.getElementById('n1').innerHTML);
	let n2 = parseInt(document.getElementById('n2').innerHTML);
	let n3 = parseInt(document.getElementById('n3').value);
	
	if((n1 * n2) == n3){
		let texto = 'Parabéns você Acertou !';
		document.getElementById('resultado').innerHTML = texto;
	}else{
		let texto = 'Continue praticando !';
		document.getElementById('resultado').innerHTML = texto;
	}
	
	resetar();
}

function resetar(){
	document.getElementById('n3').value = "";
	
	let r1 = Math.floor(Math.random() * 10);
	let r2 = Math.ceil(Math.random() * 10);
	
	document.getElementById('n1').innerHTML = r1;
	document.getElementById('n2').innerHTML = r2;
}