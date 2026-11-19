"use client";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { useState } from "react";
import Panel from "./Panel";
import FormularioBusca from "./FormularioBusca";
import ListaCaronas from "./ListaCaronas";
import { caronas } from "../data/caronas";
import { filtrarCaronas } from "../lib/busca";

export default function BuscaCaronas() {
  const [resultado, setResultado] = useState(null);

  function buscar(criterios) {
    setResultado(filtrarCaronas(caronas, criterios));
  }

  return (
    <>
      <Panel id="busca" titulo="Buscar carona" ajuda="Informe seu destino e encontre opções de trajeto.">
        <FormularioBusca aoBuscar={buscar} />
      </Panel>

      {resultado !== null ? (
        <Panel id="resultados" titulo="Caronas encontradas">
          <ListaCaronas caronas={resultado} />
        </Panel>
      ) : null}
    </>
  );
}
