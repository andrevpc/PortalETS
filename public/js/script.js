let photoUsuario = document.getElementById("usuarioFoto");
let fileUsuario = document.getElementById("arquivoUsuario");

photoUsuario.addEventListener("click", () => {
  fileUsuario.click();
});

fileUsuario.addEventListener("change", () => {
  if (fileUsuario.files.length == 0) {
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(fileUsuario.files[0]);
  reader.onload = () => {
    photoUsuario.src = reader.result;
    console.log(reader.result);
    console.log(photoUsuario.src);
  };
});

let photoMateria = document.getElementById("materiaFoto");
let fileMateria = document.getElementById("arquivoMateria");

photoMateria.addEventListener("click", () => {
  fileMateria.click();
});

fileMateria.addEventListener("change", () => {
  if (fileMateria.files.length == 0) {
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(fileMateria.files[0]);
  reader.onload = () => {
    photoMateria.src = reader.result;
  };
});

fileMateria.addEventListener("change", () => {
  if (fileMateria.files.length == 0) {
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(fileMateria.files[0]);
});

