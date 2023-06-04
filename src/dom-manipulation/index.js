/*
 * Usa todo lo que has aprendido para manipular el DOM usando sólo JavaScript
 * para completar las preguntas debajo cuando hagas "submit" en el formulario:
 * 1. Cambia el estilo del elemento <body> para que todo el texto tenga una font-family: "Verdana, sans-serif".
 * 2. Asegúrate que todos los elementos <span> muestren el contenido que has introducido en los inputs.
 * 3. Haz un loop que cambie la clase de cada <li> a "list-item"
 * 5. Crea un nuevo elemento <img>, haz que el atributo src sea una imagen tuya y añádelo a la parte superior
 * de la sección "Sobre mi". Si necesitas añadir algún elemento adicional al index.html, puedes hacerlo,
 * pero crédito extra si lo logras sin añadir elementos adicionales.
 * 5. Bonus - Modifica y añade estilo al layout para que tu página "Sobre mi" tenga una aspecto más pulido.
 */

function handleSubmit(event) {
  alert("Submit!");
  event.preventDefault();

  // 1. Cambiar el estilo del elemento <body> para que todo el texto tenga una font-family: "Verdana, sans-serif"
  document.body.style.fontFamily = "IM Fell DW Pica  ";

  // 2. Asegurarse de que todos los elementos <span> muestren el contenido introducido en los inputs
  let restaurantSpan = document.getElementById("restaurant");
  let neighborhoodSpan = document.getElementById("neighborhood");
  let hometownSpan = document.getElementById("hometown");

  let restaurantInput = document.getElementById("restaurantsInput");
  let neighborhoodInput = document.getElementById("neighborhoodInput");
  let hometownInput = document.getElementById("hometownInput");

  restaurantSpan.textContent = restaurantInput.value;
  neighborhoodSpan.textContent = neighborhoodInput.value;
  hometownSpan.textContent = hometownInput.value;

  // 3. Cambiar la clase de cada <li> a "list-item" mediante un loop
  let listItems = document.querySelectorAll("li");
  listItems.forEach(li => {
    li.classList.add("list-item");
  });

  // 4. Crear un nuevo elemento <img> y añadirlo a la parte superior de la sección "Sobre mi"
  let img = document.createElement("img");
  img.src =
    "https://pbs.twimg.com/media/FwRsYaYXsAAAY1P?format=jpg&name=medium";
  img.classList.add("profile-image");
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
