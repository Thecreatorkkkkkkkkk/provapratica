var setadireita = window.document.getElementById("setadireita");
var setaesquerda = window.document.getElementById("setaesquerda");
var Leonardo = window.document.getElementById("leonardo");
var Bruna = window.document.getElementById("Bruna");
var samantha = window.document.getElementById("samantha");

function deslizarparadireita(){
    Leonardo.style="display:none"
    Bruna.style="display:flex"
   
    setadireita.style="display:none"
    setaesquerda.style="display:flex; margin-top=50px"
    
}


function deslizarparaesquerda(){
    Leonardo.style="display:flex"
    Bruna.style="display:none"
    setaesquerda.style="display:none"
    setadireita.style="display:flex; margin-top=50px"
    
   
}