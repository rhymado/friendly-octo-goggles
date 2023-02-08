const greeting = document.getElementById("greeting");
// console.log(greeting);
const left = document.getElementsByClassName("left");
// console.log(left);

function transformContent() {
  // console.log(greeting.innerHTML);
  greeting.innerHTML = "<i>Sampai Jumpa</i>";

  // console.log(greeting.children);
  greeting.style.backgroundColor = "hsl(181, 47%, 33%)";
  greeting.children[0].style.color = "white";
}

const btnTransform = document.getElementById("transform");
// btnTransform.onclick = transformContent;
btnTransform.addEventListener("click", transformContent);
