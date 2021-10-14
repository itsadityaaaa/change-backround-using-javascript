const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
btn.addEventListener("click", () => {


number = btn.value;

changeBackground (number);
 });
 });

const body = document.body;
function changeBackground (number) {
console.log(number);

switch (number) {
case "1":

body.classList.add("background-1");
break;

case "2":
body.classList.add("background-2");

break;
case "3":
body.classList.add("background-3");
break;
default:

break;
31 }
32 }