const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: "White and Black Long Fur Cat",
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: "Group of Horses Running",
  },
];



/*
Scrieți un script care creează o galerie de imagini pe baza unei matrice cu date. 
HTML-ul are o listă ul.gallery.

Folosiți matricea de obiecte images, pentru a crea elementele <img>
imbricate în <li>. 
Pentru a crea marcajul, vor fi de mare ajutor:
template strings și metoda insertAdjacentHTML().

Toate elementele galeriei trebuie adăugate la DOM dintr-o singură operație.
Adăugați un stil minim de poziționare a galeriei (flexbox sau grid) prin:
 intermediul claselor CSS.

 Rezultat:
 <ul>
   <li>
      <img src:..; alt="..." weight="..." style="border: 1px solid #ccc;"/>
   </li>
   <li>
      <img src:..; alt="..." weight="..." style="border: 1px solid #ccc;"/>
   </li>
 </ul>

 */
//Declaration
const list = document.querySelector(".gallery");
list.style.listStyleType = "none";
list.style.display = "flex";
list.style.flexDirection= "row";
list.style.justifyContent= "center";
list.style.gap = "40px";
list.style.backgroundColor = "bisque";
list.style.paddingTop = "20px";
list.style.paddingBottom = "20px";
const fragment = document.createDocumentFragment();

//Function
function listing(arr){
                       for( let i = 0; i <arr.length; i++ )
                          {const elemLi = document.createElement("li");
                           elemLi.classList.add("itemsT3");

                           const elemLiImg = document.createElement("img")
                           elemLiImg.style.width = "400px";
                           elemLiImg.style.height = "300px";
                           elemLiImg.style.borderRadius = "40px";

                           elemLi.insertAdjacentElement("beforeend", elemLiImg)
                           elemLiImg.classList.add("imageT3");
                           elemLiImg.src = arr[i].url;
                           elemLiImg.alt = arr[i].alt;
                           fragment.append(elemLi);}
                     };
listing(images);                    
list.append(fragment);

console.log(document.body)

