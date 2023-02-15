const amout = document.querySelector(".dollars");
const priceRange = document.querySelector("#priceRange");

priceRange.addEventListener("input", function () {
  const value = +this.value;
  amout.textContent = `${value.toFixed(2)}`.padStart(5, 0);
});
