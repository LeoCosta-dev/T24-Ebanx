let pessoa = {
    nome: "Victor Martins",
    idade: 18,
    habilidade: "broxar",
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}