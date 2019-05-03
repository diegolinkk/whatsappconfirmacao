var formulario = document.querySelector("#formulario");
var enviar = formulario.querySelector("#enviar");

enviar.addEventListener("click",function(){
	event.preventDefault(); //parando o enviar padrão do form
	dadosFormulario = pegarDadosFormulario();
	var mensagem = montarMensagem(dadosFormulario,dadosUnidade);

	var url = "https://web.whatsapp.com//send?";
	var urlTelefone ="phone=";
	window.open( url + urlTelefone + dadosFormulario.telefonePaciente + mensagem);
});
