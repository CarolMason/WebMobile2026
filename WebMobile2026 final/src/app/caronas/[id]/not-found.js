/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Link from "next/link";
import Layout from "../../../components/Layout";
import Panel from "../../../components/Panel";

export default function CaronaNaoEncontrada() {
  return (
    <Layout tituloHeader="Carona não encontrada" classeMain="page-content">
      <Panel titulo="Carona não encontrada" ajuda="Não existe nenhuma carona com esse código. Ela pode ter sido removida ou o endereço está incorreto.">
        <Link className="link-acao" href="/caronas">← Ver todas as caronas</Link>
      </Panel>
    </Layout>
  );
}
