let photoUsuario = document.getElementById("usuarioFoto");
let fileUsuario = document.getElementById("arquivoUsuario");
console.log("aaaa");

photoUsuario.addEventListener("click", () => {
  fileUsuario.click();
  console.log("aa");
});

fileUsuario.addEventListener("change", () => {
  console.log("mudou");
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
console.log("aaaa");

photoMateria.addEventListener("click", () => {
  fileMateria.click();
  console.log("aa");
});

fileMateria.addEventListener("change", () => {
  console.log("mudou");
  if (fileMateria.files.length == 0) {
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(fileMateria.files[0]);
  reader.onload = () => {
    photoMateria.src = reader.result;
    console.log(reader.result);
    console.log(photoMateria.src);
  };
});