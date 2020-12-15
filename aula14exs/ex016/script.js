function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        // Não está fucionando! O JS está considerando campo vazio com o valor O.
        window.alert('[ERRO] Faltam dados! Preencha todos os campos corretamente.')
        res.innerHTML = 'Impossível contar!'
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value) 
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0){
            window.alert ('Passo inválido! Considerando PASSO 1')
            p = 1
       }
       if (i < f) {
           // Contagem crescente
            for (let c = i; c <= f; c +=p ){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}