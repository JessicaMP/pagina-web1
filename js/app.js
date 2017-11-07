window.onload = function() {
  var board = document.querySelector('.board-js');

  /*board.addEventListener('click', function(event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'red';
    event.target.style.border = '5px solid green';
  });*/

  /*board.addEventListener('dblclick', function(event) {
    console.log(event.target);
    event.target.style.backgroundImage = 'url(https://yt3.ggpht.com/-ivp594J8VHY/AAAAAAAAAAI/AAAAAAAAAAA/q-Nmqkq1BHU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg)';
      /*event.target.style.border = '5px solid green';
  });*/

  /*board.addEventListener('mouseover', function(event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'purple';
    /*event.target.style.border = '5px solid green';
  });*/

  board.addEventListener('click', addX);
    /*event.target.innerHTML = 'x'; /*innerHTML o textContent*/
};

var centinel = true;

function addX(event) {
  if (centinel)
    event.target.textContent = 'x';
  else {
    event.target.textContent = 'O';
    centinel = false;
  }
}


/*Propiedades para recorrer el DOM
------------------------------------------
Recorrer todos los nodos --> 1,2,3,8,9,10 etc
------------------------------------------
parentNode --> Nodo Padre
child Nodes --> Lista de Nodos hijos
firstChild --> Primer nodo hijo
lastChild --> Ultimo nodo hijo
sibling --> Nodo hermano
nextSibling --> El siguiente nodo hermano
previousSibling --> El nodo hermano anterior
---------------------------------------------
Recorrer solo nodos de tipo Elemento (1)-->  (Lo mas usado)
-------------------------------------------
parentElement --> El elemento Padre
children --> Los elementos hijos
firstElementChild --> El primer elemento hijo
lastElementChild --> El último elemento hijo
nextElementSibling --> El siguiente elemento hermano
previousElementSibling --> El elemento hermano anterior*/
