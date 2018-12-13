endereco ={
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function enderecoCompleto(end){
    return "O usuário mora em " + end.cidade + 
            " / " + end.uf + ", no bairro " + end.bairro +
            ", na " + end.rua + " com nº " + end.numero + ".";
}

console.log(enderecoCompleto(endereco));