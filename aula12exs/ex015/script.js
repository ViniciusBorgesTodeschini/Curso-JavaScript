function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length ==0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tento novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade < 12){
                //criança
                img.setAttribute('src','foto-bebehomem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-jovemhomem.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','foto-adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade < 12){
                //criança
                img.setAttribute('src','foto-bebemulher.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-jovemmulher.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','foto-adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idosomulherpng')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}