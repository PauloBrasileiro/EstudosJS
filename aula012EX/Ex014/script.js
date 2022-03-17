function carregar(){
    var msg = window.document.getElementById("msg")
    //var foto = window.document.getElementById("foto")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()//para monstrar a hora atual
    //var hora = 10
        msg.innerHTML=`Agora são ${hora} horas`
if(hora >= 0 && hora <12){
    //BOM DIA
    document.body.style.background = '#cbd8e0'//serve para trocar a cor de fundo da condição
    img.src="manha.png"
}
else if(hora >=12 && hora <=18){
    //BOA TARDE
    document.body.style.background = '#545436'
    img.src = "tarde.png"
}
else{
    //BOA NOITE
    document.body.style.background = '#502d4b'
    img.src = "noite.png" // serve para colocar a foto na condição
}
}