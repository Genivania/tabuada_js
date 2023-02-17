/**********************************************************************************************************************
 * Objetivo: Realizar cálculos de uma tabuada tendo duas entardas e o contador
 * Data: 17/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/


 //Retorna o resultado de uma tabuada
 const calcularTabuada = function(multiplicandoMin,multiplicandoMax,multiplicadorMin,multiplicadorMax) {
    let minMultiplicando = multiplicandoMin
    let maxMultiplicando = multiplicandoMax
    let minMultiplicador = multiplicadorMin
    let maxMultiplicador = multiplicadorMax

    let contador
   
    // Validação de entrada 
    
    while (minMultiplicando <= maxMultiplicando) {
        console.log(`\n-  ${minMultiplicando}- \n`)
        contador = minMultiplicador
        while (contador <= maxMultiplicador) {
            let resultado = minMultiplicando * contador
            console.log(`${minMultiplicando} x ${contador} = ${resultado}`)
            contador++
        }
        minMultiplicando++
    }
}

 module.exports = {
     calcularTabuada
 }






