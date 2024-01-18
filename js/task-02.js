const ingredients = ['Potatoes',
                     'Mushrooms',
                     'Garlic',
                     'Tomatos',
                     'Herbs',
                     'Condiments',];
/*
Scrieți un script care pentru fiecare element al matricei ingredients:

.) Va crea un element <li> separat. 
Asigurați-vă că folosiți metoda document.createElement().
Adăugați numele ingredientului ca conținut text.
Adăugați clasa item la element.
Apoi va insera toate elementele <li> dintr-o singură operație
 în lista ul#ingredients.*/


const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
function listing(arr){
                       for(let i = 0; i < arr.length; i++)
                       {let element = document.createElement("li");
                        element.innerHTML = arr[i];
                        element.classList.add("item");
                        fragment.append(element);
                        }
                     };                   
listing(ingredients)
list.append(fragment)
console.log(document.body)



