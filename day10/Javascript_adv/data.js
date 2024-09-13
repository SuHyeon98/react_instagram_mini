// fetch
// priomise : 약속
// response : 응답

// https : request <-> response
// reseponse - json(object) 오브젝트로 바꿔달라

// then : 데이터가 넘어왔다면
// catch : 데이터가 넘어오지 않았다면
// finally : 데이터 유무 상관없이

const test = fetch("https://fakerapi.it/api/v2/books?_quantity=10")
  .then((v) => v.json())
  .then((v) => console.log(v.data));

// button , setInterval, setTimeout

const button = document.createElement("button");
button.innerText = "데이터 가져오기";

const div = document.createElement("div");

button.addEventListener("click", () => {
  setTimeout(() => {
    button.innerText = "3";
    setTimeout(() => {
      button.innerText = "2";
      setTimeout(() => {
        button.innerText = "1";
        setTimeout(() => {
          button.innerText = "데이터 가져오는 중";
          fetch("https://fakerapi.it/api/v2/books?_quantity=10")
            .then((v) => v.json())
            .then((v) => (div.innerText = v.data)); //
          setTimeout(() => {
            button.innerText = "데이터 완";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});

document.body.appendChild(button);
document.body.appendChild(div);

// data[10]

// 화면에 뿌려줌
