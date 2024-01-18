/*
Scrieți un script care:
1.Va număra și afișa în consolă numărul total de categorii din ul#categories,
 adică elementele li.item.
2.Pentru fiecare element li.item din lista ul#categories, 
va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și 
numărul de elemente din acea categorie (toate elementele <li>).
Ca rezultat, în consolă vor fi afișate astfel de mesaje:

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const mainUl = document.getElementById("categories");
const mainComponents = mainUl.children;
const headings = document.querySelectorAll("h2");

function all(arr) { console.log(`Number of categories: ${mainComponents.length}`);
                    for(let i = 0; i < arr.length; i++)
                       {const heading = headings[i];
                        const list = heading.nextElementSibling;
                        const listComponents = list.children;
                        const listComponentsLength = listComponents.length;
                        console.log(`Category: ${headings[i].innerHTML}`);
                        console.log(`Elements: ${listComponentsLength}`);};
                   }

all(headings);


/*let heading1 = headings[0];
let list1 = heading1.nextElementSibling;
let list1Components = list1.children;
let list1ComponentsLength = list1Components.length;
console.log(`Category: ${headings[0].innerHTML}`);//Animals
console.log(`Elements: ${list1ComponentsLength}`);



let heading2 = headings[1];
let list2 = heading2.nextElementSibling;
let list2Components = list2.children;
let list2ComponentsLength = list2Components.length
console.log(`Category: ${headings[1].innerHTML}`);//Products
console.log(`Elements: ${list2ComponentsLength}`);


let heading3 = headings[2];
let list3 = heading3.nextElementSibling;
let list3Components = list3.children;
let list3ComponentsLength = list3Components.length;
console.log(`Category: ${headings[2].innerHTML}`);//Technologies
console.log(`Elements: ${list3ComponentsLength}`);*/
 
