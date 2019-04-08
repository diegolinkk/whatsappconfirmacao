//carregando dados das unidades
var selectUnidade = document.querySelector("#selectUnidades");
carregarDadosUnidade(selectUnidade.value);

selectUnidade.addEventListener("change",function(){
	//quando muda unidade, recarrega os dados da unidade
	carregarDadosUnidade(this.value);
});

var formulario = document.querySelector("#formulario");
var enviar = formulario.querySelector("#enviar");

enviar.addEventListener("click",enviarDados); //evento de enviar dados

function enviarDados(){
	event.preventDefault(); //parando o enviar padrão do form
	var medico = formulario.querySelector("#medicos").value; //funcionando
	var data = formatarData(formulario.querySelector("#data").value); //deixa data correta - funcionando
	var hora = formulario.querySelector("#hora").value;
	var tipoDeAtendimento = formulario.querySelector("#tipoDeAtendimento").value;
	var nomedoPaciente = formulario.querySelector("#nomePaciente").value;
	var telefonePaciente = "phone=5511" + formulario.querySelector("#telefonePaciente").value;
	var url = "https://web.whatsapp.com//send?";

	//composição da mensagem de envio
	// var msg1 = "&text=Confirmação de agendamento dia " + data;
	// var msg2 = " as " + hora;
	// var msg3 = " horas com " + medico;
	// var msg4 = " na Alergo Dermatologia unidade " + nomeUnidade;
	// var msg5 = " no endereço " + enderecoUnidade;
	// var msg6 = ". Para mais informações, ligue: " + telUnidade;
	// var mensagem = msg1 +  msg2 + msg3  + msg4  + msg5 + msg6;

	//mensagem 2.0 (a acima está funcionando)
	//%0A = nova linha;

	var msgOla = "&text=Olá, %0A";
	var msgTipoDeAtendimento = "Estamos confirmando " + tipoDeAtendimento;
	var msgNomeDoPaciente = " de " + nomedoPaciente;
	var msgMedico = " com o(a) " + "*" + medico + "*"; //verificar os atendimentos e fazer uma list
	var msgDia = " dia " + "*" + data + "*";
	var msgHora = " às " + "*" + hora + "*";
	var msgUnidade = " na unidade da Alergo Dermatologia " + "*" + nomeUnidade + "*" +".%0A";
	var msgEndereco = "Endereço de atendimento:%0A" + "*" + enderecoUnidade  + referenciaUnidade + "*";
	var msgOrientacoes1 = "%0A !!! Importante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
	var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
	var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";
	var msgOrientacoes4 = "✔ Este serviço está disponível apenas para confirmações. Agendamentos ou maiores informações ligue: " + telUnidade;

	
	var mensagem = msgOla + msgTipoDeAtendimento + msgNomeDoPaciente+ msgMedico + msgDia + msgHora + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3 + msgOrientacoes4;
	window.open( url + telefonePaciente + mensagem);
}
function formatarData(data){
	//funcionando
	//recebe 2019-08-30 e retorna 30/08/2019
	var ano = data.substring(0,4);
	var mes = data.substring(5,7);
	var dia = data.substring(8,10);
	var dataFormatada = dia + "/" + mes + "/" + ano;
	return dataFormatada;
}

