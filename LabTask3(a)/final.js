var container = document.querySelector(".container");
var timeNow = new Date().getHours();
var greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 17
    ? "Good Afternoon"
    : "Good evening";
container.innerHTML = `<h1>${greeting}</h1>`;