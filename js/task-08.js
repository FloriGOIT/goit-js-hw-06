/*
1.Scrieți un script de control al formularului de login.
2.Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
3.La trimiterea formularului, pagina nu trebuie să se reîncarce.
4.Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
Dacă utilizatorul a completat toate câmpurile și a trimis formularul, 
colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, 
iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, 
folosiți proprietatea elements.
5.Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, 
folosind metoda reset.
                              event.preventDefault();
                              const outputEmail = event.target.elements.name.value;
                              console.log(outputEmail);
                              const outputPsw = event.target.elements.password.value;
                              console.log(outputPsw);
                              console.log(`Autentication for e-mail: ${outputEmail}, is confirmed!`);
*/

console.log(document.body);
const loggin = document.querySelector(".login-form");
console.log(loggin.children)
loggin[0].setAttribute("autocomplete","off");
loggin[1].setAttribute("autocomplete","off");

const btn = document.querySelector(".login-form button");
btn.style.borderColor = "red";
btn.style.borderWidth = "2.5px";                 
btn.style.borderWidth = "2.5px";

const loggOut = document.createElement("button");
loggin.append(loggOut);
loggOut.setAttribute("type","reset");;
loggOut.style.marginTop = "10px";
loggOut.innerHTML = "Logout";


loggin.addEventListener("change", checking);
loggin.addEventListener("submit", confirmLoggin);
loggOut.addEventListener("click", refresh);


function confirmLoggin(event){event.preventDefault();
                              const outputEmail = event.target.elements.email.value;
                              const outputPsw = event.target.elements.password.value;
                              if(outputEmail == "" || outputPsw == ""){alert("Please recheck fields!"); return;}
                              else{btn.style.background = "green";
                                   btn.innerHTML = "You are logged!";
                                   btn.style.fontSize = "25px";
                                   alert("Thank you for your registration!");};
                              console.log(`Autentication for e-mail: ${outputEmail}, is confirmed!`);
                              event.target.reset();}

function checking(event){ const outputEmail = loggin.elements.email.value;
                          const outputPsw = loggin.elements.password.value;
                           if(outputEmail == "" || outputPsw == ""){btn.innerHTML = "In progress.."; return;}
                           if(outputEmail.length > "1" && outputPsw.length > "0"){btn.style.borderColor = "lime";
                                                                                    btn.style.borderWidth = "2.5px";
                                                                                    btn.innerHTML = "Login..."
                                                                                    btn.style.fontSize = "20px";}
                           else{btn.style.borderColor = "red";}}                                                         
                                                                                                                                  
        
function refresh(event){btn.innerHTML = "Login";
                        btn.style.borderColor = "red";
                        btn.style.background = "initial";}              

//M-am jucat un pic, nu e complet ce am facut. 
