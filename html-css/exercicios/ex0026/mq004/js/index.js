document.querySelector("#burguer").addEventListener("click", clickMenu);

function clickMenu() {
  let menu = document.querySelector("#menu");
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

window.addEventListener("resize", mudouTamanho);

function mudouTamanho() {
  if (window.innerWidth >= 768) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
