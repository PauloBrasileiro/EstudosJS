var agora = new Date()
var hora = agora.getHours()
// Ele pega tanto horas, como datas atual
console.log(`São ${hora} horas`)
if(hora < 12 && hora > 4){
    console.log("Bom dia")
}else if(hora == 12){
    console.log("Bom almoço")
}
else if(hora > 12 && hora <= 17){
    console.log("Boa Tarde")
}
else if (hora >= 18 && hora <= 23){
    console.log("Boa noite")
}
else{
    console.log("Madrugada")
}