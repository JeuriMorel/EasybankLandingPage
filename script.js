const btn = document.querySelector(".hamburger");
const body = document.querySelector("body");

const handleClick = () => {
  body.classList.toggle("openNav");
};

btn.addEventListener("click", handleClick);
