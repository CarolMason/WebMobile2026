/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { useState } from "react";
import Layout from "../components/Layout";
import Panel from "../components/Panel";
import FormularioCadastro from "../components/FormularioCadastro";
import FormularioBusca from "../components/FormularioBusca";
import ListaCaronas from "../components/ListaCaronas";
import { caronas } from "../data/caronas";
import { filtrarCaronas } from "../lib/busca";

export default function Home() {
  const [resultado, setResultado] = useState(null);

  function buscar(criterios) {
    setResultado(filtrarCaronas(caronas, criterios));
  }

  return (
    <Layout
      titulo="CaronaU | Encontre sua carona"
      descricao="Plataforma para conectar estudantes que fazem trajetos parecidos."
    >
      <div className="intro">
        <p className="eyebrow">Mais perto. Mais simples. Mais econômico.</p>
        <h2>Compartilhe o caminho até a faculdade</h2>
        <p>Encontre estudantes com trajetos parecidos e torne o deslocamento mais fácil.</p>
      </div>

      <Panel id="cadastro" titulo="Cadastro de usuário" ajuda="Preencha seus dados para fazer parte da comunidade CaronaU.">
        <FormularioCadastro />
      </Panel>

      <Panel id="busca" titulo="Buscar carona" ajuda="Informe seu destino e encontre opções de trajeto.">
        <FormularioBusca aoBuscar={buscar} />
      </Panel>

      {resultado !== null ? (
        <Panel id="resultados" titulo="Caronas encontradas">
          <ListaCaronas caronas={resultado} />
        </Panel>
      ) : null}
    </Layout>
  );
}
