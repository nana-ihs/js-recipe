const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("rounded")) {
    figure.classList.add("triangle")
    figure.classList.remove("square")
    figure.classList.remove("rounded")
  } else if (figure.classList.contains("triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  } else {
    figure.classList.add("rounded")
  }
}
