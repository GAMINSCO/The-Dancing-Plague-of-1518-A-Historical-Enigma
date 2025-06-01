document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

document.getElementById("moreBtn").addEventListener("click", function () {
  const moreContent = document.getElementById("moreContent");
  const isHidden = moreContent.classList.contains("hidden");
  moreContent.classList.toggle("hidden");
  this.textContent = isHidden ? "Show Less" : "Show More";
});
