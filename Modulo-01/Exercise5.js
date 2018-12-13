function listarUserSkills(){
    var nome;
    var skills;
    for (const usuario of usuarios) {
        console.log("O usuario " + usuario.nome +
        " possui as habilidades: " + usuario.habilidades.join(", ")
        )
    }
}

var usuarios = [
    {
        nome: "Roger",
        habilidades: ["Javascript", ".NET", "Malandragem"]
    },
    {
        nome: "Bruno",
        habilidades: ["Java", "Selenium", "Lip sync"]
    },
    {
        nome: "Jonas",
        habilidades: ["Eu estudo engenharia", "é na ufrgs"]
    }
]

listarUserSkills(usuarios);