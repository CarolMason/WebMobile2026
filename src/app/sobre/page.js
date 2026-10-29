/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Layout from "../../components/Layout";
import Panel from "../../components/Panel";

export const metadata = {
  title: "Sobre | CaronaU",
};

const secoes = [
  {
    titulo: "Sobre o CaronaU",
    paragrafos: [
      "O CaronaU é uma plataforma criada para conectar estudantes de uma mesma faculdade ou que estão próximos e fazem trajetos parecidos. O objetivo principal é ajudar a tornar a ida e a volta da faculdade mais fáceis no dia a dia.",
      "Além disso, a iniciativa ajuda a reduzir custos de transporte e a circulação de carros, tornando o trajeto mais econômico e sustentável e possibilitando a criação de novas amizades.",
    ],
  },
  {
    titulo: "Como funciona",
    paragrafos: [
      "O estudante realiza seu cadastro informando seus dados e as informações necessárias para encontrar uma carona. Depois, pode buscar pessoas que fazem um trajeto parecido, informando horário, destino e faculdade. O sistema apresenta as opções compatíveis.",
    ],
  },
  {
    titulo: "Segurança e confiança",
    paragrafos: [
      "O projeto é pensado para aproximar estudantes e incentivar que as caronas aconteçam entre pessoas da comunidade universitária. Antes de combinar uma viagem, os usuários devem confirmar os detalhes do trajeto e combinar os pontos de encontro.",
    ],
  },
];

export default function Sobre() {
  return (
    <Layout titulo="Sobre | CaronaU" tituloHeader="Saiba mais sobre nós" classeMain="page-content">
      {secoes.map((secao) => (
        <Panel key={secao.titulo} titulo={secao.titulo}>
          {secao.paragrafos.map((texto) => (
            <p key={texto}>{texto}</p>
          ))}
        </Panel>
      ))}
    </Layout>
  );
}
