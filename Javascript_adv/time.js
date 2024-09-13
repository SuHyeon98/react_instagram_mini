// button 태그 클릭하면 3초 뒤에 살아있따

const button = document.createElement("button");
button.innerText = "엄준식";

button.addEventListener("click", () => {
  setTimeout(() => {
    button.innerText = "살아있따";
  }, 3000);
});

document.body.appendChild(button);

// click 하면 "🥚" ->  🐣🐥🐓🍗

const chickenDiv = document.createElement("div");

chickenDiv.innerText = "🥚";

chickenDiv.addEventListener("click", () => {
  setTimeout(() => {
    chickenDiv.innerText = "🐣";
    setTimeout(() => {
      chickenDiv.innerText = "🐥";
      setTimeout(() => {
        chickenDiv.innerText = "🐓";
        setTimeout(() => {
          chickenDiv.innerText = "🍗";
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
});

document.body.appendChild(chickenDiv);

// setInterval(() => {
//   console.log("엄준식 살아있따");
// }, 1000);

// 실시간 시계
// const time = document.createElement("div");

// const updateClock = () => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   const liveTime = `${hours}:${minutes}:${seconds}`;
//   time.innerText = liveTime;
// };

// setInterval(updateClock, 1000);

// updateClock();

// document.body.appendChild(time);

const div = document.createElement("div");
document.body.appendChild(div);

setInterval(() => {
  const time = new Date().toLocaleString().split(" ");
  div.innerText = time;
}, 1000);
