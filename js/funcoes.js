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

function pegarDadosFormulario(){
	var medico = formulario.querySelector("#medicos").value;
	var data = formatarData(formulario.querySelector("#data").value);
	var hora = formulario.querySelector("#hora").value;
	var data2 = formatarData(formulario.querySelector("#data2").value); 
	var hora2 = formulario.querySelector("#hora2").value;
	var data3 = formatarData(formulario.querySelector("#data3").value);
	var hora3 = formulario.querySelector("#hora3").value;
	var tipoDeAtendimento = formulario.querySelector("#tipoDeAtendimento").value;
	var nomedoPaciente = formulario.querySelector("#nomePaciente").value;
	var telefonePaciente = formulario.querySelector("#telefonePaciente").value;
	
	if(telefonePaciente.length <= 10){//validando se tem prefixo ou não
		var telefonePaciente = "5511" + telefonePaciente;
	}else{
		var telefonePaciente = "55" + telefonePaciente;
	}
	return{
		medico: medico,
		data: data,
		hora: hora,
		data2: data2,
		hora2: hora2,
		data3: data3,
		tipoDeAtendimento: tipoDeAtendimento,
		nomedoPaciente: nomedoPaciente,
		telefonePaciente: telefonePaciente
	}
}

function montarMensagem(dadosFormulario){ //monta a mensagem e retorna a mensagem
	if(dadosFormulario.tipoDeAtendimento == "o teste de contato"){
		var inicioTexto =  "&text=";
		var msgOla = "Olá, estamos confirmando o  *teste*";
		var msgNomeDoPaciente = " de " + txtNegrito(dadosFormulario.nomedoPaciente);
		var msgTipoDeAtendimento = " para:";
		var msgDiaHora1 = "%0A"+txtNegrito(dadosFormulario.data)+ " às " + txtNegrito(dadosFormulario.hora);
		var msgDiaHora2 = "%0A" + txtNegrito(dadosFormulario.data2) + " às " + txtNegrito(dadosFormulario.hora2);
		var msgDiaHora3 = "%0A" + txtNegrito(dadosFormulario.data3) + " às " + txtNegrito(dadosFormulario.hora3);
		var msgUnidade = "%0ANa unidade  " + txtNegrito(nomeUnidade) +".%0A";
		var msgEndereco = "Endereço de atendimento:%0A" + txtNegrito(enderecoUnidade) + txtNegrito(referenciaUnidade);
		var msgOrientacoes1 = "%0A !!! Importante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
		var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
		var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";
		var msgOrientacoes4 = "✔ Para realização do exame é necessário seguir as orientações passadas previamente. A validade do pedido médico é de 90 dias.%0A";
		var msgOrientacoes5 = "✔ Caso não possa comparecer, avise-nos por gentileza. O não comparecimento no primeiro dia agendado cancela automaticamente as demais datas.%0A";
		var mensagem = inicioTexto + msgOla + msgNomeDoPaciente + msgTipoDeAtendimento + msgDiaHora1 + msgDiaHora2 + msgDiaHora3 + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3 + msgOrientacoes4 + msgOrientacoes5;
		
	}else if (dadosFormulario.tipoDeAtendimento == "o teste"){
		var inicioTexto = "&text=";
		var msgOla = "Olá, %0A";
		var msgTipoDeAtendimento = "Estamos confirmando " + dadosFormulario.tipoDeAtendimento;
		var msgNomeDoPaciente = " de " + dadosFormulario.nomedoPaciente;
		var msgMedico = " com o(a) " + "*" + dadosFormulario.medico + "*";
		var msgDia = " dia " + "*" + dadosFormulario.data + "*";
		var msgHora = " às " + "*" + dadosFormulario.hora + "*";
		var msgUnidade = " na unidade " + "*" + nomeUnidade + "*" +".%0A";
		var msgEndereco = "Endereço de atendimento:%0A" + "*" + enderecoUnidade  + referenciaUnidade + "*";
		var msgOrientacoes1 = "%0A !!! Importante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
		var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
		var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";
		var msgOrientacoes4 = "✔ Para realização do exames é necessário seguir as orientações passadas previamente.%0A";
		var msgOrientacoes5 = "✔ A validade do pedido médico é de 90 dias.%0A";

		var mensagem = inicioTexto+ msgOla + msgTipoDeAtendimento + msgNomeDoPaciente + msgMedico+ msgDia + msgHora + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3 + msgOrientacoes4+ msgOrientacoes5;
		
	}else{//outras mensagens
		var inicioTexto = "&text=";
		var msgOla = "Olá, %0A";
		var msgTipoDeAtendimento = "Estamos confirmando " + dadosFormulario.tipoDeAtendimento;
		var msgNomeDoPaciente = " de " + dadosFormulario.nomedoPaciente;
		var msgMedico = " com o(a) " + "*" + dadosFormulario.medico + "*"; //verificar os atendimentos e fazer uma list
		var msgDia = " dia " + "*" + dadosFormulario.data + "*";
		var msgHora = " às " + "*" + dadosFormulario.hora + "*";
		var msgUnidade = " na unidade " + "*" + nomeUnidade + "*" +".%0A";
		var msgEndereco = "Endereço de atendimento:%0A" + "*" + enderecoUnidade  + referenciaUnidade + "*";
		var msgOrientacoes1 = "%0A !!! Importante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
		var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
		var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";

		var mensagem = inicioTexto+ msgOla + msgTipoDeAtendimento + msgNomeDoPaciente+ msgMedico + msgDia + msgHora + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3;
	}
	
	//personaliza mensagem se unidade agenda ou não
	if(nomeUnidade == "Tatuapé" || nomeUnidade == "São Caetano" || nomeUnidade == "Santo André"|| nomeUnidade == "Santo Amaro"){
		mensagem +="✔ Este serviço está disponível apenas para confirmações";
		mensagem +="%0AAgendamentos ou maiores informações ligue: " + telUnidade;
	}else{
		mensagem +="%0AMaiores informações ligue: " + telUnidade;
	}
	
	mensagem+="%0AAlergo Dermatologia%0AUnidade " + nomeUnidade;
	return mensagem;
}