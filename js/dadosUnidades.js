function carregaDadosUnidade(unidade){
	switch(unidade){
		case "tatuape":
			return{
				nome: "Tatuapé",
				endereco: "Rua tuiuti, 1471 - Tatuapé",
				referencia: "Próximo Metrô Tatuapé, sentido Av. Celso Garcia. Em frente ao Colégio Espírito Santo",
				telefone: "11 2942-1833",
				fazAgendamentoPorWhatsapp: false,
				medicos:[
					"Dr.Tatuapé1",
					"Dr.Tatuapé2"]}
		case "tatuape2":
			return{
				nome: "Tatuapé",
				endereco: "Gonçalves Crespo, 220 - Tatuapé",
				referencia: "Próximo Metrô Tatuapé, sentido Av. Celso Garcia. Em frente ao Colégio Espírito Santo",
				telefone: "11 2942-1833",
				fazAgendamentoPorWhatsapp: false,
				medicos:[
					"Dr.Pr21",
					"Dr.Pr22"]}
		case "santaCruz":
			return{
				nome: "Santa Cruz",
				endereco: "Rua Borges Lagoa, 85 - Santa Cruz",
				referencia: "Próximo Metrô Santa Cruz, e ao Habib's",
				telefone: "11 3149-2888",
				fazAgendamentoPorWhatsapp: true,
				medicos:[
					"Dr.Santa Cruz1",
					"Dr.Santa Cruz2"]}
		case "saoCaetano":
			return{
				nome: "São Caetano",
				endereco: "Rua Niterói, 237 - São Caetano",
				referencia: "próximo ao Senai",
				telefone: "11 4228-7344",
				fazAgendamentoPorWhatsapp: false,
				medicos: [
					"Dr.São Caetano",
					"Dr.São Caetano"]}
		case "lapa":
			return{
				nome: "Lapa",
				endereco: "Rua Tomé de Souza, 186 - Lapa",
				referencia: "Próximo ao terminal Lapa",
				telefone: "11 3649-0900",
				fazAgendamentoPorWhatsapp: true,
				medicos: [
					"Dr.Lapa",
					"Dr.Lapa2"]}
		case "santoAndre":
			return{
				nome:"Santo André",
				endereco: "Rua das Monções, 356",
				referencia: "(Próximo ao Mc Donalds)",
				telefone: "11 4433-4133",
				fazAgendamentoPorWhatsapp: false,
				medicos: [
					"Dr.Santo André",
					"Dr Santo André2"]}
		case "santoAmaro":
			return{
				nome: "Santo Amaro",
				endereco: "Av. Santo Amaro, 6257",
				referencia: "(Próximo à estação Borba Gato)",
				telefone: "11 5682-8711",
				fazAgendamentoPorWhatsapp: false,
				medicos: [
					"Dr.Santo Amaro",
					"Dr.Santo Amaro2"]}
		default:
			return{
				nome: "Tatuapé",
				endereco: "Rua tuiuti, 1471 - Tatuapé",
				referencia: "Próximo Metrô Tatuapé, sentido Av. Celso Garcia. Em frente ao Colégio Espírito Santo",
				telefone: "11 2942-1833",
				fazAgendamentoPorWhatsapp: false,
				medicos:[
					"Dr.Tatuapé1",
					"Dr.Tatuapé2"]}
	}
}

