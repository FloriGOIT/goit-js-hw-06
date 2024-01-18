/*
Contorul este format dintr-un tag span și două butoane care, 
atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și
 asignați-i valoarea 0 pentru început.
Adăugați click handler pe butoane, în interiorul cărora vei mări sau
 micșora valoarea contorului.
Actualizați interfața cu noua valoare a variabilei counterValue.

Rezultat:
maresc sau scad counter.innerHTML cu 1 apasand pe butoane

*/

//Declaration
let counterValue = 0;

const toAdd = document.querySelector(`button[data-action="increment"]`);
const toDecrease = document.querySelector(`button[data-action="decrement"]`)
const counter = document.querySelector("#value");
counter.innerHTML = counterValue;

const reset = document.createElement("button");
document.querySelector("#counter").append(reset);
reset.type = "reset";
reset.innerHTML = "Reset";
reset.style.fontSize = "10px";
reset.style.backgroundColor = "yellow";
reset.style.borderRadius = "39%";


//Functions
function adding(){let x = counterValue + 1;
                  counterValue = x;
                  counter.innerHTML = counterValue;}

function dcsing(){let x = counterValue - 1;
                      counterValue = x;
                      counter.innerHTML = counterValue;
                      if(counterValue < 0 ){reseting()};}

function reseting(){counterValue = 0;
    counter.innerHTML = counterValue;}          


//Listener
toAdd.addEventListener("click", adding);
toDecrease.addEventListener("click", dcsing);
reset.addEventListener("click", reseting)


