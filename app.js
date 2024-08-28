function encriptarTexto(texto) {
	let textoEncriptado = '';
	for (let i = 0; i < texto.length; i++) {
		textoEncriptado += String.fromCharCode(texto.charCodeAt(i) + 3); // Ejemplo: sumar 3
	}
	return textoEncriptado;
}

function desencriptarTexto(texto) {
	let textoDesencriptado = '';
	for (let i = 0; i < texto.length; i++) {
		textoDesencriptado += String.fromCharCode(texto.charCodeAt(i) - 3); // Ejemplo: restar 3
	}
	return textoDesencriptado;
}