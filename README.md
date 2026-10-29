<!-- Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 -->

# CaronaU — Projeto Borboleta, Parte 3

## 1. Sobre o projeto

O CaronaU é uma plataforma pensada para conectar estudantes que fazem trajetos parecidos até a faculdade. A proposta é facilitar o deslocamento, ajudar a dividir custos e incentivar uma alternativa mais sustentável para a comunidade universitária.

Esta entrega corresponde ao **Check-in 3 do Projeto Borboleta**: avanço da migração, com foco na **conversão da interface para componentes React** e na **interatividade básica** usando `useState` e `useEffect`. O roteamento dinâmico (Check-in 4) e a rota de API (Check-in 5) ainda não fazem parte desta etapa.

## 2. Ideação e protótipos

O projeto foi planejado para estudantes universitários que enfrentam custos e dificuldades para chegar à faculdade. Os protótipos do planejamento incluem telas para a página inicial, cadastro, busca de caronas, detalhes de uma carona, oferta de carona e informações sobre o projeto.

A interface mantém a identidade visual do projeto anterior: tons de vermelho e rosa claro, cartões com bordas arredondadas, formulários simples e navegação entre páginas.

## 3. Caráter extensionista

O CaronaU tem caráter extensionista porque busca atender a uma necessidade real da comunidade estudantil: encontrar trajetos compartilhados com outros estudantes. A proposta pode reduzir gastos com transporte, facilitar a rotina e diminuir a quantidade de carros usados individualmente.

Nesta fase, o site continua sendo um protótipo acadêmico. As caronas exibidas nos resultados são **dados fictícios de demonstração** e os cadastros **não são enviados a nenhum servidor**.

## 4. Por que migrar para componentes React?

No Projeto Lagarta, cada página repetia seu próprio HTML e a interatividade era feita com JavaScript manipulando elementos diretamente (`getElementById`, `addEventListener`...). Com React, a interface passa a ser uma função do **estado**: quando o estado muda, o React atualiza a tela sozinho.

Vantagens que aparecem concretamente neste projeto:

- **Reaproveitamento:** o componente `Panel` desenha todos os cartões brancos do site (cadastro, busca, resultados, histórico e as três seções da página Sobre). O `CampoFormulario` desenha todos os campos dos dois formulários. Antes, esse HTML era copiado e colado.
- **Manutenção em um só lugar:** o rodapé existia em cada página e agora está só em `Footer`, usado por `Layout`. Mudar o texto do rodapé é editar um arquivo.
- **Interface sempre sincronizada com os dados:** a lista de resultados e o histórico são gerados a partir de arrays com `.map()`. Não há código para "adicionar o item na tela" manualmente.
- **Separação de responsabilidades:** a lógica de busca (`lib/busca.js`) e de armazenamento (`lib/historico.js`) é independente da aparência, o que facilita trocar a fonte de dados pela API no Check-in 5.


## 5. Trechos de código explicados

> Seguindo as diretrizes da disciplina, os arquivos de código não têm comentários explicativos. As explicações ficam aqui no tutorial.

### 5.1 Componente de layout compartilhado

```jsx
export default function Layout({ titulo, tituloHeader, descricao, classeMain, children }) {
  return (
    <>
      <Head>
        <title>{titulo}</title>
        {descricao ? <meta name="description" content={descricao} /> : null}
      </Head>
      <Header titulo={tituloHeader} />
      <main className={classeMain}>{children}</main>
      <Footer />
    </>
  );
}
```

`children` é tudo o que for escrito entre `<Layout>` e `</Layout>` na página. Assim, cada página só descreve o seu conteúdo e herda cabeçalho e rodapé. Quando `tituloHeader` não é informado, chega `undefined` ao `Header`, e o valor padrão `"CaronaU"` é usado.

### 5.2 Campo de formulário controlado

```jsx
export default function CampoFormulario({ id, rotulo, valor, aoMudar, erro, ...resto }) {
  return (
    <>
      <label htmlFor={id}>{rotulo}</label>
      <input id={id} name={id} value={valor} onChange={aoMudar} {...resto} />
      {erro ? <span id={`${id}-erro`}>{erro}</span> : null}
    </>
  );
}
```

É um **input controlado**: o valor exibido vem sempre do estado (`value={valor}`) e cada digitação chama `onChange`, que atualiza o estado. O `...resto` repassa `type` e `placeholder` sem precisar listar cada propriedade. O `name` recebe o mesmo valor do `id` para o formulário saber qual campo mudou.

### 5.3 Estado com `useState` no formulário de cadastro

```jsx
const [dados, setDados] = useState(CAMPOS_VAZIOS);
const [erros, setErros] = useState({});
const [nomeCadastrado, setNomeCadastrado] = useState("");

function atualizarCampo(evento) {
  const { name, value } = evento.target;
  setDados((anterior) => ({ ...anterior, [name]: value }));
  setErros((anterior) => ({ ...anterior, [name]: undefined }));
  setNomeCadastrado("");
}
```

São três estados independentes: o que foi digitado, os erros de validação e o nome para a mensagem de sucesso. Em `setDados`, a função recebe o estado `anterior` e devolve um **novo objeto** com `...anterior` (copia tudo) e `[name]: value` (troca só o campo digitado). O React nunca deve ter o estado alterado diretamente; sempre se cria um novo valor. Ao digitar, o erro daquele campo some.

```jsx
function enviar(evento) {
  evento.preventDefault();
  const novosErros = validar(dados);
  setErros(novosErros);

  if (Object.keys(novosErros).length > 0) {
    setNomeCadastrado("");
    return;
  }

  setNomeCadastrado(dados.nome.trim());
  setDados(CAMPOS_VAZIOS);
}
```

`preventDefault()` impede o recarregamento da página que o navegador faria ao enviar um formulário. Se `validar` devolver algum erro, a função para antes de "cadastrar". Se estiver tudo certo, mostra a mensagem de sucesso e limpa os campos. O `noValidate` no `<form>` desliga as mensagens padrão do navegador para usarmos as nossas.

### 5.4 Elevando o estado: busca e resultados

```jsx
export default function Home() {
  const [resultado, setResultado] = useState(null);

  function buscar(criterios) {
    setResultado(filtrarCaronas(caronas, criterios));
  }

  return (
    <Layout titulo="CaronaU | Encontre sua carona" descricao="...">
      <Panel id="busca" titulo="Buscar carona" ajuda="...">
        <FormularioBusca aoBuscar={buscar} />
      </Panel>

      {resultado !== null ? (
        <Panel id="resultados" titulo="Caronas encontradas">
          <ListaCaronas caronas={resultado} />
        </Panel>
      ) : null}
    </Layout>
  );
}
```

O formulário de busca e a lista de resultados são componentes irmãos, e os dois dependem do resultado. Por isso o estado `resultado` fica no **pai** (`Home`), e o formulário recebe a função `buscar` pela propriedade `aoBuscar`. Quando o formulário chama `aoBuscar(criterios)`, o estado do pai muda e a lista é redesenhada. O valor inicial `null` significa "ainda não buscou" (diferente de `[]`, que significa "buscou e não achou nada"). Por isso a seção de resultados só aparece depois da primeira busca.

### 5.5 Listas com `.map()` e `key`

```jsx
<ul className={styles.lista}>
  {caronas.map((carona) => (
    <CardCarona key={carona.id} carona={carona} />
  ))}
</ul>
```

Cada item gerado por `.map()` precisa de uma `key` única e estável (aqui, o `id`) para o React identificar o que mudou entre uma renderização e outra.

### 5.6 Filtro de caronas

```js
export function filtrarCaronas(caronas, { destino, partida, horario }) {
  return caronas.filter((carona) => {
    if (!normalizar(carona.destino).includes(normalizar(destino))) return false;
    if (partida && !normalizar(carona.origem).includes(normalizar(partida))) return false;
    if (horario) {
      const diferenca = Math.abs(horarioParaMinutos(carona.horario) - horarioParaMinutos(horario));
      if (diferenca > TOLERANCIA_MINUTOS) return false;
    }
    return true;
  });
}
```

O destino é obrigatório; ponto de partida e horário são opcionais. `normalizar` tira acentos e maiúsculas para que "higienopolis" encontre "Higienópolis". O horário é comparado em minutos, com tolerância de 60 minutos para mais ou para menos.

### 5.7 `useEffect` e `localStorage` no histórico

```jsx
const [itens, setItens] = useState([]);
const [carregado, setCarregado] = useState(false);

useEffect(() => {
  setItens(lerHistorico());
  setCarregado(true);
}, []);
```

O Next.js primeiro gera o HTML no **servidor**, onde `window` e `localStorage` não existem. Por isso a leitura do histórico fica dentro de um `useEffect` com lista de dependências vazia (`[]`): ele só roda **no navegador, uma vez, depois da primeira renderização**. O estado `carregado` evita mostrar por um instante a mensagem "nenhuma busca" antes de os dados serem lidos (`if (!carregado) return null;`).

O histórico é gravado pela função `adicionarBusca` (em `lib/historico.js`) quando o usuário faz uma busca. Ela guarda no máximo as 10 buscas mais recentes e usa `try/catch` para não quebrar a página caso o navegador bloqueie o armazenamento ou o conteúdo esteja corrompido. Como a regra do projeto proíbe Context API, o `localStorage` é o que permite à página `/historico` enxergar buscas feitas na página `/`.

## 6. Como executar o projeto

É necessário ter o Node.js instalado.

1. Extraia o arquivo ZIP.
2. Abra a pasta `CaronaU_Borboleta_Parte3` no terminal ou no VS Code.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra `http://localhost:3000` no navegador.

Para conferir se a versão de produção compila, use `npm run build`.

### Roteiro de testes manuais

1. **Cadastro com campos vazios:** clique em "Cadastrar". Devem aparecer mensagens de erro em cada campo.
2. **E-mail inválido:** digite `abc` no e-mail. Deve aparecer "Digite um e-mail válido."
3. **Cadastro válido:** preencha tudo. Deve aparecer a mensagem de sucesso e os campos devem ser limpos.
4. **Busca sem destino:** clique em "Buscar carona". Deve aparecer o erro no campo destino.
5. **Busca com resultado:** destino `Higienópolis`. Devem aparecer 3 caronas.
6. **Busca com filtros:** destino `Alphaville` e partida `Santana`. Deve aparecer 1 carona.
7. **Busca sem resultado:** destino `Lua`. Deve aparecer o aviso de nenhuma carona encontrada.
8. **Histórico:** abra `/historico`. As buscas feitas aparecem da mais recente para a mais antiga. Clique em "Limpar histórico" e confira a mensagem de lista vazia.
9. **Sobre:** abra `/sobre` e confira que cabeçalho, seções e rodapé continuam iguais.

## 7. O que foi migrado nesta etapa

- Cabeçalho, rodapé, cartões, campos e avisos transformados em componentes reutilizáveis.
- Formulários de cadastro e busca convertidos em componentes com estado (`useState`), validação e mensagens.
- Resultados de busca gerados dinamicamente a partir de uma lista de caronas fictícias.
- Página `/historico` conectada ao `localStorage` por meio de `useEffect`, deixando de ser apenas visual.
- Página `/sobre` gerada a partir de uma lista de seções com `.map()`.
- CSS Modules para estilos específicos de componentes, mantendo `globals.css` para o estilo geral.

## 8. Próximos passos

- **Check-in 4:** rota dinâmica, por exemplo `/caronas/[id]`, para ver os detalhes de uma carona (o campo `id` já existe nos dados).
- **Check-in 5:** criar a rota de API interna do Next.js (`pages/api/...`) devolvendo um JSON fixo e consumi-la com `fetch` dentro de um `useEffect`, substituindo o arquivo `data/caronas.js`.

## 9. Aprendizados

- Componentes evitam repetição e deixam cada arquivo com uma responsabilidade clara.
- Em React, a tela é consequência do estado: em vez de alterar a página manualmente, alteramos o estado.
- Estado compartilhado entre componentes irmãos deve ficar no componente pai e descer por propriedades.
- Código que usa `window` ou `localStorage` precisa rodar dentro de `useEffect`, pois o Next.js também renderiza no servidor.
- Todo item de lista gerado por `.map()` precisa de uma `key` única.

## 10. Uso de inteligência artificial

Foi utilizada uma ferramenta de IA generativa (Claude, da Anthropic) como apoio nesta etapa, para:

- sugerir a divisão da interface em componentes (`Layout`, `Panel`, `CampoFormulario` etc.);
- escrever a primeira versão da lógica de estado, validação, filtro de caronas e histórico;
- montar este tutorial.

A IA não foi usada para decidir o tema nem o público do projeto. Conforme as regras da disciplina, todos os integrantes devem revisar, testar e saber explicar cada arquivo, inclusive o funcionamento de `useState`, `useEffect`, `.map()`, `key` e `localStorage`, antes das apresentações e dos check-ins.

## 11. Equipe

| Nome | RA |
|---|---|
| Carolina Mason | 10771365 |
| Dhara Dantas | 10780188 |
| Giovanna Cseri | 10771364 |
| Natalia Ramos | 10771391 |
