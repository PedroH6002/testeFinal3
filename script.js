const container = document.querySelector("#container");

const inputScore = document.querySelector("#inputScore");

const circulo1 = document.querySelector("#circulo1")
const circulo2 = document.querySelector("#circulo2")
const circulo3 = document.querySelector("#circulo3")

const paperPlayer1 = document.querySelector(`#circulo-1-player1`)
const scissorsPlayer1 = document.querySelector(`#circulo-2-player1`)
const rockPlayer1 = document.querySelector(`#circulo-3-player1`)

const paperPlayer2 = document.querySelector(`#circulo-1-player2`)
const scissorsPlayer2 = document.querySelector(`#circulo-2-player2`)
const rockPlayer2 = document.querySelector(`#circulo-3-player2`)

const divPlayer1 = document.querySelector(`#divPlayer1`)




const subtitulo1 = document.querySelector(`#subtitulo-1`);
const subtitulo2 = document.querySelector(`#subtitulo-2`);

const playAgainButton = document.querySelector(`#playAgainButton`)
const win = document.querySelector(`#win`)
const lose = document.querySelector(`#lose`)
const you = document.querySelector(`#you`)
const drew = document.querySelector(`#drew`)

let cont = parseInt(localStorage.getItem("valorPreservado")) || 0

let cont2 = 0
let lista = [paperPlayer2, scissorsPlayer2, rockPlayer2]
let i = Math.round(Math.random() * 2)
const palavraAleatoria = lista[i]

inputScore.value  =  cont


function cliquei1() {
   let cont = parseInt(localStorage.getItem("valorPreservado")) || 0

    container.hidden = true;
    paperPlayer1.style.display = "flex";

    // scissorsPlayer1.style.display = "flex"
    // rockPlayer1.style.display = "flex"
    // paperPlayer1.style.margin = "0px"
    // scissorsPlayer1.style.margin = "0px"
    // rockPlayer1.style.margin = "0px"
    // divPlayer1.style.margin = "0px"
    palavraAleatoria.style.display = "flex";
    subtitulo1.style.display = "flex";
    subtitulo2.style.display = "flex";
   

    setTimeout( function() {
      

      paperPlayer1.classList.add("moved");
      paperPlayer1.style.transition = "0.5s";
      palavraAleatoria.classList.add("moved");
      palavraAleatoria.style.transition = "0.5s";

      subtitulo1.classList.add("moved");
      subtitulo1.style.transition = "0.5s";
         
      subtitulo2.classList.add("moved");
      subtitulo2.style.transition = "0.5s";
   
      playAgainButton.hidden = false

    if(palavraAleatoria === scissorsPlayer2){
      you.hidden = false
       lose.hidden = false
       localStorage.removeItem("valorPreservado")
    }
    else if(palavraAleatoria === rockPlayer2){
      you.hidden = false
       win.hidden = false  
       localStorage.setItem("valorPreservado", ++cont)
  
    }  
       else{
        drew.hidden = false
         localStorage.setItem("valorPreservado", cont)
      }
       console.log(cont);
    

   }, 1000);

   
}

function cliquei2() {
   let cont = parseInt(localStorage.getItem("valorPreservado")) || 0


    container.style.display = "none"
    scissorsPlayer1.style.display = "flex"
    palavraAleatoria.style.display = "flex"
    subtitulo1.style.display = "flex";
    subtitulo2.style.display = "flex";

    setTimeout( function() {
      scissorsPlayer1.classList.add("moved");
      scissorsPlayer1.style.transition = "0.5s";
      palavraAleatoria.classList.add("moved");
      palavraAleatoria.style.transition = "0.5s";

      subtitulo1.classList.add("moved");
      subtitulo1.style.transition = "0.5s";

      subtitulo2.classList.add("moved");
      subtitulo2.style.transition = "0.5s";
   
      playAgainButton.hidden = false

    if(palavraAleatoria === rockPlayer2){
      you.hidden = false
       lose.hidden = false
       localStorage.removeItem("valorPreservado")
    }
    else if(palavraAleatoria === paperPlayer2){
      you.hidden = false
       win.hidden = false
      localStorage.setItem("valorPreservado", ++cont)
    }
    else{
      drew.hidden = false
      localStorage.setItem("valorPreservado", cont)
    }
      }, 1000);
}

function cliquei3() {

   let cont = parseInt(localStorage.getItem("valorPreservado")) || 0

    container.style.display = "none"
    rockPlayer1.style.display = "flex"
    palavraAleatoria.style.display = "flex"
    subtitulo1.style.display = "flex";
    subtitulo2.style.display = "flex";

    setTimeout( function() {
      rockPlayer1.classList.add("moved");
      rockPlayer1.style.transition = "0.5s";

      palavraAleatoria.classList.add("moved");
      palavraAleatoria.style.transition = "0.5s";

      subtitulo1.classList.add("moved");
      subtitulo1.style.transition = "0.5s";
   

      subtitulo2.classList.add("moved");
      subtitulo2.style.transition = "0.5s";
   
      playAgainButton.hidden = false

    if(palavraAleatoria === paperPlayer2){
      you.hidden = false
       lose.hidden = false
       localStorage.removeItem("valorPreservado")
    }
    else if(palavraAleatoria === scissorsPlayer2){
      you.hidden = false
       win.hidden = false
       localStorage.setItem("valorPreservado", ++cont)
    }
    else{
      drew.hidden = false
      localStorage.setItem("valorPreservado", cont)
    }
   }, 1000);
}

function reload(){
   location.reload()

}