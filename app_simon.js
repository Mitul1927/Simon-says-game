let userseq = [];
let gameseq = [];
let started = false;
let level = 0;
let btn = ["red", "yellow", "green", "purple"];
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
    levelup();
  }
});
function btnflash(btn2) {
  btn2.classList.add("flash");
  setTimeout(function () {
    btn2.classList.remove("flash");
  }, 200);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}
function levelup() {
  userseq = [];
  btn = ["red", "yellow", "green", "purple"];
  level++;
  h3.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btn[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  console.log(randIdx);
  console.log(randColor);
  console.log(randbtn);
  gameseq.push(randColor);
  console.log(gameseq);
  btnflash(randbtn);
}
function checkans(index) {
  // console.log(`curr level: ${level}`);
  console.log(userseq[index]);
  console.log(gameseq[index]);
  if (userseq[index] == gameseq[index]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 200);
    }
  } else {
    h3.innerHTML = `Game over!! Your score was<b>${level}<b> <br> press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function btnpress() {
  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  checkans(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".box");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
