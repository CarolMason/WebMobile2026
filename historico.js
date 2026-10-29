/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Head from "next/head";
import Header from "../components/Header";

export default function Historico() {
  return (
    <>
      <Head><title>Histórico | CaronaU</title></Head>
      <Header titulo="Histórico de buscas" />
      <main className="page-content">
        <section className="panel">
          <h2>Suas buscas recentes</h2>
          <p className="texto-ajuda">Nesta etapa da migração, esta página contém a estrutura visual. O histórico será conectado à interatividade nas próximas etapas do Projeto Borboleta.</p>
          <ul className="history-list">
            <li><span>Santana → Mackenzie - Campus Higienópolis</span><span className="history-time">07:30</span></li>
            <li><span>Perdizes → Mackenzie - Campus Alphaville</span><span className="history-time">08:00</span></li>
            <li><span>Jundiaí → Mackenzie - Campus Higienópolis</span><span className="history-time">07:50</span></li>
          </ul>
          <p className="history-note">Os itens acima são exemplos visuais, não dados salvos de usuários.</p>
        </section>
      </main>
      <footer className="site-footer">CaronaU — conectando estudantes e caminhos.</footer>
    </>
  );
}
