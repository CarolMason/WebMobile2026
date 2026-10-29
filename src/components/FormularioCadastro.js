"use client";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { useState } from "react";
import CampoFormulario from "./CampoFormulario";
import Aviso from "./Aviso";

const CAMPOS_VAZIOS = { nome: "", faculdade: "", localizacao: "", email: "" };
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(dados) {
  const erros = {};
  if (!dados.nome.trim()) erros.nome = "Informe seu nome.";
  if (!dados.faculdade.trim()) erros.faculdade = "Informe sua faculdade.";
  if (!dados.localizacao.trim()) erros.localizacao = "Informe seu bairro ou cidade.";
  if (!dados.email.trim()) erros.email = "Informe seu e-mail.";
  else if (!REGEX_EMAIL.test(dados.email.trim())) erros.email = "Digite um e-mail válido.";
  return erros;
}

export default function FormularioCadastro() {
  const [dados, setDados] = useState(CAMPOS_VAZIOS);
  const [erros, setErros] = useState({});
  const [nomeCadastrado, setNomeCadastrado] = useState("");

  function atualizarCampo(evento) {
    const { name, value } = evento.target;
    setDados((anterior) => ({ ...anterior, [name]: value }));
    setErros((anterior) => ({ ...anterior, [name]: undefined }));
    setNomeCadastrado("");
  }

  function enviar(evento) {
    evento.preventDefault();
    const novosErros = validar(dados);
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setNomeCadastrado("");
      return;
    }

    setNomeCadastrado(dados.nome.trim());
    setDados(CAMPOS_VAZIOS);
  }

  return (
    <form onSubmit={enviar} noValidate>
      <CampoFormulario id="nome" rotulo="Nome:" type="text" placeholder="Seu nome" valor={dados.nome} aoMudar={atualizarCampo} erro={erros.nome} />
      <CampoFormulario id="faculdade" rotulo="Faculdade:" type="text" placeholder="Nome da faculdade" valor={dados.faculdade} aoMudar={atualizarCampo} erro={erros.faculdade} />
      <CampoFormulario id="localizacao" rotulo="Localização:" type="text" placeholder="Bairro ou cidade" valor={dados.localizacao} aoMudar={atualizarCampo} erro={erros.localizacao} />
      <CampoFormulario id="email" rotulo="E-mail:" type="email" placeholder="nome@exemplo.com" valor={dados.email} aoMudar={atualizarCampo} erro={erros.email} />

      <button className="button-submit" type="submit">Cadastrar</button>

      {nomeCadastrado ? (
        <Aviso tipo="sucesso">
          Cadastro de {nomeCadastrado} recebido! Neste protótipo, os dados ainda não são salvos em um servidor.
        </Aviso>
      ) : null}
    </form>
  );
}
