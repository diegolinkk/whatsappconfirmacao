//carregando dados das unidades
var selectUnidade = document.querySelector("#selectUnidades");
var selectTipoDeAtendimento = document.querySelector("#tipoDeAtendimento");

//se recarregar a página, mantém a integridade dos dados do formulário
	carregarDadosUnidade(selectUnidade.value);
	if(selectTipoDeAtendimento.value == "o teste de contato"){
		mostraDataTC();
	}else{
		escondeDataTC();
	}
selectTipoDeAtendimento.addEventListener("change", function(){

	if(this.value == "o teste de contato"){
		mostraDataTC();
	}else{
		escondeDataTC();
	}
});

selectUnidade.addEventListener("change",function(){
	//quando muda unidade, recarrega os dados da unidade
	carregarDadosUnidade(this.value);
});


var formulario = document.querySelector("#formulario");
var enviar = formulario.querySelector("#enviar");

enviar.addEventListener("click",function(){
	var tipoDeAtendimento = formulario.querySelector("#tipoDeAtendimento").value;
	enviarDados(tipoDeAtendimento); //evento de enviar dados
});

function enviarDados(atendimento){
	//definindo as variáveis
	event.preventDefault(); //parando o enviar padrão do form
	var medico = formulario.querySelector("#medicos").value; //funcionando
	var data = formatarData(formulario.querySelector("#data").value); //deixa data correta - funcionando
	var hora = formulario.querySelector("#hora").value;
	//data e hora do TC (caso existir)
	var data2 = formatarData(formulario.querySelector("#data").value); //deixa data correta - funcionando
	var hora2 = formulario.querySelector("#hora").value;
	var data3 = formatarData(formulario.querySelector("#data").value); //deixa data correta - funcionando
	var hora3 = formulario.querySelector("#hora").value;
	
	var tipoDeAtendimento = formulario.querySelector("#tipoDeAtendimento").value;
	var nomedoPaciente = formulario.querySelector("#nomePaciente").value;
	var telefonePaciente = "phone=5511" + formulario.querySelector("#telefonePaciente").value;
	var url = "https://web.whatsapp.com//send?";

	if(atendimento != "o teste de contato"){
		//criando a msg de consulta ou procedimento
		var inicioTexto = "&text=";
		var msgOla = "Olá, %0A";
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

		var mensagem = inicioTexto+ msgOla + msgTipoDeAtendimento + msgNomeDoPaciente+ msgMedico + msgDia + msgHora + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3;
	}
	else{
		var inicioTexto =  "&text=";
		var msgOla = "Olá, estamos confirmando o  agendamento ";
		var msgNomeDoPaciente = " de " + txtNegrito(nomedoPaciente);
		var msgTipoDeAtendimento = " para " + txtNegrito(tipoDeAtendimento);
		var msgDiaHora1 = " nos dias "+txtNegrito(data)+ " às " + txtNegrito(hora);
		var msgDiaHora2 = ", retorno para dia " + txtNegrito(data2) + " às " + txtNegrito(hora2);
		var msgDiaHora3 = " e atendimento com o médico dia " + txtNegrito(data3) + " às " + txtNegrito(hora3);
		var msgUnidade = " na unidade da Alergo Dermatologia " + txtNegrito(nomeUnidade) +".%0A";
		var msgEndereco = "Endereço de atendimento:%0A" + txtNegrito(enderecoUnidade) + txtNegrito(referenciaUnidade);
		var msgOrientacoes1 = "%0A !!! Importante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
		var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
		var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";
		
		var mensagem = inicioTexto + msgOla + msgNomeDoPaciente + msgTipoDeAtendimento + msgDiaHora1 + msgDiaHora2 + msgDiaHora3 + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3;
	}
	
	//se não agendar, inclui o aviso que não agenda
if(nomeUnidade == "Tatuapé" || nomeUnidade == "Santa Cruz" || nomeUnidade == "São Caetano" || nomeUnidade == "Santo André"|| nomeUnidade == "Santo Amaro"){
		mensagem +="✔ Este serviço está disponível apenas para confirmações";
	}
	
	mensagem +="%0AAgendamentos ou maiores informações ligue: " + telUnidade;
	window.open( url + telefonePaciente + mensagem);
}
function formatarData(data){
	//recebe 2019-08-30 e retorna 30/08/2019
	var ano = data.substring(0,4);
	var mes = data.substring(5,7);
	var dia = data.substring(8,10);
	var dataFormatada = dia + "/" + mes + "/" + ano;
	return dataFormatada;
}

function mostraDataTC(){
	var spanTC = document.querySelector("#spanTesteDeContato");
	spanTC.classList.remove("escondido");
}
function escondeDataTC(){
	var spanTC = document.querySelector("#spanTesteDeContato");
	spanTC.classList.add("escondido");
}
function txtNegrito(texto){
	return "*" + texto + "*";
}