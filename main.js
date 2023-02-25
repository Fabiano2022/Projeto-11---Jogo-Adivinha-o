//variáveis da aplicação:
const screen1 = document.querySelector(".screen1") //querySelector = procura o elemento
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos:
btnTry.addEventListener('click', handleTryClick) //registro dos eventos
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('Keydown', function(e) {
   if(e.Key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

//Função callback // Métodos // (quando for feito o "click" a função irá rodar) A função chamada de volta é a handleTryClick
function handleTryClick(event) {
  event.preventDefault() 

  const inputNumber = document.querySelector('#inputNumber')

  
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()    
    screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  let randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


