
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 3000)

function proximaimg(){
    cont++
   

    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
    
}
const menudiv = document.getElementById('menu-mobile')
const btnanimar = document.getElementById('btn-menu')

