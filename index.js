/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>CaronaU | Encontre sua carona</title>
        <meta name="description" content="Plataforma para conectar estudantes que fazem trajetos parecidos." />
      </Head>
      <Header />
      <main>
        <div className="intro">
          <p className="eyebrow">Mais perto. Mais simples. Mais econômico.</p>
          <h2>Compartilhe o caminho até a faculdade</h2>
          <p>Encontre estudantes com trajetos parecidos e torne o deslocamento mais fácil.</p>
        </div>

        <section id="cadastro" className="panel">
          <h2>Cadastro de usuário</h2>
          <p className="texto-ajuda">Preencha seus dados para fazer parte da comunidade CaronaU.</p>
          <form>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" name="nome" type="text" placeholder="Seu nome" />

            <label htmlFor="faculdade">Faculdade:</label>
            <input id="faculdade" name="faculdade" type="text" placeholder="Nome da faculdade" />

            <label htmlFor="localizacao">Localização:</label>
            <input id="localizacao" name="localizacao" type="text" placeholder="Bairro ou cidade" />

            <label htmlFor="email">E-mail:</label>
            <input id="email" name="email" type="email" placeholder="nome@exemplo.com" />

            <button className="button-submit" type="button">Cadastrar</button>
          </form>
        </section>

        <section id="busca" className="panel">
          <h2>Buscar carona</h2>
          <p className="texto-ajuda">Informe seu destino e encontre opções de trajeto.</p>
          <form>
            <label htmlFor="destino">Destino:</label>
            <input id="destino" name="destino" type="text" placeholder="Para onde você vai?" />

            <label htmlFor="horario">Horário:</label>
            <input id="horario" name="horario" type="time" />

            <label htmlFor="partida">Ponto de partida:</label>
            <input id="partida" name="partida" type="text" placeholder="De onde você sai?" />

            <button className="button-submit" type="button">Buscar carona</button>
          </form>
        </section>
      </main>
      <footer className="site-footer">CaronaU — conectando estudantes e caminhos.</footer>
    </>
  );
}
