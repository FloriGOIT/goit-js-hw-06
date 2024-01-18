/*
Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) 
și modifică stilurile inline al span#text prin actualizarea proprietății font-size. 
Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

 */

//Reference
const range = document.querySelector("input");
range.style.paddingLeft = "0px";
range.style.paddingRight = "0px";
range.setAttribute("value", "16");
console.log(range)
const text = document.querySelector("span")

//Functions
function resize(event){text.style.fontSize = `${event.currentTarget.value}px`;
                      text.innerHTML = `Abracadabra, font-size: ${event.currentTarget.value}px!`;
                      text.style.color = "brown";
                      range.style.accentColor = "brown";}

function reset() {text.innerHTML = "Abracadabra!";
                  range.value = "0";
                  text.style.fontSize =`${range.value}px`;
                  range.style.accentColor = "initial";
                  text.style.color = "initial";}

//Listener
range.addEventListener('input', resize);
range.addEventListener("blur", reset)
