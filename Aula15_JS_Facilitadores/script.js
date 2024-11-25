//3 métodos facilitadores: includes, startsWith e endsWith

//incluides
let nomes =['Amir','Bemir','Cemir'];
console.log(nomes);
console.log(nomes.includes('Bemir'));

if(nomes.includes('Bemir')){
    console.log("O miliante Bemir está incluido em nosso array");
}else{
    console.log("O miliante Bemir não está em nosso array");
}

if(nomes.includes('Amir')){
    console.log("O miliante Amir está incluido em nosso array");
}else{
    console.log("O miliante Amir não está em nosso array");
}

if(nomes.includes('Cemir')){
    console.log("O miliante Cemir está incluido em nosso array");
}else{
    console.log("O miliante Cemir não está em nosso array");
}


//startstWith
let alunos ='Albano';
console.log(alunos.startsWith('Alb'));
console.log(alunos.startsWith('alb'));

//endswith
console.log(alunos.endsWith('ano'));