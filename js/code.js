//smooth scrolling
const scrollSpeed = 1000;
document
  .querySelectorAll(".btn")
  .forEach((element) => element.addEventListener("click", scroll));
function scroll(e) {
  e.preventDefault();
  let targetId;
  if (e.target.nodeName == "A") targetId = e.target.getAttribute("href");
  else targetId = e.target.parentNode.getAttribute("href");
  window.history.pushState("", "", targetId);
  $("body,html").animate(
    {
      scrollTop: $(targetId).offset().top,
    },
    scrollSpeed
  );
}
//Scroll Animation
ScrollReveal().reveal(".page", {
  origin: "left",
  duration: 1000,
  reset: true,
});

document.body.addEventListener("click", JustLog);

let myEvent;
function JustLog(e) {
  myEvent = e;
  console.log(myEvent);
}
