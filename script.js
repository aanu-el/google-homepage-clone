// Declaring variables
var input = document.getElementById("searchBar");
var clearBtn = document.getElementById("clearIcon");
var container = document.getElementById("searchCon");

// Clears the user input when the page refreshes
window.onload = function () {
  input.value = "";
};

// Border effect active when user clicks nn the input area
input.onfocus = function () {
  container.style.borderColor = "rgba(223, 225, 229, 0)";
  container.style.boxShadow = "0 1px 6px rgba(32, 32, 36, 0.28)";
};

// Border effect inactive when user clicks outside of the input area
input.onblur = function () {
  container.style.borderColor = "";
  container.style.boxShadow = "";
};

//Clear button shows when user starts typing, and it can clear the user input when clicked
input.oninput = function () {
  if (clearBtn.style.display === "none") {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "block";
  }

  clearBtn.onclick = function () {
    input.value = "";
  };
};
