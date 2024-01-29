function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('if','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<=11){
                //crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade<60){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')

            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<=11){
                //crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade<60){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')

            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
          
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    

}
}