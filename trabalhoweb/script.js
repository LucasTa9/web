
var radio = document.querySelector('.manual-btn')

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 5000)

function proximaimg(){
    cott++

    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+ cont).checked = true
}
