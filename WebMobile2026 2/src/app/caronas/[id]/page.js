/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Layout from "../../../components/Layout";
import Panel from "../../../components/Panel";
import DetalheCarona from "../../../components/DetalheCarona";
import { caronas } from "../../../data/caronas";
import { encontrarCaronaPorId } from "../../../lib/busca";

export const metadata = {
  title: "Detalhes da carona | CaronaU",
};

export function generateStaticParams() {
  return caronas.map((carona) => ({ id: String(carona.id) }));
}

async function ConteudoCarona({ params }) {
  const { id } = await params;
  const carona = encontrarCaronaPorId(caronas, id);

  if (!carona) notFound();

  return <DetalheCarona carona={carona} />;
}

export default function PaginaCarona({ params }) {
  return (
    <Layout tituloHeader="Detalhes da carona" classeMain="page-content">
      <Suspense fallback={<Panel titulo="Carregando carona..." />}>
        <ConteudoCarona params={params} />
      </Suspense>
    </Layout>
  );
}
