function insertToDisplay(data){ // Adiciona um valor ao display, data é um número ou operador
    document.querySelector('#display').value += data
}

function clean(){ // Limpa o Display
    document.querySelector('#display').value = ''
}

function back(){ // Apaga o último caractere digitado na calculaddora
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1) 
}

function result(){ // Calcula
    const display = document.querySelector('#display');
    try {
        if (display.value.includes("%")) { // Se tiver porcentagem vai para outra função
            calcularPorcentagem();
        }  else {
            
            display.value = eval(display.value) // Calcula normal se não tiver "%"
        }
    } catch {
        display.value = 'Erro' // Se tiver algum erro
    }
}

function calcularPorcentagem() {
    const display = document.querySelector('#display');
    
    // Expressão regular para capturar o valor de porcentagem no formato "XX% de YY"
    const regex = /(\d+)%(\d+)/;  // Exemplo de "20%50"
    const match = display.value.match(regex);

    if (match) {
        const porcentagem = parseFloat(match[1]); // Pega o valor da porcentagem
        const numero = parseFloat(match[2]); // Pega o valor após o % (o número)

        if (!isNaN(porcentagem) && !isNaN(numero)) {
            // Calcula a porcentagem do número
            const resultado = (porcentagem * numero) / 100;
            display.value = resultado; // Exibe o resultado no display
        } else {
            display.value = 'Erro'; // Se algum valor não for numérico, exibe 'Erro'
        }
    } else {
        display.value = 'Erro'; // Se a entrada não estiver no formato correto, exibe 'Erro'
    }
}