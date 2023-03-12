window.addEventListener("load", () => {
  const random1 = Math.ceil(Math.random() * 255);
  const random2 = Math.ceil(Math.random() * 255);
  const random3 = Math.ceil(Math.random() * 255);

  document.body.style.background = `rgb(${random1},${random2},${random3})`;
});

window.addEventListener("click", (e) => {
  const color = selectedColor(e.target.id);

  document.querySelectorAll(".fig").forEach((figure) => {
    figure.addEventListener("click", (e) => {
      if (e.target.id === "triangulo") {
        e.target.style.borderBottom = `100px solid ${color}`;
      } else {
        e.target.style.background = color;
      }
    });
  });
});

const selectedColor = (color) => {
  switch (color) {
    case "rojo":
      return "red";
    case "verde":
      return "green";
    case "azul":
      return "blue";
    case "naranja":
      return "orange";
    case "amarillo":
      return "yellow";
    case "rosa":
      return "pink";
    default:
      return "#428bca";
  }
};
