//variaveis globais e com informações de cada unidade

function carregarDadosUnidade(unidade){
	switch(unidade){
		case "tatuape":
			dadosTA();
			break;
		case "tatuape2":
			dadosTA2();
			break;
		case "santaCruz":
			dadosST();
			break;
		case "saoCaetano":
			dadosSC();
			break;
		case "lapa":
			dadosLA();
			break;
		case "santoAndre":
			dadosSA();
			break;
		case "santoAmaro":
			dadosSM();
			break;
		default:
			dadosTA();
	}
	carregarListaMedicos();
}

function carregarListaMedicos(){
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

//funções apenas com dados das unidades
function dadosTA(){
	nomeUnidade = "Tatuapé";
	enderecoUnidade = "Rua tuiuti, 1471 - Tatuapé";
	referenciaUnidade = "(Próximo Metrô Tatuapé, sentido Av. Celso Garcia. Em frente ao Colégio Espírito Santo)";
	telUnidade = "11 2942-1833";
	medicos = [
		"Dr.Tatuapé1",
		"Dr.Tatuapé2"
	];
}
function dadosTA2(){
	nomeUnidade = "Tatuapé";
	enderecoUnidade = "Gonçalves Crespo, 220 - Tatuapé";
	referenciaUnidade = "(Próximo Metrô Tatuapé, sentido Av. Celso Garcia. Em frente ao Colégio Espírito Santo)";
	telUnidade = "11 2942-1833";
	medicos = [
		"Dr.Pr21",
		"Dr.Pr22"
	];
}
function dadosST(){
	nomeUnidade = "Santa Cruz";
	enderecoUnidade = "Rua Borges Lagoa, 85";
	referenciaUnidade = "(Próximo Metrô Santa Cruz, e ao Habib's)";
	telUnidade = "11 3149-2888";
	medicos = [
		"Dra.Santa Cruz",
		"Dra.Santa Cruz2"
	];
}
function dadosSC(){
	nomeUnidade = "São Caetano";
	enderecoUnidade = "Rua Niterói, 237";
	referenciaUnidade = "(Próximo à estação São Caetano e ao terminal de ônibus)";
	telUnidade = "11 4228-7344";
	medicos = [
		"Dr.São Caetano",
		"Dr.São Caetano2"
	];
}
function dadosLA(){
	nomeUnidade = "Lapa";
	enderecoUnidade = "Rua Tomé de Souza, 186";
	referenciaUnidade = "(Próximo ao terminal Lapa)";
	telUnidade = "11 3649-0900";
	medicos = [
		"Dr.Lapa",
		"Dr.Lapa2"
	];
}
function dadosSA(){
	nomeUnidade = "Santo André";
	enderecoUnidade = "Rua das Monções, 356";
	referenciaUnidade = "(Próximo ao Mc Donalds)";
	telUnidade = "11 4433-4133";
	medicos = [
		"Dr.Santo André",
		"Dr Santo André2"
	];
}
function dadosSM(){
	nomeUnidade = "Santo Amaro";
	enderecoUnidade = "Av. Santo Amaro, 6257";
	referenciaUnidade = "(Próximo à estação Borba Gato)";
	telUnidade = "11 5682-8711";
	medicos = [
		"Dr.Santo Amaro",
		"Dr.Santo Amaro2"
	];
}