/*
Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input), 
înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. 
Dacă input-ul este gol, în acel span se va afișa "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>


Rezultat: ce introduce userul in input sa se regaseasca si in textul din span.
Daca nu insereaza nimic sa ramana tot textul initial din span.

*/

//Declarare variabile
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

//Functiii
function insertInput(event){let answer = event.currentTarget.value;
                            if(answer === ""){answer = "Anonymous"}
                            output.textContent = answer;}

//Listener
input.addEventListener("input", insertInput);

