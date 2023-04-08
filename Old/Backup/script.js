const slider = document.querySelector("#slider");
const image = document.querySelector("#image");

document.addEventListener("mousemove", function(e) {
  const x = e.clientX / window.innerWidth;
  image.style.clipPath = `inset(0% ${100 - x * 100}% 0% 0%)`;
  image2.style.clipPath = `inset(0% 0% 0% ${x * 100}% )`;
});
