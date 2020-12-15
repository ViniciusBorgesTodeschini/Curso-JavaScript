function contar(){
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpas')
    var res = window.document.getElementById('res')

    if (ini.value.lenght ==0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert ('[ERRO] Faltam dados! Preencha todos os campos corretamente.')
    } else {
        alert('Tudo ok!')
    }
}