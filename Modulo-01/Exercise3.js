function temHabilidade(skills){
    return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "ReactJS", "NodeJS", "Angular"];
console.log(temHabilidade(skills));
