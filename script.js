function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("ligth")) {
    html.classList.remove("ligth")
  } else {
    html.classList.add("ligth")
  }

  if (html.classList.contains("ligth")) {
   img.setAttribute('src', './assets/avatar-ligth.png')
   img.setAttribute("alt", "Foto Felipe com sorriso")
  } else {
   img.setAttribute("src", "./assets/avatar-dark.png")
   img.setAttribute("alt", "Foto Felipe sem sorriso")
  }

}
