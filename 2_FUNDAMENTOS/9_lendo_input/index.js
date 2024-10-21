const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Qual linguagem de programação você prefere? ", (language) => {
    if(language === "Python") {
        console.log("Python? Nem sei o que é...")
    } else {
        console.log(`Você gosta de ${language}, parabens!`)
    }
    readline.close()
})