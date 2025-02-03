/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./index.html";

window.onload = do { function() {
  //write your code here
  let quien = ["el perro", "un águila", "un caco", "un ciclón"];
  let accion = ["se comió", "aplastó", "aniquiló", "destrozó"];
  let que = ["mis pies", "la Vida", "las piernas", "el coche"];
  let cuando = ["ayer", "hoy", "cuando despertaba", "mañana"];

  let excuse =
    quien[Math.floor(Math.random() * quien.length)] +
    " " +
    accion[Math.floor(Math.random() * accion.length)] +
    " " +
    que[Math.floor(Math.random() * que.length)] +
    " " +
    cuando[Math.floor(Math.random() * cuando.length)];

  document.getElementById("excusa").innerHTML = excuse;
  let iteracion = 0
  let iteracion = + 1
}; 
 } while ( iteracion <=5) 

