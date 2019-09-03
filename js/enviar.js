var formulario = document.querySelector("#formulario");
var enviar = formulario.querySelector("#enviar");
var enviar_mobile = formulario.querySelector("#enviar_mobile");

enviar.addEventListener("click",function(){
	event.preventDefault(); //parando o enviar padrão do form
	dadosFormulario = pegarDadosFormulario();
	var mensagem = montarMensagem(dadosFormulario,dadosUnidade);

	var url = "https://web.whatsapp.com/send?";
	var urlTelefone ="phone=";
	window.open( url + urlTelefone + dadosFormulario.telefonePaciente + mensagem);
	//console.log(url,urlTelefone,dadosFormulario.telefonePaciente,mensagem);
});

enviar_mobile.addEventListener("click",function(){
	event.preventDefault(); //parando o enviar padrão do form
	dadosFormulario = pegarDadosFormulario();
	var mensagem = montarMensagem(dadosFormulario,dadosUnidade);

	var url = "https://api.whatsapp.com/send?";
	var urlTelefone ="phone=";
	window.open( url + urlTelefone + dadosFormulario.telefonePaciente + mensagem);
	//console.log(url,urlTelefone,dadosFormulario.telefonePaciente,mensagem);
});
