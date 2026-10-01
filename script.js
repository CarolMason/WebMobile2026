let botaoLogin = document.getElementById("botao-login");
let mensagemLogin = document.getElementById("mensagem-login");
let formCadastro = document.querySelector("#cadastro form");
let formBusca = document.querySelector("#busca form");

let secaoResultados = document.getElementById("resultados");
let resumoResultados = document.getElementById("resumo-resultados");
let listaResultados = document.getElementById("lista-resultados");

let listaHistorico = document.getElementById("lista-historico");
let botaoLimpar = document.getElementById("botao-limpar");
let contadorHistorico = document.getElementById("contador-historico");



let historicoExemplo = [
  { partida: "Santana", destino: "Mackenzie - Campus Higienópolis", horario: "07:30" },
  { partida: "Perdizes", destino: "Mackenzie - Campus Alphaville", horario: "08:00" },
  { partida: "Pinheiros", destino: "Mackenzie - Campus Higienópolis", horario: "07:45" },
  { partida: "Vila Madalena", destino: "Mackenzie - Campus Higienópolis", horario: "13:15" },
  { partida: "Mackenzie - Campus Higienópolis", destino: "Barra Funda", horario: "18:30" },
  { partida: "Mackenzie - Campus Higienópolis", destino: "Campinas", horario: "19:00" },
  { partida: "Jundiaí", destino: "Mackenzie - Campus Higienópolis", horario: "07:50" },
  { partida: "Mackenzie - Campus Higienópolis", destino: "Santo André", horario: "22:00" },
  { partida: "São Bernardo", destino: "Mackenzie - Campus Higienópolis", horario: "08:10" },
  { partida: "Mackenzie - Campus Higienópolis", destino: "Tatuapé", horario: "21:45" }
];

let caronasDisponiveis = [
  { nome: "Rafael", partida: "Santana", destino: "Mackenzie - Campus Higienópolis", horario: "07:30", vagas: 3 },
  { nome: "Beatriz", partida: "Perdizes", destino: "Mackenzie - Campus Higienópolis", horario: "07:45", vagas: 2 },
  { nome: "Lucas", partida: "Pinheiros", destino: "Mackenzie - Campus Higienópolis", horario: "08:00", vagas: 1 },
  { nome: "Marina", partida: "Jundiaí", destino: "Mackenzie - Campus Higienópolis", horario: "07:00", vagas: 3 },
  { nome: "Pedro", partida: "Mackenzie - Campus Higienópolis", destino: "Barra Funda", horario: "18:30", vagas: 2 },
  { nome: "Camila", partida: "Mackenzie - Campus Higienópolis", destino: "Tatuapé", horario: "21:45", vagas: 0 },
  { nome: "João", partida: "Mackenzie - Campus Higienópolis", destino: "Santo André", horario: "22:00", vagas: 2 },
  { nome: "Ana", partida: "São Bernardo", destino: "Mackenzie - Campus Higienópolis", horario: "08:10", vagas: 1 }
];

let historico = JSON.parse(localStorage.getItem("historico")) || historicoExemplo;
let usuario = JSON.parse(localStorage.getItem("usuario")) || null;
let ultimoResultado = [];



function mostrarMensagem(texto, ehErro) {
  mensagemLogin.textContent = texto;
  mensagemLogin.classList.remove("escondido");

  if (ehErro) {
    mensagemLogin.classList.add("erro");
  } else {
    mensagemLogin.classList.remove("erro");
  }

  mensagemLogin.scrollIntoView({ behavior: "smooth", block: "center" });
}


function limparTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}


function horarioParaMinutos(horario) {
  let partes = horario.split(":");
  return Number(partes[0]) * 60 + Number(partes[1]);
}

function emailValido(email) {
  return email.includes("@") && email.includes(".") && email.indexOf("@") > 0;
}



function atualizarBotaoLogin() {
  if (!botaoLogin) return;

  if (usuario) {
    botaoLogin.textContent = "Sair (" + usuario.nome + ")";
  } else {
    botaoLogin.textContent = "Login";
  }
}

if (botaoLogin) {
  atualizarBotaoLogin();

  botaoLogin.addEventListener("click", function () {
    if (usuario) {
      usuario = null;
      localStorage.removeItem("usuario");
      atualizarBotaoLogin();
      mostrarMensagem("Você saiu da sua conta. Até logo!", false);
    } else {
      mostrarMensagem("Faça seu cadastro abaixo para entrar :)", false);
    }
  });
}



if (formCadastro) {
  formCadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let faculdade = document.getElementById("faculdade").value.trim();
    let localizacao = document.getElementById("localizacao").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nome === "" || faculdade === "" || localizacao === "" || email === "") {
      mostrarMensagem("Preencha todos os campos do cadastro.", true);
      return;
    }

    if (!emailValido(email)) {
      mostrarMensagem("Digite um e-mail válido (exemplo: nome@mackenzista.com.br).", true);
      return;
    }

    usuario = { nome: nome, faculdade: faculdade, localizacao: localizacao, email: email };
    localStorage.setItem("usuario", JSON.stringify(usuario));
    atualizarBotaoLogin();

    mostrarMensagem("Cadastro realizado com sucesso! Bem-vindo(a), " + nome + ".", false);
    formCadastro.reset();
  });
}

if (formBusca && usuario) {
  document.getElementById("partida").value = usuario.localizacao;
}



function buscarCaronas(destino, partida, horario) {
  let encontradas = [];

  for (let i = 0; i < caronasDisponiveis.length; i++) {
    let carona = caronasDisponiveis[i];

    let destinoOk = limparTexto(carona.destino).includes(limparTexto(destino));
    let partidaOk = partida === "" || limparTexto(carona.partida).includes(limparTexto(partida));

    // se informou horário, aceita caronas com até 60 minutos de diferença
    let horarioOk = true;
    if (horario !== "") {
      let diferenca = Math.abs(horarioParaMinutos(carona.horario) - horarioParaMinutos(horario));
      horarioOk = diferenca <= 60;
    }

    if (destinoOk && partidaOk && horarioOk) {
      encontradas.push(carona);
    }
  }

  return encontradas;
}

function mostrarResultados() {
  listaResultados.innerHTML = "";

  for (let i = 0; i < ultimoResultado.length; i++) {
    let carona = ultimoResultado[i];

    let item = document.createElement("li");
    item.className = "card-carona";

    let info = document.createElement("div");
    info.innerHTML =
      "<strong>" + carona.nome + "</strong> — " + carona.partida + " → " + carona.destino +
      "<small>Saída às " + carona.horario + " · " + carona.vagas + " vaga(s)</small>";

    let botao = document.createElement("button");
    botao.type = "button";

    if (carona.vagas === 0) {
      botao.textContent = "Lotada";
      botao.disabled = true;
    } else {
      botao.textContent = "Pedir carona";
      botao.addEventListener("click", function () {
        carona.vagas = carona.vagas - 1;
        mostrarMensagem("Pedido enviado para " + carona.nome + "! Ela(e) vai entrar em contato.", false);
        mostrarResultados();
      });
    }

    item.appendChild(info);
    item.appendChild(botao);
    listaResultados.appendChild(item);
  }
}

if (formBusca) {
  formBusca.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let destino = document.getElementById("destino").value.trim();
    let horario = document.getElementById("horario").value;
    let partida = document.getElementById("partida").value.trim();

    if (destino === "") {
      mostrarMensagem("Digite um destino para buscar caronas.", true);
      return;
    }

  
    historico.push({
      partida: partida,
      destino: destino,
      horario: horario,
      data: new Date().toLocaleDateString("pt-BR")
    });
    localStorage.setItem("historico", JSON.stringify(historico));

    ultimoResultado = buscarCaronas(destino, partida, horario);

    secaoResultados.classList.remove("escondido");

    if (ultimoResultado.length === 0) {
      resumoResultados.textContent = "Nenhuma carona encontrada para esse trajeto. Tente outro horário ou destino.";
    } else {
      resumoResultados.textContent = "Encontramos " + ultimoResultado.length + " carona(s) para " + destino + "!";
    }

    mostrarResultados();
    secaoResultados.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}



function salvarHistorico() {
  localStorage.setItem("historico", JSON.stringify(historico));
}

function mostrarHistorico() {
  listaHistorico.innerHTML = "";

  if (historico.length === 0) {
    contadorHistorico.textContent = "";
    listaHistorico.innerHTML = "<li class='historico-vazio'>Nenhuma viagem buscada ainda.</li>";
    return;
  }

  contadorHistorico.textContent = "Total de buscas: " + historico.length;

  for (let i = 0; i < historico.length; i++) {
    let viagem = historico[i];

    let item = document.createElement("li");

    let texto = document.createElement("span");
    texto.textContent =
      (viagem.partida || "Partida não informada") +
      " → " + viagem.destino +
      " (" + (viagem.horario || "horário não informado") + ")" +
      (viagem.data ? " - " + viagem.data : "");

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "botao-remover";
    botaoRemover.addEventListener("click", function () {
      historico.splice(i, 1);   // tira só este item da lista
      salvarHistorico();
      mostrarHistorico();
    });

    item.appendChild(texto);
    item.appendChild(botaoRemover);
    listaHistorico.appendChild(item);
  }
}

if (listaHistorico) {
  mostrarHistorico();

  botaoLimpar.addEventListener("click", function () {
    if (confirm("Tem certeza que deseja apagar todo o histórico?")) {
      historico = [];
      localStorage.removeItem("historico");
      mostrarHistorico();
    }
  });
}
