/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Layout from "../../components/Layout";
import Panel from "../../components/Panel";
import ListaCaronas from "../../components/ListaCaronas";
import { caronas } from "../../data/caronas";

export const metadata = {
  title: "Caronas | CaronaU",
};

export default function Caronas() {
  return (
    <Layout tituloHeader="Caronas disponÃ­veis" classeMain="page-content">
      <Panel titulo="Todas as caronas" ajuda="Escolha uma carona para ver os detalhes.">
        <ListaCaronas caronas={caronas} />
      </Panel>
    </Layout>
  );
}
