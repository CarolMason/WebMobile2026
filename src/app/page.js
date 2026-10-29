import Layout from "../components/Layout";
import Panel from "../components/Panel";
import FormularioCadastro from "../components/FormularioCadastro";
import BuscaCaronas from "../components/BuscaCaronas";

export const metadata = {
  title: "CaronaU | Encontre sua carona",
  description: "Plataforma para conectar estudantes que fazem trajetos parecidos.",
};

export default function Home() {
  return (
    <Layout>
      <div className="intro">
        <p className="eyebrow">Mais perto. Mais simples. Mais econômico.</p>
        <h2>Compartilhe o caminho até a faculdade</h2>
        <p>Encontre estudantes com trajetos parecidos e torne o deslocamento mais fácil.</p>
      </div>

      <Panel id="cadastro" titulo="Cadastro de usuário" ajuda="Preencha seus dados para fazer parte da comunidade CaronaU.">
        <FormularioCadastro />
      </Panel>

      <BuscaCaronas />
    </Layout>
  );
}
