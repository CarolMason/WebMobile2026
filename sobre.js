/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Head from "next/head";
import Header from "../components/Header";

export default function Sobre() {
  return (
    <>
      <Head><title>Sobre | CaronaU</title></Head>
      <Header titulo="Saiba mais sobre nós" />
      <main className="page-content">
        <section className="panel">
          <h2>Sobre o CaronaU</h2>
          <p>O CaronaU é uma plataforma criada para conectar estudantes de uma mesma faculdade ou que estão próximos e fazem trajetos parecidos. O objetivo principal é ajudar a tornar a ida e a volta da faculdade mais fáceis no dia a dia.</p>
          <p>Além disso, a iniciativa ajuda a reduzir custos de transporte e a circulação de carros, tornando o trajeto mais econômico e sustentável e possibilitando a criação de novas amizades.</p>
        </section>
        <section className="panel">
          <h2>Como funciona</h2>
          <p>O estudante realiza seu cadastro informando seus dados e as informações necessárias para encontrar uma carona. Depois, pode buscar pessoas que fazem um trajeto parecido, informando horário, destino e faculdade. O sistema apresenta as opções compatíveis.</p>
        </section>
        <section className="panel">
          <h2>Segurança e confiança</h2>
          <p>O projeto é pensado para aproximar estudantes e incentivar que as caronas aconteçam entre pessoas da comunidade universitária. Antes de combinar uma viagem, os usuários devem confirmar os detalhes do trajeto e combinar os pontos de encontro.</p>
        </section>
      </main>
      <footer className="site-footer">CaronaU — conectando estudantes e caminhos.</footer>
    </>
  );
}
