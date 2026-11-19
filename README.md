<!-- Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 -->

# CaronaU — Projeto Borboleta, Parte 6 (Check-in 6)

**Repositório no GitHub:** https://github.com/CarolMason/WebMobile2026

## 1. Sobre o projeto

O CaronaU é uma plataforma pensada para conectar estudantes que fazem trajetos parecidos até a faculdade. A proposta é facilitar o deslocamento, ajudar a dividir custos e incentivar uma alternativa mais sustentável para a comunidade universitária.

Esta entrega corresponde ao **Check-in 6 do Projeto Borboleta**: uma **API própria, criada do zero**, que **guarda o histórico de buscas no servidor** (`/api/historico`). Ela se soma à integração com a **API pública** [ViaCEP](https://viacep.com.br/) (Check-in 5), em que o estudante digita o CEP no cadastro e o site preenche a **Localização** com bairro, cidade e UF. O projeto continua usando o **App Router** (pasta `src/app`) e mantém o roteamento simples e dinâmico feito no Check-in 4.

## 2. Ideação e protótipos

O projeto foi planejado para estudantes universitários que enfrentam custos e dificuldades para chegar à faculdade. Os protótipos do planejamento incluem telas para a página inicial, cadastro, busca de caronas, detalhes de uma carona, oferta de carona e informações sobre o projeto.

Nesta etapa, a tela de **detalhes de uma carona** do protótipo passou a existir de verdade, como uma rota dinâmica. A interface mantém a identidade visual do projeto: tons de vermelho e rosa claro, cartões com bordas arredondadas, formulários simples e navegação entre páginas.

## 3. Caráter extensionista

O CaronaU tem caráter extensionista porque busca atender a uma necessidade real da comunidade estudantil: encontrar trajetos compartilhados com outros estudantes. A proposta pode reduzir gastos com transporte, facilitar a rotina e diminuir a quantidade de carros usados individualmente.

Nesta fase, o site continua sendo um protótipo acadêmico. As caronas exibidas são **dados fictícios de demonstração**; cadastros e solicitações de vaga **não são enviados a nenhum servidor**. A única informação guardada no servidor é o **histórico de buscas** (destino, horário e ponto de partida), ligado a um identificador aleatório do navegador, sem nome nem dados pessoais. A única comunicação externa é a consulta de CEP ao ViaCEP, que recebe apenas os 8 números do CEP.

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
| `/api/historico` | **API** (Route Handler) | `src/app/api/historico/route.js` | Histórico de buscas em JSON (`GET`, `POST`, `DELETE`) |

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
    api/
      historico/route.js           API interna do histórico (GET, POST, DELETE)
  components/
    Aviso, CampoFormulario, CardCarona, DetalheCarona, Footer, FormularioBusca,
    FormularioCadastro, Header, HistoricoLista, Layout, ListaCaronas, Panel,
    SolicitarVaga, BuscaCaronas      (+ arquivos *.module.css)
  data/caronas.js                  caronas fictícias (futuramente virá da API)
  lib/busca.js                     filtro e busca por id
  lib/historico.js                 cliente da API de histórico (fetch para /api/historico)
  lib/historicoStore.js            armazenamento do histórico no servidor (arquivo .data/historico.json)
  lib/viacep.js                    consulta de CEP na API pública ViaCEP
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

## 8. Integração com a API pública ViaCEP

### 8.1 Sobre a API

O [ViaCEP](https://viacep.com.br/) é um webservice **gratuito e público** para consultar endereços a partir do CEP. Não precisa de cadastro nem de chave de acesso, e aceita chamadas direto do navegador (CORS liberado).

| Item | Valor |
|---|---|
| Endpoint usado | `GET https://viacep.com.br/ws/{cep}/json/` |
| Parâmetro | `cep`: 8 números, sem traço (ex.: `01302907`) |
| Formato da resposta | JSON |
| Autenticação | nenhuma |

Exemplo de resposta para `https://viacep.com.br/ws/01302907/json/` (campos principais):

```json
{
  "cep": "01302-907",
  "logradouro": "Rua da Consolação",
  "bairro": "Consolação",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

Casos de erro tratados:

| Situação | O que a API devolve | O que o site mostra |
|---|---|---|
| CEP com formato inválido (menos de 8 números) | status `400` | não chega a chamar a API: "O CEP precisa ter 8 números." |
| CEP com formato válido, mas inexistente (ex.: `99999999`) | status `200` com `{ "erro": "true" }` | "CEP não encontrado." |
| Sem internet ou API fora do ar | falha no `fetch` | "Não foi possível consultar o CEP. Verifique sua conexão." |

### 8.2 Onde a API é usada

Na página inicial (`/`), o formulário **Cadastro de usuário** ganhou o campo **CEP (opcional)**, antes de **Localização**:

1. Enquanto o usuário digita, o CEP é formatado como `00000-000`.
2. Ao completar 8 números, o site chama o ViaCEP automaticamente e mostra "Buscando endereço...".
3. Se o CEP existir, o campo **Localização** é preenchido com `Bairro, Cidade - UF` e aparece "Endereço encontrado: ...". O usuário ainda pode editar esse campo.
4. Se der erro, a mensagem aparece em vermelho embaixo do campo CEP, no mesmo padrão das outras validações.

O CEP é opcional: quem não quiser informar pode continuar digitando a localização à mão.

### 8.3 Código: `src/lib/viacep.js`

```js
const URL_VIACEP = "https://viacep.com.br/ws";

export function limparCep(cep) {
  return cep.replace(/\D/g, "");
}

export function cepValido(cep) {
  return /^\d{8}$/.test(limparCep(cep));
}

export async function buscarCep(cep) {
  const numeros = limparCep(cep);

  if (!cepValido(numeros)) {
    throw new Error("O CEP precisa ter 8 números.");
  }

  let resposta;
  try {
    resposta = await fetch(`${URL_VIACEP}/${numeros}/json/`);
  } catch {
    throw new Error("Não foi possível consultar o CEP. Verifique sua conexão.");
  }

  if (!resposta.ok) {
    throw new Error("Não foi possível consultar o CEP agora. Tente novamente.");
  }

  const dados = await resposta.json();

  if (dados.erro) {
    throw new Error("CEP não encontrado.");
  }

  return { cep: dados.cep, logradouro: dados.logradouro, bairro: dados.bairro, localidade: dados.localidade, uf: dados.uf };
}
```

Toda a comunicação com a API fica isolada neste arquivo, separada da tela:

- **`limparCep`** remove tudo que não é número (`"01302-907"` vira `"01302907"`).
- **`cepValido`** confere se sobraram exatamente 8 números. Assim, CEPs incompletos nem chegam a gerar uma chamada.
- **`buscarCep`** é `async`: o `fetch` faz a requisição `GET` e o `await` espera a resposta sem travar a página. Há três verificações: o `try/catch` em volta do `fetch` pega falhas de rede; `resposta.ok` pega respostas com status de erro (como o `400`); e `dados.erro` pega o caso do CEP inexistente, em que o ViaCEP responde `200` mas com `{ "erro": "true" }`. Em todos os casos a função lança um `Error` com uma mensagem pronta para mostrar ao usuário.
- A função devolve só os campos que o site usa, para a tela não depender do formato completo da resposta.

O arquivo também tem `formatarCep` (coloca o traço) e `montarLocalizacao`, que junta bairro, cidade e UF no texto `Consolação, São Paulo - SP`.

### 8.4 Código: chamando a API no `FormularioCadastro`

```jsx
const [buscandoCep, setBuscandoCep] = useState(false);
const [enderecoCep, setEnderecoCep] = useState("");
const ultimoCep = useRef("");

async function consultarCep(cep) {
  ultimoCep.current = cep;
  setBuscandoCep(true);
  setEnderecoCep("");

  try {
    const endereco = await buscarCep(cep);
    if (ultimoCep.current !== cep) return;
    setDados((anterior) => ({ ...anterior, localizacao: montarLocalizacao(endereco) }));
    setErros((anterior) => ({ ...anterior, cep: undefined, localizacao: undefined }));
    setEnderecoCep([endereco.logradouro, montarLocalizacao(endereco)].filter(Boolean).join(", "));
  } catch (erro) {
    if (ultimoCep.current !== cep) return;
    setErros((anterior) => ({ ...anterior, cep: erro.message }));
  } finally {
    if (ultimoCep.current === cep) setBuscandoCep(false);
  }
}

function atualizarCep(evento) {
  const cep = formatarCep(evento.target.value);
  setDados((anterior) => ({ ...anterior, cep }));
  setErros((anterior) => ({ ...anterior, cep: undefined }));
  setNomeCadastrado("");
  setEnderecoCep("");

  if (cepValido(cep)) {
    consultarCep(limparCep(cep));
  } else {
    ultimoCep.current = "";
    setBuscandoCep(false);
  }
}
```

Passo a passo:

1. **Quando chamar a API:** a consulta é disparada dentro do evento de digitação (`onChange` do campo CEP), assim que o CEP fica completo. Não foi preciso usar `useEffect`, porque a chamada é consequência direta de uma ação do usuário.
2. **Estados da tela:** `buscandoCep` controla a mensagem "Buscando endereço...", `enderecoCep` guarda o texto "Endereço encontrado" e o erro do CEP vai para o mesmo objeto `erros` usado nas outras validações. A tela só reage a esses estados.
3. **Resposta fora de ordem (`useRef`):** se o usuário digitar um CEP e logo trocar por outro, a resposta do primeiro pode chegar depois. O `ultimoCep` guarda o CEP mais recente, e respostas de CEPs antigos são ignoradas. Foi usado `useRef` em vez de `useState` porque esse valor não aparece na tela e não precisa redesenhar o componente.
4. **`finally`:** roda tanto no sucesso quanto no erro, garantindo que a mensagem "Buscando endereço..." sempre suma.
5. O `FormularioCadastro` já era um componente de cliente (`"use client"`), então o `fetch` roda direto no navegador do usuário.

## 9. API própria: histórico de buscas (Check-in 6)

### 9.1 Visão geral

Até o Check-in 5, o histórico de buscas ficava no `localStorage` do navegador. Agora o projeto tem uma **API própria, criada do zero**, que guarda o histórico no servidor. Ela é um **Route Handler** do Next.js: um arquivo `route.js` dentro de `src/app` que responde a requisições HTTP em vez de desenhar uma página.

| Método | Endereço | Corpo da requisição | Resposta |
|---|---|---|---|
| `GET` | `/api/historico` | nenhum | `200` com `{ "itens": [...] }` |
| `POST` | `/api/historico` | `{ "destino", "horario", "partida" }` | `201` com `{ "itens": [...] }`, `400` (dados inválidos) ou `413` (corpo grande demais) |
| `DELETE` | `/api/historico` | nenhum | `200` com `{ "itens": [] }` |

Se algo falhar no servidor, a resposta é `500` com `{ "erro": "..." }`. Os detalhes técnicos vão só para o log do servidor, nunca para o usuário.

Exemplo de resposta de `GET /api/historico`:

```json
{
  "itens": [
    { "destino": "Mackenzie", "horario": "07:30", "partida": "Santana", "id": 1795089416593 }
  ]
}
```

As buscas vêm da mais recente para a mais antiga, no máximo 10 por visitante.

### 9.2 Como cada visitante tem o seu histórico

O site não tem login. Por isso, na primeira busca salva, a API cria um identificador aleatório (`randomUUID`) e o envia ao navegador no cookie `caronau_visitante`. Nas próximas requisições o navegador devolve o cookie, e a API usa esse valor para separar os dados.

| Atributo do cookie | Valor | Para quê |
|---|---|---|
| `httpOnly` | `true` | o JavaScript da página não consegue ler o cookie |
| `sameSite` | `strict` | o cookie não é enviado em requisições vindas de outros sites |
| `secure` | `true` em produção | o cookie só trafega por HTTPS |
| `path` | `/api/historico` | o cookie só vai para esta API |
| `maxAge` | 1 ano | duração do cookie |

Consequência: quem trocar de navegador ou apagar os cookies perde o acesso ao histórico antigo. Um `GET` ou `DELETE` sem cookie não cria nenhum visitante; só o `POST` cria.

### 9.3 Código: `src/app/api/historico/route.js`

```js
async function obterVisitante({ criar }) {
  const jar = await cookies();
  const existente = jar.get(COOKIE)?.value;
  if (existente && UUID.test(existente)) return existente;
  if (!criar) return null;

  const novo = randomUUID();
  jar.set(COOKIE, novo, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/api/historico",
    maxAge: UM_ANO,
  });
  return novo;
}

function validarBusca(corpo) {
  if (!corpo || typeof corpo !== "object" || Array.isArray(corpo)) return null;
  const { destino, horario = "", partida = "" } = corpo;

  if (typeof destino !== "string" || typeof horario !== "string" || typeof partida !== "string") return null;

  const busca = { destino: destino.trim(), horario, partida: partida.trim() };
  if (!busca.destino || busca.destino.length > 100 || busca.partida.length > 100) return null;
  if (busca.horario !== "" && !/^([01]\d|2[0-3]):[0-5]\d$/.test(busca.horario)) return null;
  return busca;
}

export async function POST(request) {
  try {
    const texto = await request.text();
    if (texto.length > TAMANHO_MAXIMO_CORPO) return erro("Requisição inválida.", 413);

    let corpo;
    try {
      corpo = JSON.parse(texto);
    } catch {
      return erro("Requisição inválida.", 400);
    }

    const busca = validarBusca(corpo);
    if (!busca) return erro("Dados da busca inválidos.", 400);

    const visitante = await obterVisitante({ criar: true });
    const itens = await adicionarBusca(visitante, busca);
    return Response.json({ itens }, { status: 201 });
  } catch (e) {
    console.error("Falha ao salvar a busca", e);
    return erro("Não foi possível salvar a busca.", 500);
  }
}
```

Passo a passo:

1. **Uma função por método:** o Next chama `GET`, `POST` ou `DELETE` conforme o método da requisição. Qualquer outro método recebe `405` automaticamente.
2. **Validação no servidor:** a validação do formulário no navegador não basta, porque qualquer pessoa pode chamar a API diretamente. `validarBusca` confere que `destino`, `horario` e `partida` são texto, que o destino não está vazio, que os textos têm no máximo 100 caracteres e que o horário segue o formato `HH:MM`. Só os três campos esperados são salvos; qualquer campo extra enviado é descartado.
3. **Limite de tamanho:** corpos com mais de 2000 caracteres são rejeitados com `413` antes mesmo de serem interpretados.
4. **Cookie validado:** o valor do cookie só é aceito se tiver o formato de um UUID. Um cookie adulterado é ignorado.
5. **Erros genéricos:** o `catch` registra o erro completo com `console.error` e devolve só uma mensagem simples ao cliente.
6. **Sem cache:** como a API lê `cookies()`, ela roda a cada requisição. Isso é o esperado com `cacheComponents: true`, porque cada visitante precisa ver o próprio histórico.

### 9.4 Código: `src/lib/historicoStore.js`

```js
const PASTA = path.join(process.cwd(), ".data");
const ARQUIVO = path.join(PASTA, "historico.json");
const LIMITE_POR_VISITANTE = 10;
const LIMITE_VISITANTES = 1000;

let fila = Promise.resolve();

function enfileirar(tarefa) {
  const execucao = fila.then(tarefa);
  fila = execucao.catch(() => {});
  return execucao;
}

async function gravarTudo(dados) {
  await mkdir(PASTA, { recursive: true });
  const temporario = `${ARQUIVO}.tmp`;
  await writeFile(temporario, JSON.stringify(dados), "utf8");
  await rename(temporario, ARQUIVO);
}
```

Este módulo é a única parte que sabe **onde** os dados ficam. A API só chama `listarBuscas`, `adicionarBusca` e `limparBuscas`, então trocar o arquivo por um banco de dados mexe apenas aqui.

- **Formato do arquivo:** um objeto JSON em que cada chave é o identificador de um visitante e o valor é a lista das buscas dele.
- **Fila (`enfileirar`):** duas requisições ao mesmo tempo poderiam ler o arquivo, alterar e gravar uma por cima da outra, perdendo dados. A fila executa as operações **uma de cada vez**. Se uma delas falhar, o `catch` evita que a fila trave para as seguintes.
- **Escrita segura (`gravarTudo`):** o conteúdo é gravado primeiro em `historico.json.tmp` e depois renomeado. Assim o arquivo final nunca fica pela metade se o servidor parar no meio da escrita.
- **Limites:** cada visitante guarda no máximo 10 buscas. O arquivo guarda no máximo 1000 visitantes, descartando os que estão há mais tempo sem salvar uma busca. Isso impede que o arquivo cresça sem controle.
- **`Object.hasOwn`:** usado para consultar o visitante, para que um identificador como `__proto__` não acesse propriedades internas do objeto.

### 9.5 Código: consumindo a API no navegador

```js
const URL_API = "/api/historico";

async function chamar(opcoes) {
  try {
    const resposta = await fetch(URL_API, { ...opcoes, signal: AbortSignal.timeout(10000) });
    if (!resposta.ok) return null;
    const { itens } = await resposta.json();
    return Array.isArray(itens) ? itens : null;
  } catch {
    return null;
  }
}

export async function lerHistorico() {
  return (await chamar({ method: "GET" })) ?? [];
}
```

`src/lib/historico.js` concentra as chamadas à API, como o `viacep.js` faz com o ViaCEP. Pontos importantes:

- **Mesmos nomes de função:** `FormularioBusca` continua chamando `adicionarBusca(criterios)` sem mudanças. Só `HistoricoLista` precisou ser ajustado, porque as funções agora devolvem uma Promise (`lerHistorico().then(...)` e `await limparHistorico()`).
- **Falha não quebra a tela:** se a API estiver fora do ar ou devolver erro, `chamar` devolve `null`, e o histórico aparece vazio. A busca de caronas continua funcionando.
- **Tempo limite:** `AbortSignal.timeout(10000)` cancela a requisição depois de 10 segundos, para a tela não esperar para sempre.
- **Endereço relativo:** como a API está no mesmo site, basta `/api/historico`, sem domínio e sem CORS.

### 9.6 Limitações

- O armazenamento em arquivo serve para desenvolvimento e para um único servidor. Em hospedagens sem disco persistente (como serviços serverless), o arquivo seria perdido, e seria necessário um banco de dados.
- O histórico está ligado ao navegador (cookie), não a uma pessoa. Não há login.
- Não há limite de requisições por visitante (rate limit).

## 10. Trechos de código explicados (roteamento — Check-in 4)

> Seguindo as diretrizes da disciplina, os arquivos de código não têm comentários explicativos. As explicações ficam aqui no tutorial.

### 10.1 Rota simples: `/caronas`

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

### 10.2 Ligando a lista à rota dinâmica: link no cartão

```jsx
const { id, motorista, origem, destino, horario, vagas } = carona;

<Link className={styles.verDetalhes} href={`/caronas/${id}`}>Ver detalhes →</Link>
```

O `href` é montado com o `id` da carona: a carona de `id` 3 leva a `/caronas/3`. Como o `CardCarona` é usado em vários lugares, todos os cartões ganham o link de uma vez.

### 10.3 Rota dinâmica: `/caronas/[id]`

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
2. **`encontrarCaronaPorId`**: procura na lista a carona com esse id (veja o item 10.4).
3. **`notFound()`**: se nenhuma carona for encontrada, interrompe a renderização e mostra o `not-found.js` da pasta (item 10.5).
4. **`generateStaticParams`**: informa ao Next quais valores de `id` existem (`"1"` a `"6"`), para ele já deixar essas páginas prontas no momento do build. Ids que não estão na lista, como `/caronas/999`, são tratados na hora do acesso e caem no `notFound()`.
5. **`Suspense`**: o `next.config.mjs` do projeto usa `cacheComponents: true`. Nesse modo, o Next separa o que pode ser montado antes do acesso do que depende de dados conhecidos só na hora do acesso, e o valor de `params` entra nessa segunda categoria. Por isso a leitura de `params` fica num componente separado (`ConteudoCarona`) dentro de `<Suspense>`. Enquanto ele resolve, aparece o `fallback`.

### 10.4 Busca por id

```js
export function encontrarCaronaPorId(caronas, id) {
  return caronas.find((carona) => String(carona.id) === String(id)) ?? null;
}
```

O `id` da URL é texto e o `id` da carona é número, então os dois são convertidos com `String(...)` antes de comparar. `find` devolve a primeira carona que bate, ou `undefined` se nenhuma bater; o `?? null` transforma isso em `null`, e o `if (!carona)` da página trata esse caso. A comparação é estrita: `/caronas/01` **não** é a carona 1.

### 10.5 Página de erro da rota dinâmica

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

### 10.6 Interatividade na página de detalhes (`useState`)

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

## 11. Componentes de servidor e de cliente

No App Router, todo componente é de **servidor** por padrão. Ele não pode usar `useState`, `useEffect` nem eventos como `onClick`. Para isso, o arquivo precisa começar com `"use client"`.

| Componente | Tipo | Motivo |
|---|---|---|
| páginas (`page.js`), `Layout`, `Header`, `Panel`, `DetalheCarona` | servidor | só exibem dados |
| `BuscaCaronas`, `FormularioBusca`, `FormularioCadastro`, `HistoricoLista`, `SolicitarVaga` | cliente | usam estado, efeitos ou eventos (o `FormularioCadastro` também chama o ViaCEP pelo navegador) |

## 12. Como executar o projeto

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

A consulta de CEP precisa de internet, porque o navegador acessa o ViaCEP diretamente. Não há chave nem variável de ambiente para configurar.

O histórico de buscas é gravado na pasta `.data/`, criada automaticamente na primeira busca e ignorada pelo Git. Por isso o servidor precisa de permissão de escrita na pasta do projeto.

Para conferir se a versão de produção compila, use `npm run build`.

### Roteiro de testes manuais — API ViaCEP

1. **CEP válido:** na página inicial, digite `01302907` no campo CEP. Ele deve virar `01302-907`, aparecer "Buscando endereço..." e, em seguida, "Endereço encontrado: Rua da Consolação, Consolação, São Paulo - SP". O campo Localização deve ficar preenchido com `Consolação, São Paulo - SP`.
2. **CEP inexistente:** digite `99999999`. Deve aparecer "CEP não encontrado." em vermelho.
3. **CEP incompleto:** digite `123` e clique em "Cadastrar". Deve aparecer "O CEP precisa ter 8 números."
4. **Sem CEP:** deixe o CEP vazio, preencha a localização à mão e cadastre. O cadastro deve funcionar normalmente.
5. **Sem internet:** com a internet desligada (ou em modo offline nas ferramentas do desenvolvedor, aba Network), digite um CEP válido. Deve aparecer "Não foi possível consultar o CEP. Verifique sua conexão."
6. **Requisição real:** com as ferramentas do desenvolvedor abertas (F12, aba Network), digite um CEP e confira a chamada `GET` para `viacep.com.br/ws/.../json/`.

### Roteiro de testes manuais — roteamento

1. **Menu:** o cabeçalho tem o link "Caronas". Clique e confira se abre `/caronas` com 6 cartões.
2. **Link do cartão:** clique em "Ver detalhes" da carona 3. A URL deve ser `/caronas/3` e mostrar Beatriz L., Perdizes → Campus Alphaville, 08:00.
3. **Todas as caronas:** repita com as caronas 1 a 6 e confira que cada URL mostra a carona certa.
4. **Id inexistente:** digite `http://localhost:3000/caronas/999` na barra de endereço. Deve aparecer "Carona não encontrada" com o link de volta.
5. **Id inválido:** teste `/caronas/abc` e `/caronas/01`. Ambos devem cair na tela "Carona não encontrada".
6. **Botão de vaga:** em `/caronas/1`, clique em "Solicitar vaga". O botão deve ficar desabilitado como "Vaga solicitada" e aparecer o aviso verde.
7. **Voltar:** clique em "← Voltar para as caronas" e use também o botão voltar do navegador.
8. **Busca na página inicial:** busque por `Higienópolis`. Os cartões encontrados também devem ter "Ver detalhes" funcionando.
9. **Páginas anteriores:** confira que `/`, `/sobre` e `/historico` continuam funcionando (cadastro com validação, histórico e limpeza do histórico).

### Roteiro de testes manuais — API de histórico

1. **Salvar:** na página inicial, busque por `Mackenzie` e abra `/historico`. A busca deve aparecer no topo da lista.
2. **Persistência no servidor:** confira que o arquivo `.data/historico.json` foi criado na raiz do projeto e contém a busca.
3. **Isolamento:** abra o site em uma janela anônima. O histórico deve aparecer vazio, porque o cookie de visitante é outro.
4. **Limite:** faça 11 buscas diferentes. O histórico deve mostrar só as 10 mais recentes.
5. **Limpar:** em `/historico`, clique em "Limpar histórico". A lista deve ficar vazia e continuar vazia ao recarregar a página.
6. **Requisições diretas** (com o servidor rodando, em outro terminal):

   ```bash
   curl -c cookies.txt -b cookies.txt http://localhost:3000/api/historico
   curl -c cookies.txt -b cookies.txt -X POST -H "Content-Type: application/json" -d '{"destino":"Mackenzie","horario":"07:30","partida":"Santana"}' http://localhost:3000/api/historico
   curl -c cookies.txt -b cookies.txt -X POST -H "Content-Type: application/json" -d '{"destino":""}' http://localhost:3000/api/historico
   curl -c cookies.txt -b cookies.txt -X DELETE http://localhost:3000/api/historico
   ```

   Resultados esperados: lista vazia, `201` com a busca salva, `400` com `{"erro":"Dados da busca inválidos."}` e lista vazia após o `DELETE`.
7. **API fora do ar:** se a chamada à API falhar, a busca de caronas na página inicial continua funcionando; apenas a busca deixa de entrar no histórico.

## 13. O que mudou em relação à Parte 5

**Novo**
- API própria `/api/historico` (`src/app/api/historico/route.js`) com `GET`, `POST` e `DELETE`.
- Módulo de armazenamento `src/lib/historicoStore.js`, que grava o histórico em `.data/historico.json`.
- Identificação do visitante por cookie `caronau_visitante` (aleatório, `HttpOnly`, `SameSite=Strict`).
- Validação dos dados recebidos e respostas de erro genéricas.
- Novas seções neste README: explicação da API (item 9) e roteiro de testes do histórico.

**Alterado**
- `src/lib/historico.js` deixou de usar `localStorage` e passou a chamar a API com `fetch`. As funções `lerHistorico`, `adicionarBusca` e `limparHistorico` mantêm os nomes, mas agora são `async`.
- `HistoricoLista` passou a aguardar as respostas da API, e o aviso da tela mudou para "As buscas ficam salvas no servidor e são associadas a este navegador."
- `.gitignore` ignora a pasta `.data`, para o histórico gravado não ir para o GitHub.

## 14. O que mudou em relação à Parte 4

**Novo**
- Integração com a API pública **ViaCEP** (`src/lib/viacep.js`), com tratamento de CEP incompleto, CEP inexistente e falha de rede.
- Campo **CEP (opcional)** no cadastro, com máscara `00000-000` e preenchimento automático da **Localização**.
- Classe `.texto-cep` em `globals.css` para as mensagens "Buscando endereço..." e "Endereço encontrado".
- Novas seções neste README: explicação da API (item 8) e roteiro de testes do CEP.

## 15. O que mudou em relação à Parte 3

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

## 16. Próximos passos

- Usar o CEP também na **busca de caronas** (preencher o ponto de partida a partir do CEP), reaproveitando `buscarCep` de `lib/viacep.js`.
- Criar uma rota de API interna do Next.js (`src/app/api/caronas/route.js`) devolvendo os dados das caronas em JSON e consumi-la com `fetch`, substituindo a importação direta de `data/caronas.js`. A função `encontrarCaronaPorId` e os `id` já existentes facilitam essa troca.
- Trocar o arquivo JSON do histórico por um banco de dados (por exemplo, SQLite), necessário para hospedar o site em serviços sem disco persistente.
- Associar o histórico a uma conta de usuário (login) em vez do cookie de visitante.

## 17. Aprendizados

- Em React, a tela é consequência do estado, e o que se repete vira componente.
- No App Router, a estrutura de pastas define as URLs: pasta = trecho do endereço e `page.js` = página.
- Uma pasta com nome entre colchetes cria uma rota dinâmica, e o valor da URL chega em `params`.
- O valor que vem da URL é sempre texto, então é preciso converter antes de comparar com números.
- É preciso tratar o caso em que o id não existe, com `notFound()` e `not-found.js`.
- Componentes são de servidor por padrão, e só o que usa estado ou eventos precisa de `"use client"`.
- Consumir uma API pública com `fetch`, `async/await` e `try/catch`, tratando também os erros que chegam com status `200` (como o `{ "erro": "true" }` do ViaCEP).
- Usar `useRef` para ignorar respostas antigas quando o usuário muda o CEP antes da primeira resposta chegar.
- Criar uma API própria no Next.js com **Route Handlers** (`route.js`): cada função exportada (`GET`, `POST`, `DELETE`) responde a um método HTTP.
- Nunca confiar no que vem do cliente: o servidor valida tipo, tamanho e formato dos dados e responde com erros genéricos.
- Sem login, é possível separar os dados de cada visitante com um identificador aleatório guardado em cookie `HttpOnly`.
- Dados gravados em arquivo precisam de cuidado com escritas simultâneas (fila de operações) e com arquivo corrompido (escrita em arquivo temporário seguida de `rename`).
- O que fica no repositório importa: arquivos gerados, como `.next` e `node_modules`, devem estar no `.gitignore`.

## 18. Uso de inteligência artificial

Foram utilizadas ferramentas de IA generativa como apoio nas etapas do projeto: Claude (Anthropic) nos Check-ins 4 e 5 e IBM Bob no Check-in 6.

No Check-in 6, para:

- criar a API interna de histórico (`src/app/api/historico/route.js` e `src/lib/historicoStore.js`) e adaptar o cliente (`lib/historico.js` e `HistoricoLista`);
- testar a API com requisições reais e escrever este README.

No Check-in 5, para:

- implementar a integração com o ViaCEP (`lib/viacep.js` e campo CEP no cadastro);
- testar os casos de erro da API e atualizar este README.

No Check-in 4, para:

- planejar a rota dinâmica e a página de detalhes;
- sugerir a limpeza dos arquivos (autoria, imports sem uso, `.gitignore`);
- diagnosticar um erro de build (`Module not found: Can't resolve '../../components/Layout'`), causado por caminhos de import errados em `src/app/page.js` e por três arquivos com o conteúdo trocado (`src/app/page.js`, `src/app/layout.js` e `src/components/Layout.js`), além de um acento corrompido em `src/app/caronas/page.js`.


## 19. Equipe

| Nome | RA |
|---|---|
| Carolina Mason | 10771365 |
| Dhara Dantas | 10780188 |
| Giovanna Cseri | 10771364 |
| Natalia Ramos | 10771391 |
