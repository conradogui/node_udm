// mais de um valor
const x = 10
const y = 'Gui'
const z = [1, 2]

console.log(x, y, z);

//contagem de impressoes
console.count(`O valor do x é: ${x}, contagem`) // 1
console.count(`O valor do x é: ${x}, contagem`) // 2
console.count(`O valor do x é: ${x}, contagem`) // 3
console.count(`O valor do x é: ${x}, contagem`) // 4

// variável entre strings
console.log("O nome é %s, ele é programador", y)

//limpar o console
setTimeout(() => {
   console.clear(); //limpa o console
}, 2000);