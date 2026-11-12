"use client";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { useRef, useState } from "react";
import CampoFormulario from "./CampoFormulario";
import Aviso from "./Aviso";
import { buscarCep, cepValido, formatarCep, limparCep, montarLocalizacao } from "../lib/viacep";

const CAMPOS_VAZIOS = { nome: "", faculdade: "", cep: "", localizacao: "", email: "" };
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(dados) {
  const erros = {};
  if (!dados.nome.trim()) erros.nome = "Informe seu nome.";
  if (!dados.faculdade.trim()) erros.faculdade = "Informe sua faculdade.";
  if (dados.cep && !cepValido(dados.cep)) erros.cep = "O CEP precisa ter 8 números.";
  if (!dados.localizacao.trim()) erros.localizacao = "Informe seu bairro ou cidade.";
  if (!dados.email.trim()) erros.email = "Informe seu e-mail.";
  else if (!REGEX_EMAIL.test(dados.email.trim())) erros.email = "Digite um e-mail válido.";
  return erros;
}

export default function FormularioCadastro() {
  const [dados, setDados] = useState(CAMPOS_VAZIOS);
  const [erros, setErros] = useState({});
  const [nomeCadastrado, setNomeCadastrado] = useState("");
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [enderecoCep, setEnderecoCep] = useState("");
  const ultimoCep = useRef("");

  function atualizarCampo(evento) {
    const { name, value } = evento.target;
    setDados((anterior) => ({ ...anterior, [name]: value }));
    setErros((anterior) => ({ ...anterior, [name]: undefined }));
    setNomeCadastrado("");
  }

  async function consultarCep(cep) {
    ultimoCep.current = cep;
    setBuscandoCep(true);
    setEnderecoCep("");

    try {
      const endereco = await buscarCep(cep);
      if (ultimoCep.current !== cep) return;
      setDados((anterior) => ({ ...anterior, localizacao: montarLocalizacao(endereco) }));
      setErros((anterior) => ({ ...anterior, cep: undefined, localizacao: undefined }));
      setEnderecoCep([endereco.logradouro, montarLocalizacao(endereco)].filter(Boolean).join(", "));
    } catch (erro) {
      if (ultimoCep.current !== cep) return;
      setErros((anterior) => ({ ...anterior, cep: erro.message }));
    } finally {
      if (ultimoCep.current === cep) setBuscandoCep(false);
    }
  }

  function atualizarCep(evento) {
    const cep = formatarCep(evento.target.value);
    setDados((anterior) => ({ ...anterior, cep }));
    setErros((anterior) => ({ ...anterior, cep: undefined }));
    setNomeCadastrado("");
    setEnderecoCep("");

    if (cepValido(cep)) {
      consultarCep(limparCep(cep));
    } else {
      ultimoCep.current = "";
      setBuscandoCep(false);
    }
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
    setEnderecoCep("");
  }

  return (
    <form onSubmit={enviar} noValidate>
      <CampoFormulario id="nome" rotulo="Nome:" type="text" placeholder="Seu nome" valor={dados.nome} aoMudar={atualizarCampo} erro={erros.nome} />
      <CampoFormulario id="faculdade" rotulo="Faculdade:" type="text" placeholder="Nome da faculdade" valor={dados.faculdade} aoMudar={atualizarCampo} erro={erros.faculdade} />
      <CampoFormulario id="cep" rotulo="CEP (opcional):" type="text" inputMode="numeric" autoComplete="postal-code" placeholder="00000-000" maxLength={9} valor={dados.cep} aoMudar={atualizarCep} erro={erros.cep} />
      {buscandoCep ? <span className="texto-cep" role="status">Buscando endereço...</span> : null}
      {enderecoCep ? <span className="texto-cep" role="status">Endereço encontrado: {enderecoCep}</span> : null}
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
