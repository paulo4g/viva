const fields = document.querySelectorAll("[required]");
console.log(fields);

function csutomValidation(event) {
  const field = event.target;

  // lógica para verificar se existem erros
  function verifyErrors() {
    let foundErrors = false;

    for (let error in field.validity) {
      // se não for customError
      // então verifica se tem erro
      if (error != "customError" && field.validity[error]) {
        foundErrors = true;
      }
    }

    return foundErrors;
  }
  const error = verifyErrors();
  console.log("Errors exists", error);

  if (error) {
    //trocar mensagem do required
    field.setCustomValidity("Esse campo é obrigatório");
  } else {
    field.setCustomValidity("");
  }
}

for (field of fields) {
  field.addEventListener("invalid", csutomValidation);
}

document.querySelector("form").addEventListener("submit", (event) => {
  console.log("enviou");

  event.preventDefault();
});

const api = fetch("http://localhost:3030/produtos");
