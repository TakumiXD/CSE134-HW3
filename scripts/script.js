const btnThemeToggler = document.getElementById("theme-toggler");
const imgTheme = document.getElementById("theme-img");

const theme = localStorage.getItem("theme");

btnThemeToggler.style.display = "block";

if (theme) {
  document.body.classList.add(theme);
  imgTheme.src = "/assets/dark-mode.png";
}

function toggleDarkMode() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode")
    imgTheme.src = "/assets/light-mode.png";
    localStorage.removeItem("theme");
  }
  else {
    document.body.classList.add("dark-mode");
    imgTheme.src = "/assets/dark-mode.png";
    localStorage.setItem("theme", "dark-mode");
  }
}

btnThemeToggler.addEventListener("click", toggleDarkMode);