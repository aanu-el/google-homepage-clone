var input = document.getElementsById("searchBar");

input.addEventListener("focus", function () {
  document.getElementById("clearIcon").style.display = "flex";
});
