let eventTime = new Date("17 may 2025 0:0:0").getTime();
let counter = setInterval(() => {
  let timeNow = Date.now();
  let diff = eventTime - timeNow;

  let days = Math.trunc(diff / (1000 * 60 * 60 * 24));
  let hours = Math.trunc((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.trunc((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.trunc((diff % (1000 * 60)) / 1000);

  document.querySelector("span.days").innerHTML =
    days < 10 ? `00${days}` : days < 100 ? `0${days}` : days;
  document.querySelector("span.hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector("span.minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("span.seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (diff <= 0) clearInterval(counter);
}, 1000);

// ------------------------------------------------------------------
let progSpans = document.querySelectorAll(".skills li .percentage");
let secSkills = document.querySelector(".skills");
let prgPercent = document.querySelectorAll(".skills li .prg");

let secStats = document.querySelector(".stats");
let statsNums = document.querySelectorAll(".stats .box > span");
let isStarted = false;

window.onscroll = function () {
  progSpans.forEach((span) => {
    if (window.scrollY >= secSkills.offsetTop -450 && window.scrollY <= 8350) {
      span.style.width = `${span.dataset.prg}%`;
      prgPercent.forEach((prg) => {
        prg.innerHTML = `${prg.parentElement.dataset.prg}%`;
      });
    } else {
      span.style.width = 0;
      prgPercent.forEach((prg) => {
        prg.innerHTML = "";
      });
    }
  })

  if (
    window.scrollY >= secStats.offsetTop - 550 &&
    window.scrollY <= secStats.offsetTop + 280
  ) {
    if (!isStarted) {
      statsNums.forEach((num) => incCounting(num));
    }
    isStarted = true;
  } 
}

function incCounting(num) {
  let goal = num.dataset.num;
  let count = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 1000/ goal)
}


// ------------------------------------------------------------------