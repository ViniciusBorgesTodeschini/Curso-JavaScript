let num = [5,8,8,2,9,3]
num.push(1)
num.sort()

for (let pos in num){
    console.log(`A posição ${pos} temm o valor ${num[pos]}`)
}

let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
