"use client";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { useState } from "react";
import CampoFormulario from "./CampoFormulario";
import { adicionarBusca } from "../lib/historico";

const CAMPOS_VAZIOS = { destino: "", horario: "", partida: "" };

export default function FormularioBusca({ aoBuscar }) {
  const [dados, setDados] = useState(CAMPOS_VAZIOS);
  const [erroDestino, setErroDestino] = useState("");

  function atualizarCampo(evento) {
    const { name, value } = evento.target;
    setDados((anterior) => ({ ...anterior, [name]: value }));
    if (name === "destino") setErroDestino("");
  }

  function enviar(evento) {
    evento.preventDefault();

    if (!dados.destino.trim()) {
      setErroDestino("Informe o destino para buscar uma carona.");
      return;
    }

    const criterios = {
      destino: dados.destino.trim(),
      horario: dados.horario,
      partida: dados.partida.trim(),
    };

    adicionarBusca(criterios);
    aoBuscar(criterios);
  }

  return (
    <form onSubmit={enviar} noValidate>
      <CampoFormulario id="destino" rotulo="Destino:" type="text" placeholder="Para onde você vai?" valor={dados.destino} aoMudar={atualizarCampo} erro={erroDestino} />
      <CampoFormulario id="horario" rotulo="Horário:" type="time" valor={dados.horario} aoMudar={atualizarCampo} />
      <CampoFormulario id="partida" rotulo="Ponto de partida:" type="text" placeholder="De onde você sai?" valor={dados.partida} aoMudar={atualizarCampo} />

      <button className="button-submit" type="submit">Buscar carona</button>
    </form>
  );
}
