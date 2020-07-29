function CalculadoraService() {

    const soma = '+'
    const subtracao = '-'
    const divisao = '/'
    const multiplicacao = '*'

    function calcularNumeros(numeroUm, numeroDois, operacao) {
        let resultado

        switch (operacao) {
            case soma:
                resultado = numeroUm + numeroDois
                break;
            case subtracao:
                resultado = numeroUm - numeroDois
                break
            case multiplicacao:
                resultado = numeroUm * numeroDois
                break
            case divisao:
                resultado = numeroUm / numeroDois
                break;
            default:
                resultado = 0
        }
        return resultado
    }

    function concatenarNumero(numAtual, numConcat) {
        // caso contenha apenas '0' ou null, reinicia o valor
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }
        // primeiro digito for '.', concatena '0' antes do ponto
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }
        //caso '.' digitado e já contenha um ponto, apenas retorna
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [
        concatenarNumero,
        calcularNumeros
    ]
}

export default CalculadoraService