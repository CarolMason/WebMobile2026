<!-- Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 -->

# CaronaU — Projeto Borboleta, Parte 2

## 1. Sobre o projeto

O CaronaU é uma plataforma pensada para conectar estudantes que fazem trajetos parecidos até a faculdade. A proposta é facilitar o deslocamento, ajudar a dividir custos e incentivar uma alternativa mais sustentável para a comunidade universitária.

Esta entrega corresponde ao **Check-in 2 do Projeto Borboleta**: criação da estrutura inicial em Next.js e migração do HTML e do CSS geral do Projeto Lagarta. A interatividade, a API e as rotas dinâmicas serão desenvolvidas nas etapas seguintes.

## 2. Ideação e protótipos

O projeto foi planejado para estudantes universitários que enfrentam custos e dificuldades para chegar à faculdade. Os protótipos incluídos no planejamento apresentam telas para a página inicial, cadastro, busca de caronas, detalhes de uma carona, oferta de carona e informações sobre o projeto.

A interface mantém a identidade visual do projeto anterior: tons de vermelho e rosa claro, cartões com bordas arredondadas, formulários simples e navegação entre as páginas.

## 3. Caráter extensionista

O CaronaU tem caráter extensionista porque busca atender a uma necessidade real da comunidade estudantil: encontrar trajetos compartilhados com outros estudantes. A proposta pode contribuir para reduzir gastos com transporte, facilitar a rotina e diminuir a quantidade de carros usados individualmente. A aplicação apresentada nesta fase é um protótipo acadêmico e ainda não realiza a conexão real entre usuários.

## 4. Por que migrar para componentes React e Next.js?

No Projeto Lagarta, as páginas foram montadas com HTML, o estilo ficou em um arquivo CSS e a interatividade foi feita com JavaScript manipulando elementos da página. Na migração, a interface passa a ser escrita com componentes React.

Um componente permite reaproveitar partes da interface. Por exemplo, o componente `Header` é usado na página inicial, na página Sobre e na página Histórico, evitando repetir o mesmo código de navegação. O Next.js também organiza as páginas a partir dos arquivos da pasta `pages`: `index.js` representa a rota `/`, `sobre.js` representa `/sobre` e `historico.js` representa `/historico`.

O arquivo `styles/globals.css` reúne os estilos gerais para manter cores, tipografia, formulários e espaçamentos consistentes em todas as páginas.

## 5. Organização dos arquivos

- `pages/index.js`: página inicial com os formulários de cadastro e busca.
- `pages/sobre.js`: informações sobre a proposta e seu funcionamento.
- `pages/historico.js`: estrutura visual da página de histórico.
- `pages/_app.js`: importa o CSS global para todas as páginas.
- `components/Header.js`: cabeçalho e links de navegação reutilizáveis.
- `styles/globals.css`: estilos globais e ajustes para telas menores.
- `package.json`: dependências e comandos para executar o projeto.

## 6. Trechos de código explicados

### Componente reutilizável do cabeçalho

```jsx
import Link from "next/link";

export default function Header({ titulo = "CaronaU" }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1><Link href="/">{titulo}</Link></h1>
        <nav aria-label="Navegação principal">
          <ul>
            <li><Link href="/#cadastro">Cadastro</Link></li>
            <li><Link href="/#busca">Buscar carona</Link></li>
            <li><Link href="/historico">Histórico</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
```

O componente `Header` concentra o cabeçalho e a navegação. Ele pode ser importado em várias páginas. A propriedade `titulo` permite mudar o texto do título sem precisar criar outro cabeçalho. O componente `Link`, do Next.js, faz a navegação entre as páginas da aplicação.

### Importação do CSS global

```jsx
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

O arquivo `_app.js` envolve as páginas da aplicação. Ao importar `globals.css` nele, os estilos gerais ficam disponíveis em todas as rotas.

### Rota de página no Next.js

O arquivo `pages/sobre.js` gera a página `/sobre`. Da mesma forma, `pages/index.js` gera a rota inicial `/`. Nesta etapa, ainda não foi criada a rota de API: ela faz parte de um check-in posterior do projeto.

## 7. Como executar o projeto

É necessário ter o Node.js instalado.

1. Extraia o arquivo ZIP.
2. Abra a pasta `CaronaU_Borboleta_Parte2` no terminal ou no VS Code.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra `http://localhost:3000` no navegador.
6. Teste a navegação entre a página inicial, Sobre e Histórico.

Para conferir se a versão de produção pode ser compilada, use `npm run build`.

## 8. O que foi migrado nesta etapa

- Estrutura principal do HTML convertida para JSX.
- Estilos gerais organizados em `styles/globals.css`.
- Cabeçalho transformado em componente reutilizável.
- Páginas iniciais criadas com o roteamento baseado em arquivos do Next.js.
- Ajustes responsivos para telas menores.

Os botões e formulários são, por enquanto, parte da estrutura visual. A lógica de cadastro, busca e histórico será migrada para React nas próximas etapas, usando estado e efeitos conforme as orientações do projeto.

## 9. Uso de inteligência artificial

Foi utilizada uma ferramenta de IA como apoio para organizar a migração inicial do HTML e CSS para a estrutura do Next.js, sugerir a separação do cabeçalho em um componente reutilizável e preparar este tutorial. O grupo deve revisar o código, testar a aplicação e compreender cada arquivo antes da apresentação, conforme as orientações da disciplina.

## 10. Equipe

| Nome | RA |
|---|---|
| Carolina Mason | 10771365 |
| Dhara Dantas | 10780188 |
| Giovanna Cseri | 10771364 |
| Natalia Ramos | 10771391 |
