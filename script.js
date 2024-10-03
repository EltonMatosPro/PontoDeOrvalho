function calcularPontoOrvalho() {
    const tempAr = parseFloat(document.getElementById("tempAr").value);
    const ura = parseFloat(document.getElementById("ura").value);
    const tempPeca = parseFloat(document.getElementById("tempPeca").value);
    const resultadoElement = document.getElementById("resultado");
    const pontoOrvalhoElement = document.getElementById("pontoOrvalho");
    const aprovacaoElement = document.getElementById("aprovacao");

    if (isNaN(tempAr) || isNaN(ura) || isNaN(tempPeca)) {
        resultadoElement.value = "Por favor, preencha todos os campos corretamente.";
        pontoOrvalhoElement.value = "";
        aprovacaoElement.value = "";
        return;
    }

    // Fórmula simplificada para o cálculo do ponto de orvalho (em °C)
    const pontoOrvalho = tempAr - ((100 - ura) / 5);

    // Aprovação conforme norma: Temperatura da peça deve ser 3°C superior ao ponto de orvalho
    const diferenca = tempPeca - pontoOrvalho;

    // Exibe valores arredondados com duas casas decimais
    const pontoOrvalhoArredondado = pontoOrvalho.toFixed(2);
    const diferencaArredondada = diferenca.toFixed(2);

    // Atualiza o campo do ponto de orvalho
    pontoOrvalhoElement.value = `${pontoOrvalhoArredondado} °C`;

    let mensagem = `Ponto de Orvalho: ${pontoOrvalhoArredondado}°C\n`;
    mensagem += `Diferença entre a Temperatura da Superfície e o Ponto de Orvalho: ${diferencaArredondada}°C\n\n`;

    if (diferenca >= 3) {
        mensagem += "APROVADO: A temperatura da superfície está adequada para a aplicação de tinta.\n";
        mensagem += "Norma aplicada: A superfície deve estar ao menos 3°C acima do ponto de orvalho.";
        aprovacaoElement.value = "Aprovado";
    } else {
        mensagem += "REPROVADO: A temperatura da superfície não atende aos requisitos para a aplicação de tinta.\n";
        mensagem += "Norma aplicada: A superfície deve estar ao menos 3°C acima do ponto de orvalho para evitar condensação e garantir a aderência da tinta.";
        aprovacaoElement.value = "Reprovado";
    }

    resultadoElement.value = mensagem;
}
