<!-- Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 -->

# CaronaU — Projeto Borboleta, Parte 4 (Check-in 4)

**Repositório no GitHub:**

## 1. Sobre o projeto

O CaronaU é uma plataforma pensada para conectar estudantes que fazem trajetos parecidos até a faculdade. A proposta é facilitar o deslocamento, ajudar a dividir custos e incentivar uma alternativa mais sustentável para a comunidade universitária.

Esta entrega corresponde ao **Check-in 4 do Projeto Borboleta**: avanço da migração com a implementação do **roteamento simples e dinâmico do Next.js**. O projeto usa o **App Router** (pasta `src/app`). A rota de API interna e o consumo via `fetch` ficam para o Check-in 5.

## 2. Ideação e protótipos

O projeto foi planejado para estudantes universitários que enfrentam custos e dificuldades para chegar à faculdade. Os protótipos do planejamento incluem telas para a página inicial, cadastro, busca de caronas, detalhes de uma carona, oferta de carona e informações sobre o projeto.

Nesta etapa, a tela de **detalhes de uma carona** do protótipo passou a existir de verdade, como uma rota dinâmica. A interface mantém a identidade visual do projeto: tons de vermelho e rosa claro, cartões com bordas arredondadas, formulários simples e navegação entre páginas.

## 3. Caráter extensionista

O CaronaU tem caráter extensionista porque busca atender a uma necessidade real da comunidade estudantil: encontrar trajetos compartilhados com outros estudantes. A proposta pode reduzir gastos com transporte, facilitar a rotina e diminuir a quantidade de carros usados individualmente.

Nesta fase, o site continua sendo um protótipo acadêmico. As caronas exibidas são **dados fictícios de demonstração**; cadastros e solicitações de vaga **não são enviados a nenhum servidor**.

## 4. Por que migrar para componentes React?

No Projeto Lagarta, cada página repetia seu próprio HTML e a interatividade manipulava elementos diretamente. Com React, a interface passa a ser uma função do **estado**, e partes repetidas viram **componentes reutilizáveis**.

Exemplos concretos neste projeto:

- `Panel` desenha todos os cartões brancos do site, inclusive o cartão de detalhes de uma carona.
- `CardCarona` e `ListaCaronas` são usados em dois lugares diferentes: nos resultados da busca da página inicial e na página `/caronas`. Quando o cartão ganhou o link "Ver detalhes", a mudança foi feita **uma vez** e apareceu nos dois.
- `Layout` agrupa cabeçalho e rodapé. O link "Caronas" foi adicionado em `Header.js` e passou a existir em todas as páginas.
- Componentes sem estado rodam apenas no servidor, e só os que precisam de interatividade (`"use client"`) vão para o navegador.

## 5. Mapa de rotas

| Endereço | Tipo | Arquivo | O que mostra |
|---|---|---|---|
| `/` | simples | `src/app/page.js` | Cadastro e busca de caronas |
| `/sobre` | simples | `src/app/sobre/page.js` | Sobre o projeto |
| `/historico` | simples | `src/app/historico/page.js` | Histórico de buscas |
| `/caronas` | simples | `src/app/caronas/page.js` | Lista de todas as caronas |
| `/caronas/[id]` | **dinâmica** | `src/app/caronas/[id]/page.js` | Detalhes de uma carona (ex.: `/caronas/3`) |

## 6. Organização dos arquivos

```
src/
  app/
    layout.js                      layout raiz (html, body, CSS global)
    globals.css                    estilos globais
    page.js                        rota /
    sobre/page.js                  rota /sobre
    historico/page.js              rota /historico
    caronas/
      page.js                      rota /caronas
      [id]/
        page.js                    rota dinâmica /caronas/[id]
        not-found.js               tela exibida quando o id não existe
  components/
    Aviso, CampoFormulario, CardCarona, DetalheCarona, Footer, FormularioBusca,
    FormularioCadastro, Header, HistoricoLista, Layout, ListaCaronas, Panel,
    SolicitarVaga, BuscaCaronas      (+ arquivos *.module.css)
  data/caronas.js                  caronas fictícias (futuramente virá da API)
  lib/busca.js                     filtro e busca por id
  lib/historico.js                 histórico no navegador (localStorage)
```

Os estilos seguem a regra do projeto: `globals.css` para o que é geral e **CSS Modules** (`*.module.css`) para estilos de componentes específicos.

## 7. Como o roteamento funciona no Next.js (App Router)

No App Router, **cada pasta dentro de `src/app` é um trecho da URL**, e o arquivo `page.js` dentro dela é a página daquele endereço:

- `src/app/sobre/page.js` → `/sobre`
- `src/app/caronas/page.js` → `/caronas`

Isso é uma **rota simples**: o endereço é sempre o mesmo.

Quando o nome da pasta vem entre colchetes, como `[id]`, ela vira um **segmento dinâmico**: aceita qualquer valor naquele trecho da URL, e esse valor chega à página como parâmetro.

- `src/app/caronas/[id]/page.js` → `/caronas/1`, `/caronas/2`, `/caronas/3`...

A navegação entre páginas usa o componente `Link` de `next/link`, que troca de página sem recarregar o site inteiro.

## 8. Trechos de código explicados

> Seguindo as diretrizes da disciplina, os arquivos de código não têm comentários explicativos. As explicações ficam aqui no tutorial.

### 8.1 Rota simples: `/caronas`

```jsx
export const metadata = {
  title: "Caronas | CaronaU",
};

export default function Caronas() {
  return (
    <Layout tituloHeader="Caronas disponíveis" classeMain="page-content">
      <Panel titulo="Todas as caronas" ajuda="Escolha uma carona para ver os detalhes.">
        <ListaCaronas caronas={caronas} />
      </Panel>
    </Layout>
  );
}
```

É só um componente exportado por `page.js`. O `metadata` define o título da aba do navegador. A lista reaproveita `ListaCaronas`, o mesmo componente dos resultados da busca, passando todas as caronas em vez de uma lista filtrada.

### 8.2 Ligando a lista à rota dinâmica: link no cartão

```jsx
const { id, motorista, origem, destino, horario, vagas } = carona;

<Link className={styles.verDetalhes} href={`/caronas/${id}`}>Ver detalhes →</Link>
```

O `href` é montado com o `id` da carona: a carona de `id` 3 leva a `/caronas/3`. Como o `CardCarona` é usado em vários lugares, todos os cartões ganham o link de uma vez.

### 8.3 Rota dinâmica: `/caronas/[id]`

```jsx
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
```

Passo a passo:

1. **`params`**: o Next entrega à página um objeto `params` com o valor da URL. Para `/caronas/3`, o resultado é `{ id: "3" }`. Nesta versão do Next, `params` é uma **Promise**, por isso o `await params`. Repare que o `id` chega como **texto** (`"3"`), não como número.
2. **`encontrarCaronaPorId`**: procura na lista a carona com esse id (veja o item 8.4).
3. **`notFound()`**: se nenhuma carona for encontrada, interrompe a renderização e mostra o `not-found.js` da pasta (item 8.5).
4. **`generateStaticParams`**: informa ao Next quais valores de `id` existem (`"1"` a `"6"`), para ele já deixar essas páginas prontas no momento do build. Ids que não estão na lista, como `/caronas/999`, são tratados na hora do acesso e caem no `notFound()`.
5. **`Suspense`**: o `next.config.mjs` do projeto usa `cacheComponents: true`. Nesse modo, o Next separa o que pode ser montado antes do acesso do que depende de dados conhecidos só na hora do acesso, e o valor de `params` entra nessa segunda categoria. Por isso a leitura de `params` fica num componente separado (`ConteudoCarona`) dentro de `<Suspense>`. Enquanto ele resolve, aparece o `fallback`.

### 8.4 Busca por id

```js
export function encontrarCaronaPorId(caronas, id) {
  return caronas.find((carona) => String(carona.id) === String(id)) ?? null;
}
```

O `id` da URL é texto e o `id` da carona é número, então os dois são convertidos com `String(...)` antes de comparar. `find` devolve a primeira carona que bate, ou `undefined` se nenhuma bater; o `?? null` transforma isso em `null`, e o `if (!carona)` da página trata esse caso. A comparação é estrita: `/caronas/01` **não** é a carona 1.

### 8.5 Página de erro da rota dinâmica

```jsx
export default function CaronaNaoEncontrada() {
  return (
    <Layout tituloHeader="Carona não encontrada" classeMain="page-content">
      <Panel titulo="Carona não encontrada" ajuda="Não existe nenhuma carona com esse código. Ela pode ter sido removida ou o endereço está incorreto.">
        <Link className="link-acao" href="/caronas">← Ver todas as caronas</Link>
      </Panel>
    </Layout>
  );
}
```

`not-found.js` é um nome especial do Next. Quando `notFound()` é chamada dentro da pasta `[id]`, este componente é exibido no lugar da página.

### 8.6 Interatividade na página de detalhes (`useState`)

```jsx
"use client";

export default function SolicitarVaga() {
  const [solicitada, setSolicitada] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setSolicitada(true)} disabled={solicitada}>
        {solicitada ? "Vaga solicitada" : "Solicitar vaga"}
      </button>

      {solicitada ? (
        <Aviso tipo="sucesso">
          Solicitação registrada! Neste protótipo, ela ainda não é enviada ao motorista.
        </Aviso>
      ) : null}
    </>
  );
}
```

A página de detalhes (`DetalheCarona`) só exibe dados, então roda no servidor. O botão precisa reagir a cliques e guardar estado, por isso fica em um componente separado com `"use client"`. O estado `solicitada` começa como `false`; ao clicar, vira `true`, o botão fica desabilitado, muda de texto e a mensagem de sucesso aparece.

## 9. Componentes de servidor e de cliente

No App Router, todo componente é de **servidor** por padrão. Ele não pode usar `useState`, `useEffect` nem eventos como `onClick`. Para isso, o arquivo precisa começar com `"use client"`.

| Componente | Tipo | Motivo |
|---|---|---|
| páginas (`page.js`), `Layout`, `Header`, `Panel`, `DetalheCarona` | servidor | só exibem dados |
| `BuscaCaronas`, `FormularioBusca`, `FormularioCadastro`, `HistoricoLista`, `SolicitarVaga` | cliente | usam estado, efeitos ou eventos |

## 10. Como executar o projeto

É necessário ter o Node.js instalado.

1. Baixe ou clone o repositório e abra a pasta do projeto no terminal ou no VS Code.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra `http://localhost:3000` no navegador.

Para conferir se a versão de produção compila, use `npm run build`.

### Roteiro de testes manuais

1. **Menu:** o cabeçalho tem o link "Caronas". Clique e confira se abre `/caronas` com 6 cartões.
2. **Link do cartão:** clique em "Ver detalhes" da carona 3. A URL deve ser `/caronas/3` e mostrar Beatriz L., Perdizes → Campus Alphaville, 08:00.
3. **Todas as caronas:** repita com as caronas 1 a 6 e confira que cada URL mostra a carona certa.
4. **Id inexistente:** digite `http://localhost:3000/caronas/999` na barra de endereço. Deve aparecer "Carona não encontrada" com o link de volta.
5. **Id inválido:** teste `/caronas/abc` e `/caronas/01`. Ambos devem cair na tela "Carona não encontrada".
6. **Botão de vaga:** em `/caronas/1`, clique em "Solicitar vaga". O botão deve ficar desabilitado como "Vaga solicitada" e aparecer o aviso verde.
7. **Voltar:** clique em "← Voltar para as caronas" e use também o botão voltar do navegador.
8. **Busca na página inicial:** busque por `Higienópolis`. Os cartões encontrados também devem ter "Ver detalhes" funcionando.
9. **Páginas anteriores:** confira que `/`, `/sobre` e `/historico` continuam funcionando (cadastro com validação, histórico e limpeza do histórico).

## 11. O que mudou em relação à Parte 3

**Novo**
- Rota simples `/caronas` e rota dinâmica `/caronas/[id]`.
- `not-found.js` para ids inexistentes.
- Componentes `DetalheCarona` e `SolicitarVaga`.
- Função `encontrarCaronaPorId` em `lib/busca.js`.
- Link "Caronas" no cabeçalho e "Ver detalhes" nos cartões.

**Ajustes de organização**
- Removido o `page.module.css` que veio do template do `create-next-app` e não era usado.
- Removidos imports sem uso (`next/head` em `Layout.js` e as fontes Geist em `layout.js`) e a propriedade `titulo` do `Layout`, que não tinha efeito, já que o título agora vem do `metadata` de cada página.
- Comentário de autoria acrescentado nos arquivos que não tinham (`layout.js`, `page.js`, `BuscaCaronas.js`, `next.config.mjs`, `eslint.config.mjs`) e removido onde estava duplicado.
- Removidos os comentários explicativos que vieram nos arquivos de configuração do template, seguindo a regra do projeto.
- `.gitignore` agora ignora também `.next` e outros arquivos gerados (a pasta `.next` não deve ir para o GitHub).
- Este README substitui o texto padrão do `create-next-app`.

## 12. Próximos passos

**Check-in 5 (API):** criar a rota de API interna do Next.js (`src/app/api/.../route.js`) devolvendo os dados das caronas em um JSON fixo, e consumi-la com `fetch` dentro de um `useEffect`, substituindo a importação direta de `data/caronas.js`. A função `encontrarCaronaPorId` e os `id` já existentes facilitam essa troca.

## 13. Aprendizados

- Em React, a tela é consequência do estado, e o que se repete vira componente.
- No App Router, a estrutura de pastas define as URLs: pasta = trecho do endereço e `page.js` = página.
- Uma pasta com nome entre colchetes cria uma rota dinâmica, e o valor da URL chega em `params`.
- O valor que vem da URL é sempre texto, então é preciso converter antes de comparar com números.
- É preciso tratar o caso em que o id não existe, com `notFound()` e `not-found.js`.
- Componentes são de servidor por padrão, e só o que usa estado ou eventos precisa de `"use client"`.
- O que fica no repositório importa: arquivos gerados, como `.next` e `node_modules`, devem estar no `.gitignore`.

## 14. Uso de inteligência artificial

Foi utilizada uma ferramenta de IA generativa (Claude, da Anthropic) como apoio nesta etapa, para:

- planejar a rota dinâmica e a página de detalhes;
- sugerir a limpeza dos arquivos (autoria, imports sem uso, `.gitignore`);
- diagnosticar um erro de build (`Module not found: Can't resolve '../../components/Layout'`), causado por caminhos de import errados em `src/app/page.js` e por três arquivos com o conteúdo trocado (`src/app/page.js`, `src/app/layout.js` e `src/components/Layout.js`), além de um acento corrompido em `src/app/caronas/page.js`.


## 15. Equipe

| Nome | RA |
|---|---|
| Carolina Mason | 10771365 |
| Dhara Dantas | 10780188 |
| Giovanna Cseri | 10771364 |
| Natalia Ramos | 10771391 |
