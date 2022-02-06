const primaryColors = ["red", "blue", "yellow"]
const secondaryColors = ["purple", "green", "orange"]
const tertiaryColors = ["#DEFF00", "#FF5A04", "#8408FF", "#00A08C", "#FFC600", "#CE0063"]
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F' ]
const btnPrimary = document.getElementById("btnPrimary")
const btnSecondary = document.getElementById("btnSecondary")
const btnTertiary = document.getElementById("btnTertiary")
const btnHex = document.getElementById("btnHex")
const btnWhite = document.getElementById('btnWhite')
const nmColor = document.querySelector(".nmColor")

btnPrimary.addEventListener('click', function(){
    const randomNumber = getRandomNumberPrimary()
    document.body.style.backgroundColor = primaryColors[randomNumber]
    if(randomNumber == 0){
        nmColor.textContent = "Rojo"
    }else if (randomNumber == 1) {
        nmColor.textContent = "Azul"
    } else nmColor.textContent = 'Amarillo'
    
})

function getRandomNumberPrimary(){
    return Math.floor(Math.random()*primaryColors.length)
}

btnSecondary.addEventListener('click', function(){
    const randomNumber = getRandomNumberSecondary()
    document.body.style.backgroundColor = secondaryColors[randomNumber]
    if (randomNumber == 0) {
        nmColor.textContent = 'Morado'
    } else if (randomNumber == 1) {
        nmColor.textContent = 'Verde'        
    } else nmColor.textContent = 'Naranaja'
})

function getRandomNumberSecondary(){
    return Math.floor(Math.random()*secondaryColors.length)
}

btnTertiary.addEventListener('click', function(){
    const randomNumber = getRandomNumberTertiary()
    document.body.style.backgroundColor = tertiaryColors[randomNumber]
    if (randomNumber == 0) {
        nmColor.textContent = 'Amarillo Verdoso'        
    } else if (randomNumber == 1) {
        nmColor.textContent = 'Rojo Anaranjado'        
    } else if (randomNumber == 2) {
        nmColor.textContent = 'Azul Violaceo'
    } else if (randomNumber == 3) {
        nmColor.textContent = 'Verde Azulado'
    } else if (randomNumber == 4) {
        nmColor.textContent = 'Naranja Amarillento'
    } else nmColor.textContent = 'Violeta Rojizo'
})

function getRandomNumberTertiary(){
    return Math.floor(Math.random()*tertiaryColors.length)
}

btnHex.addEventListener('click', function(){
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomHex()];
    }
    document.body.style.backgroundColor = hexColor
    nmColor.textContent = hexColor
})

function getRandomHex(){
    return Math.floor(Math.random()*hex.length)
}
btnWhite.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white'
    nmColor.textContent = 'Blanco'
})