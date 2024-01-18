/*
Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.
Numărul de caractere admis trebuie specificat în atributul data-length.
Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.
*/
const bodyHTML = document.querySelector("body");
console.log(bodyHTML);

const input = document.getElementById("validation-input");
let mustLength = input.getAttribute('data-length');
console.log(mustLength)

const confirmation = document.createElement("span");
console.log(confirmation);
bodyHTML.append(confirmation)


function check(event){
                      let x = event.target.value;
                      if(x.length == mustLength){input.classList.add("valid");
                                                 input.classList.remove("invalid");
                                                 confirmation.textContent = "Succes!";
                                                 confirmation.style.color = "green";
                                                 confirmation.style.fontSize = "20px";}
                      else{input.classList.add("invalid");
                      input.classList.remove("valid");
                      confirmation.textContent = "Verify input!";
                      confirmation.style.color = "red";
                      confirmation.style.fontSize = "20px";}
                     }

input.addEventListener("input", check)