var selectUnidade = document.querySelector("#selectUnidades");
var selectTipoDeAtendimento = document.querySelector("#tipoDeAtendimento");

//se recarregar a página, mantém a integridade dos dados do formulário
dadosUnidade = carregaDadosUnidade(selectUnidade.value);
carregarListaMedicos(dadosUnidade.medicos);

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
	dadosUnidade = carregaDadosUnidade(this.value);
	carregarListaMedicos(dadosUnidade.medicos);
});