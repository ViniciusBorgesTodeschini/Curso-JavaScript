function parimpar(n){ //Parâmetro formal
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'ímpar!'
    }
} 

let res = parimpar(4) //Parâmetro real
console.log(res)
// OU console.log(parimpar(4))