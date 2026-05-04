// ===== SIMULADOR DE ORÇAMENTO =====

// Nome
var nome = prompt("Digite seu nome:");

// Renda (validação com while)
var renda;
while (true) {
    renda = Number(prompt("Digite sua renda mensal:"));

    if (!isNaN(renda)) {
        break;
    } else {
        alert("Digite um número válido!");
    }
}

// Quantidade de despesas
var qtdDespesas;
while (true) {
    qtdDespesas = Number(prompt("Quantas despesas deseja informar? (1 a 5)"));

    if (!isNaN(qtdDespesas)) {
        break;
    } else {
        alert("Digite um número válido!");
    }
}

// Limite de 1 a 5
if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// Loop de despesas
var totalDespesas = 0;

for (var i = 1; i <= qtdDespesas; i++) {
    var despesa;

    while (true) {
        despesa = Number(prompt("Digite o valor da despesa " + i + ":"));

        if (!isNaN(despesa)) {
            break;
        } else {
            alert("Digite um número válido!");
        }
    }

    totalDespesas = totalDespesas + despesa;
}

// Cálculo
var sobra = renda - totalDespesas;
var mensagem;

// if / else
if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

// Resultado
var resultado = "===== ORÇAMENTO =====\n";
resultado += "Nome: " + nome + "\n";
resultado += "Renda: R$ " + renda.toFixed(2) + "\n";
resultado += "Despesas: R$ " + totalDespesas.toFixed(2) + "\n";
resultado += "Sobra: R$ " + sobra.toFixed(2) + "\n\n";
resultado += mensagem;

// Saída
alert(resultado);
console.log(resultado);