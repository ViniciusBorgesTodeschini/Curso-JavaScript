let num = [5,8,8,2,9,3]
num.push(1)
num.sort()

/*console.log(`o vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)
console.log(`Sendo asism o primeiro valor do vetor é ${num[0]}`)*/

console.log(`Mostrando o vetor de ${num.length} posições: `)

/* PRIMEIRA FORMA
Recomandação do Guanabara
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

//SEGUNDA FORMA
for (let pos in num){
    console.log(`A posição ${pos} temm o valor ${num[pos]}`)
}