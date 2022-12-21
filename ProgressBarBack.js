
const validaDigitos = (valor) => {
    const caracterParaValidar = valor[valor.length - 1];
    const regex = /^[0-9.-]+$/;
    const caractereValido = regex.test(caracterParaValidar);

    if (!caractereValido) {
        const inputCPF = document.getElementById("cpf");
        valor = valor.substring(0, valor.length - 1);
        inputCPF.value = valor;
    }

    atualizaContagemCaracteres(valor.length);
}

const atualizaContagemCaracteres = (quantidade) => {
    const labelContador = document.getElementById("labelContador");
    const texto = quantidade + "/14";
    labelContador.innerText = texto;

    atualizaBarraProgresso(quantidade);
}

const atualizaBarraProgresso = (quantidade) => {
    const barraProgresso = document.getElementById("progress");
    barraProgresso.value = quantidade;
}
