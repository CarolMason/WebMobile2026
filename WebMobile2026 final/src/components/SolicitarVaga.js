"use client";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { useState } from "react";
import Aviso from "./Aviso";

export default function SolicitarVaga() {
  const [solicitada, setSolicitada] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setSolicitada(true)} disabled={solicitada}>
        {solicitada ? "Vaga solicitada" : "Solicitar vaga"}
      </button>

      {solicitada ? (
        <Aviso tipo="sucesso">
          Solicitação registrada!
        </Aviso>
      ) : null}
    </>
  );
}
