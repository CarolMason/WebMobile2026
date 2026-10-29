/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Layout from "../components/Layout";
import Panel from "../components/Panel";
import HistoricoLista from "../components/HistoricoLista";

export default function Historico() {
  return (
    <Layout titulo="Histórico | CaronaU" tituloHeader="Histórico de buscas" classeMain="page-content">
      <Panel titulo="Suas buscas recentes" ajuda="As buscas feitas na página inicial aparecem aqui, da mais recente para a mais antiga.">
        <HistoricoLista />
      </Panel>
    </Layout>
  );
}
