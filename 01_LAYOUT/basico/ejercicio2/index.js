// Importamos los estilos
import tema1 from "./styles/styleA.css" with { type: "css" };
import tema2 from "./styles/styleB.css" with { type: "css" };

// Asignamos los estilos a los botones
const buttonTema1 = document.querySelector("#tema1");
buttonTema1.addEventListener("click", function () {
  document.adoptedStyleSheets.push(tema1);
  document.adoptedStyleSheets = document.adoptedStyleSheets.filter(sheet => sheet !== tema2);
});

const buttonTema2 = document.querySelector("#tema2");
buttonTema2.addEventListener("click", function () {
  document.adoptedStyleSheets.push(tema2);
  document.adoptedStyleSheets = document.adoptedStyleSheets.filter(sheet => sheet !== tema1);
});