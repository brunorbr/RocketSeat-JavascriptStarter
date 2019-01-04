var maiorDeIdade = "Maior de 18 anos de idade";
var menorDeIdade = "Menor de 18 anos de idade";

var checaIdade = function(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout( function() {
            return idade >= 18 ? resolve() : reject();
        }, 2000);
})};

checaIdade(15)
    .then(function(maiorDeIdade) {
        console.log(maiorDeIdade);
    })
    .catch(function(menorDeIdade){
        console.log(menorDeIdade);
    })