import './style.css'

const boton = document.getElementById('boton');

boton.addEventListener('click', function(){
	const texto = document.getElementById('texto').value;
	//alert(texto);
	boton.textContent = "pensando..."

	var myHeaders = new Headers();

	myHeaders.append('Authorization', 'Bearer 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');
	myHeaders.append('Content-Type', 'application/json');

	var raw = JSON.stringify({
		"model": "text-davinci-003",
		"prompt": texto,
		"temperature": 0,
		"max_tokens": 1000
	});

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
	};

	fetch("https://api.openai.com/v1/completions", requestOptions).then(
		response => response.json()
	).then(
		result =>{
			const respuesta = document.getElementById("respuesta");
			respuesta.textContent = result.choices[0].text;
			boton.textContent = "Enviar otra pregunta"
		}
	).catch(error => console.log('error', error));

});

