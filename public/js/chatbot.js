window.addEventListener("load", (event) => {
  setTimeout(function () {
    var mascotte = document.querySelector(".mascotte");

    if (mascotte.src === "/assets/images/lion.png") {
      var snurk = new Audio("/assets/audio/snurken.mp3");
      snurk.play();
      mascotte.src = "/assets/images/slaapleeuw.gif";
      setTimeout(function () {
        mascotte.src = "/assets/images/lion.png";
      }, 8000);
    } else {
    }
  }, 10000);
});

document.querySelector("#chatbotbtn").addEventListener("click", () => {
  document
    .querySelector(".chatbot-container")
    .classList.add("animation-containter");

  document.querySelector("#chatbotbtn").classList.add("animate-mascotte");

  setTimeout(function () {
    window.location.href = "/search";
  }, 2000);
});
