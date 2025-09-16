const person = [
  { img: "src/Cards/Hinosuke.png" },
  { img: "src/Cards/Rengoku.png" },
  { img: "src/Cards/Tanjiro.png" },
  { img: "src/Cards/Tokito.png" },
  { img: "src/Cards/Zenitsu.png" },
  { img: "src/Cards/Hinosuke.png" },
  { img: "src/Cards/Rengoku.png" },
  { img: "src/Cards/Tanjiro.png" },
  { img: "src/Cards/Tokito.png" },
  { img: "src/Cards/Zenitsu.png" }
];

let openCards = [];

// Embaralhar
let shuffPerson = person.sort(() => Math.random() - 0.5);

for (let i = 0; i < shuffPerson.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.onclick = handleClick;

  let img = document.createElement("img");
  img.src = shuffPerson[i].img;
  img.alt = "Card";

  box.appendChild(img); 
  document.querySelector(".game").appendChild(box);
}

function handleClick() { 
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  
  } else {
    openCards[0].classList.remove("boxOpen")
    openCards[1].classList.remove("boxOpen")
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === person.length) {
    alert("VOCÊ VENCEU");
  }
}

