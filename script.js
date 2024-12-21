const botaoSortear = document.querySelector(".sorteador_botao");
botaoSortear.addEventListener("click", () => {
  let inputMin = document.querySelector("#input_min");
  let inputMax = document.querySelector("#input_max");

  let valorMinimo = parseInt(inputMin.value);
  let valorMaximo = parseInt(inputMax.value);

  if (inputMin.value === "" || inputMax.value === "") {
    let aviso = "[ERRO] Você deve preencher todos os campos!";
    exibirErro(aviso);
    return;
  }

  let resultado =
    Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
  console.log(resultado);

  abrirModal(resultado);

  inputMin.value = "";
  inputMax.value = "";
});

function abrirModal(resultado) {
  const modal = document.querySelector("#janela_modal");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "fechar" || e.target.id == "janela_modal") {
      modal.classList.remove("abrir");
    }
  });

  let saida = document.querySelector(".saida");
  saida.innerHTML = `${resultado}`;
}

function exibirErro(mensagemDeErro) {
  const modal = document.querySelector("#janela_modal");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "fechar" || e.target.id == "janela_modal") {
      modal.classList.remove("abrir");
    }
  });

  let saida = document.querySelector(".saida");
  saida.innerHTML = `${mensagemDeErro}`;
}
