// Função para inserir números e operadores no display
function insert(num) {
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
}

// Função para limpar o display
function clean() {
    document.getElementById('resultado').value = "";
}
// Função para apagar o último caractere do display
function back() {
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
}
// Função para calcular o resultado da expressão no display
function calcular() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = eval(resultado);
    }           
}
// Função para calcular a raiz quadrada do número no display
function raizQuadrada() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = Math.sqrt(resultado);
    }                   
}
// Função para calcular o valor percentual do número no display
function porcentagem() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = eval(resultado) / 100;
    }                   
}
// Função para calcular o valor ao quadrado do número no display
function aoQuadrado() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = Math.pow(resultado, 2);
    }
}
// Função para calcular o valor ao cubo do número no display
function aoCubo() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = Math.pow(resultado, 3);
    }   
}
// Função para calcular o valor fatorial do número no display
function fatorial() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        var num = parseInt(resultado);
        var fat = 1;        
        for (var i = 1; i <= num; i++) {
            fat *= i;
        }
        document.getElementById('resultado').value = fat;
    }   
}
// Função para calcular o valor exponencial do número no display
function exponencial() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = Math.exp(resultado);
    }
}
// Função para calcular o valor logarítmico do número no display
function logaritmo() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = Math.log10(resultado);
    }
}
// Função para calcular o valor do seno do número no display
function seno() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = Math.sin(resultado);
    }
}
if (resultado) {
    // Função para calcular o valor do cosseno do número no display
    function cosseno() {
        document.getElementById('resultado').value = Math.cos(resultado);
    }
}

