/**********************************************************************************************************************
 * Objetivo: Realizar cálculos de uma tabuada tendo duas entardas e o contador
 * Data: 17/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/

var calcularTabuada = require('./modulo/tabuada')

//Import da biblioteca para a entrada de dados
var readline = require('readline');


//Criar um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados tabuada

entradaDados.question('Digite o número da tabuada que você deseja iniciar, entre [2 ao 100]: ', function (multiplicandoMin) {
    let minMultiplicando = Number(multiplicandoMin)
    if (minMultiplicando == '') {
        console.log('ERRO: sem a entrada de valores')
        entradaDados.close()

    } else if (isNaN(minMultiplicando)) {
        console.log('ERRO: sem a entrada de valores númericos')
        entradaDados.close()

    } else if (minMultiplicando < 2 || minMultiplicando > 100) {
        console.log('ERRO: digite valores entre 2 ao 100')
        entradaDados.close()

    } else {
        entradaDados.question('Digite o número da tabuada que você deseja finalizar, entre [2 ao 100]: ', function (multiplicandoMax) {
            let maxMultiplicando = Number(multiplicandoMax)
            if (maxMultiplicando == '') {
                console.log('ERRO: sem a entrada de valores')
                entradaDados.close()

            } else if (isNaN(maxMultiplicando)) {
                console.log('ERRO: sem a entrada de valores númericos')
                entradaDados.close()

            } else if (maxMultiplicando < 2 || maxMultiplicando > 100) {
                console.log('ERRO:digite valores entre 2 ao 100')
                entradaDados.close()

            } else {
                entradaDados.question('Digite o número minímo do multiplicador entre [1 ao 50]: ', function (multiplicadorMin) {
                    let minMultiplicador = Number(multiplicadorMin)

                    if (minMultiplicador == '') {
                        console.log('ERRO: sem a entrada de valores')
                        entradaDados.close()

                    } else if (isNaN(minMultiplicador)) {
                        console.log('ERRO: sem a entrada de valores númericos')
                        entradaDados.close()

                    } else if (minMultiplicador < 1 || minMultiplicador > 50) {
                        console.log('ERRO: digite valores entre 1 ao 50')
                        entradaDados.close()

                    } else {
                        entradaDados.question('Digite o número máximo do multiplicador entre [1 ao 50]: ',
                            function (multiplicadorMax) {
                                let maxMultiplicador = Number(multiplicadorMax)

                                if (maxMultiplicador == '') {
                                    console.log('ERRO: sem a entrada de valores')
                                    entradaDados.close()

                                } else if (isNaN(maxMultiplicador)) {
                                    console.log('ERRO: sem a entrada de valores')
                                    entradaDados.close()

                                } else if (maxMultiplicador < 1 || maxMultiplicador > 50) {
                                    console.log('ERRO: digite valores entre 1 ao 50')
                                    entradaDados.close()

                                } else {
                                    calcularTabuada.tabuada(minMultiplicando, maxMultiplicando, minMultiplicador, maxMultiplicador)
                                    entradaDados.close()
                                }
                            })
                    }
                })
            }
        })
    }
})











