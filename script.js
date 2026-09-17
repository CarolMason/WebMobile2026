var botaoLogin = document.getElementById("botao-login");
var mensagemLogin = document.getElementById("mensagem-login");
var formCadastro = document.querySelector("#cadastro form");
var formBusca = document.querySelector("#busca form");

var listaHistorico = document.getElementById("lista-historico");
var botaoLimpar = document.getElementById("botao-limpar");


var historico = JSON.parse(localStorage.getItem("historico")) || [];




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

    var nome = document.getElementById("nome").value;

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

    var destino = document.getElementById("destino").value;
    var horario = document.getElementById("horario").value;
    var partida = document.getElementById("partida").value;

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

  for (var i = 0; i < historico.length; i++) {
    var viagem = historico[i];

    var item = document.createElement("li");
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
