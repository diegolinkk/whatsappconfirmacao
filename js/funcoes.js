function formatarData(data){
	//recebe 2019-08-30 e retorna 30/08/2019
	var ano = data.substring(0,4);
	var mes = data.substring(5,7);
	var dia = data.substring(8,10);
	var dataFormatada = dia + "/" + mes + "/" + ano;
	
	//pegando dia da semana
	var numeroDaSemana = new Date(ano,mes -1,dia).getDay();//mes começa com 0 por isso menos 1 e essa propriedade retorna o dia da semana em numero
	var diaDaSemana = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
	return dataFormatada + "(" + diaDaSemana[numeroDaSemana] + ")";
}
function mostraDataTC(){
	var divTc = document.querySelector("#divTesteDeContato");
	divTc.classList.remove("d-none");
}
function escondeDataTC(){
	var divTc = document.querySelector("#divTesteDeContato");
	divTc.classList.add("d-none");
}
function txtNegrito(texto){
	return "*" + texto + "*";
}

function pegarDadosFormulario(){
	//captura dados do HTML e devolve um objeto com esses dados coletados
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
		hora3: hora3,
		tipoDeAtendimento: tipoDeAtendimento,
		nomedoPaciente: nomedoPaciente,
		telefonePaciente: telefonePaciente
	}
}

function montarMensagem(dadosFormulario,dadosUnidade){ //monta a mensagem e retorna a mensagem
	if(dadosFormulario.tipoDeAtendimento == "o teste de contato"){
		var inicioTexto =  "&text=";
		var msgOla = "Olá, poderiamos confirmar o  *teste*";
		var msgNomeDoPaciente = " de " + txtNegrito(dadosFormulario.nomedoPaciente);
		var msgTipoDeAtendimento = " para:";
		var msgDiaHora1 = "%0A"+txtNegrito(dadosFormulario.data)+ " às " + txtNegrito(dadosFormulario.hora);
		var msgDiaHora2 = "%0A" + txtNegrito(dadosFormulario.data2) + " às " + txtNegrito(dadosFormulario.hora2);
		var msgDiaHora3 = "%0A" + txtNegrito(dadosFormulario.data3) + " às " + txtNegrito(dadosFormulario.hora3);
		var msgUnidade = "%0ANa unidade  " + txtNegrito(dadosUnidade.nome) +"?%0A";
		var msgEndereco = "Endereço de atendimento:%0A" + txtNegrito(dadosUnidade.endereco) + txtNegrito(dadosUnidade.referencia);
		var msgOrientacoes1 = "%0AImportante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
		var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
		var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";
		var msgOrientacoes4 = "✔ Para realização do exame é necessário seguir as orientações passadas previamente. A validade do pedido médico é de 90 dias.%0A";
		var msgOrientacoes5 = "✔ Caso não possa comparecer, avise-nos por gentileza. O não comparecimento no primeiro dia agendado cancela automaticamente as demais datas.%0A";
		var mensagem = inicioTexto + msgOla + msgNomeDoPaciente + msgTipoDeAtendimento + msgDiaHora1 + msgDiaHora2 + msgDiaHora3 + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3 + msgOrientacoes4 + msgOrientacoes5;
		
	}else if (dadosFormulario.tipoDeAtendimento == "o teste"){
		var inicioTexto = "&text=";
		var msgOla = "Olá, %0A";
		var msgTipoDeAtendimento = "poderiamos confirmar " + dadosFormulario.tipoDeAtendimento;
		var msgNomeDoPaciente = " de " + dadosFormulario.nomedoPaciente;
		var msgMedico = " com o(a) " + "*" + dadosFormulario.medico + "*";
		var msgDia = " dia " + "*" + dadosFormulario.data + "*";
		var msgHora = " às " + "*" + dadosFormulario.hora + "*";
		var msgUnidade = " na unidade " + "*" + dadosUnidade.nome + "*" +"?%0A";
		var msgEndereco = "Endereço de atendimento:%0A" + "*" + dadosUnidade.endereco  + dadosUnidade.referencia + "*";
		var msgOrientacoes1 = "%0A  Importante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
		var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
		var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";
		var msgOrientacoes4 = "✔ Para realização do exames é necessário seguir as orientações passadas previamente.%0A";
		var msgOrientacoes5 = "✔ A validade do pedido médico é de 90 dias.%0A";

		var mensagem = inicioTexto+ msgOla + msgTipoDeAtendimento + msgNomeDoPaciente + msgMedico+ msgDia + msgHora + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3 + msgOrientacoes4+ msgOrientacoes5;
		
	}else{//outras mensagens
		var inicioTexto = "&text=";
		var msgOla = "Olá, %0A";
		var msgTipoDeAtendimento = "poderiamos confirmar " + dadosFormulario.tipoDeAtendimento;
		var msgNomeDoPaciente = " de " + dadosFormulario.nomedoPaciente;
		var msgMedico = " com o(a) " + "*" + dadosFormulario.medico + "*"; //verificar os atendimentos e fazer uma list
		var msgDia = " dia " + "*" + dadosFormulario.data + "*";
		var msgHora = " às " + "*" + dadosFormulario.hora + "*";
		var msgUnidade = " na unidade " + "*" + dadosUnidade.nome + "*" +"?%0A";
		var msgEndereco = "Endereço de atendimento:%0A" + "*" + dadosUnidade.endereco  + dadosUnidade.referencia + "*";
		var msgOrientacoes1 = "%0A  Importante: %0A✔ Chegar com 15 minutos de antecedência para o atendimento na recepção. %0A";
		var msgOrientacoes2 = "✔ No dia é obrigatório apresentar um documento com foto e carteirinha física ou digital do convênio.%0A";
		var msgOrientacoes3 = "✔ Caso não possa comparecer, avise-nos por gentileza.%0A";

		var mensagem = inicioTexto+ msgOla + msgTipoDeAtendimento + msgNomeDoPaciente+ msgMedico + msgDia + msgHora + msgUnidade + msgEndereco + msgOrientacoes1 + msgOrientacoes2 + msgOrientacoes3;
	}
	
	//personaliza mensagem se unidade agenda ou não
	if(dadosUnidade.fazAgendamentoPorWhatsapp){
		mensagem +="%0AMaiores informações ligue: " + dadosUnidade.telefone;
	}else{
		mensagem +="✔ Este serviço está disponível apenas para confirmações";
		mensagem +="%0A✔ Agendamentos ou maiores informações ligue: " + dadosUnidade.telefone;
		mensagem +="%0A✔ *Se possível, por favor responder esta mensagem*";
	}
	
	mensagem+="%0AAlergo Dermatologia%0AUnidade " + dadosUnidade.nome;
	return mensagem;
}
function carregarListaMedicos(medicos){
	//carrega a select com os nomes dos médicos
	var listaMedicos = document.querySelector("#medicos");
	listaMedicos.innerHTML=""; //limpa a lista para preencher novamente
	
	//preenche lista
	medicos.forEach(function(medico,indice){
		 var optionMedico = document.createElement("option");
		 optionMedico.value = medico;
		 optionMedico.textContent = medico;
		 listaMedicos.appendChild(optionMedico);
	});
}