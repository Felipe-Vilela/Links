function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  if (html.classList.contains("light")) {
   img.setAttribute('src', './assets/avatar-light.png')
   img.setAttribute("alt", "Foto Felipe Vilela")
  } else {
   img.setAttribute("src", "./assets/avatar-dark.png")
   img.setAttribute("alt", "Foto Felipe Vilela")
  }

}
