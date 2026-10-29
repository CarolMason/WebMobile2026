"use client";

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