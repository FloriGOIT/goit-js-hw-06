function getRandomHexColor() {return `#${Math.floor(Math.random() * 16777215).toString(16)}`;}


const container = document.querySelector(".widget");
console.log(container.children);
const btn = container.children[1];
let span = container.children[0].firstElementChild;
let color = getRandomHexColor();

function changeColor(){let color = getRandomHexColor();
                        btn.style.backgroundColor = `${color}`;
                        span.innerHTML = color;};

btn.addEventListener("click", changeColor)

