let botaoLogin = document.getElementById("botao-login");
let mensagemLogin = document.getElementById("mensagem-login");
let formCadastro = document.querySelector("#cadastro form");
let formBusca = document.querySelector("#busca form");

let listaHistorico = document.getElementById("lista-historico");
let botaoLimpar = document.getElementById("botao-limpar");


let historico = JSON.parse(localStorage.getItem("historico")) || [];




if (botaoLogin) {
  botaoLogin.addEventListener("click", function () {
    mensagemLogin.textContent = "O login ainda não foi implementado. Por enquanto, faça seu cadastro abaixo :)";
    mensagemLogin.classList.remove("escondido");

    mensagemLogin.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}


if (formCadastro) {
  formCadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;

    mensagemLogin.textContent = "Cadastro realizado com sucesso! Bem-vindo(a), " + nome + ".";
    mensagemLogin.classList.remove("escondido");

    mensagemLogin.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    formCadastro.reset();
  });
}


if (formBusca) {
  formBusca.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let destino = document.getElementById("destino").value;
    let horario = document.getElementById("horario").value;
    let partida = document.getElementById("partida").value;

    if (destino === "") {
      mensagemLogin.textContent = "Digite um destino para buscar caronas.";
    } else {
      mensagemLogin.textContent = "Encontramos 3 caronas para " + destino + " às " + horario + "! Veja no Histórico.";

      // adiciona a viagem no histórico
      historico.push({
        partida: partida,
        destino: destino,
        horario: horario
      });

     
      localStorage.setItem("historico", JSON.stringify(historico));
    }

    mensagemLogin.classList.remove("escondido");

    mensagemLogin.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}




function mostrarHistorico() {
  listaHistorico.innerHTML = ""; 

  if (historico.length === 0) {
    listaHistorico.innerHTML = "<li class='historico-vazio'>Nenhuma viagem buscada ainda.</li>";
    return;
  }

  for (let i = 0; i < historico.length; i++) {
    let viagem = historico[i];

    let item = document.createElement("li");
    item.textContent =
      (viagem.partida || "Partida não informada") +
      " → " + viagem.destino +
      " (" + (viagem.horario || "horário não informado") + ")";

    listaHistorico.appendChild(item);
  }
}


if (listaHistorico) {
  mostrarHistorico();

  botaoLimpar.addEventListener("click", function () {
    historico = [];
    localStorage.removeItem("historico"); 
    mostrarHistorico();
  });
}
