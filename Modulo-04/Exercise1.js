var checaIdade = function(idade) {
    return new Promise(function(resolve, reject) {
        if(idade >= 18){
            resolve('Maior que 18 anos de idade.');
        }else{
            reject('Menor que 18 anos de idade');
        }
})};

checaIdade(15)
    .then(function(maiorDeIdade) {
        console.log(maiorDeIdade);
    })
    .catch(function(menorDeIdade){
        console.log(menorDeIdade);
    })