# WebMobile2026

# CaronaU

Site desenvolvido como projeto extensionista da disciplina de Fundamentos de Web, do curso de Sistemas de Informação (Universidade Presbiteriana Mackenzie).

O CaronaU conecta estudantes da mesma faculdade que fazem trajetos parecidos, permitindo que ofereçam ou busquem caronas entre si.

## 1. Ideia Central

A ideia surgiu a partir de uma demanda comum entre estudantes: o custo e a dificuldade de deslocamento até a faculdade. Muitos alunos fazem trajetos parecidos (mesma região, mesmo horário) mas não têm como saber disso e acabam indo sozinhos, gastando mais com transporte.

Pensamos em um site simples onde o estudante pode:
- Se cadastrar informando nome, faculdade, localização e e-mail;
- Buscar uma carona informando destino, horário e ponto de partida;
- Oferecer uma carona para quem faz o mesmo caminho.

Antes de programar, desenhamos um wireframe à mão para organizar as seções da página (cabeçalho com login, barra de busca e cards de resultado) e decidir a paleta de cores — vermelho e branco, remetendo à ideia de trânsito/estrada.

## 2. Imagens do protótipo inicial


O wireframe inicial organizava três blocos principais: o cabeçalho com o botão de login e o menu de navegação, a seção de cadastro do estudante e a seção de busca de carona com os campos de destino, horário e ponto de partida. A paleta vermelho e branco já estava definida nessa etapa, remetendo à ideia de trânsito/estrada.

## 3. Objetivo

Este projeto tem caráter extensionista porque busca atender a uma necessidade real da comunidade acadêmica: a mobilidade dos estudantes até a faculdade. O CaronaU não é só um exercício técnico — ele propõe uma solução prática que pode:

- Reduzir o custo de transporte dos alunos, já que o valor da corrida é dividido;
- Diminuir a circulação de carros, tornando o trajeto mais sustentável;
- Aproximar estudantes que não se conheciam, fortalecendo o senso de comunidade dentro da faculdade;
- Aumentar a segurança, já que o cadastro é feito com dados da própria instituição de ensino.

## 4. Explicação do código

O projeto é dividido em 5 arquivos:

### `projeto.html`
Página principal do site. Contém:
- Cabeçalho com o nome do site, botão de **Login** e menu de navegação;
- Seção de **Cadastro de usuário** (formulário com nome, faculdade, localização e e-mail);
- Seção de **Buscar carona** (formulário com destino, horário e ponto de partida);
- Seção de **Caronas encontradas**, escondida no início e preenchida pelo `script.js` depois de uma busca.

### `Historico.html`
Página que mostra o histórico de buscas de carona do usuário. Contém:

Cabeçalho com o mesmo menu de navegação das outras páginas;
Uma lista (`<ul id="lista-historico">`) que começa vazia no HTML e é preenchida dinamicamente pelo `script.js`, com cada viagem já buscada;
Um botão "Limpar histórico" que apaga todos os registros salvos.

Essa página não guarda nada sozinha — ela só existe para exibir o que está salvo no `localStorage` do navegador, que é atualizado pelo `script.js` toda vez que o usuário faz uma busca na página principal (`projeto.html`).

### `Sobre.html`
Página que explica o que é o CaronaU, como ele funciona e como garantimos a segurança dos usuários (cadastro vinculado à faculdade).

### `Style.css`
Responsável pela aparência do site. Usa variáveis de cor (`:root`) para manter a paleta vermelho e branco consistente em todas as páginas. Estiliza o cabeçalho, o menu, as seções, os formulários e os botões, além de deixar o layout centralizado e responsivo.

### `script.js`
Cuida da parte interativa do site (o que acontece quando o usuário clica ou envia formulários). O arquivo tem **4 interações principais**:

**Preparação**
- No início, guardamos em variáveis (`let`) os elementos da página que serão usados (botões, formulários, listas e mensagens).
- Temos duas listas de exemplo: `historicoExemplo` (buscas antigas) e `caronasDisponiveis` (motoristas fictícios, já que ainda não temos servidor). Cada item é um objeto, por exemplo `{ nome: "Rafael", partida: "Santana", destino: "...", horario: "07:30", vagas: 3 }`.
- `historico` e `usuario` são lidos do `localStorage` (memória do navegador que não some ao fechar a página). Se não houver nada salvo, usam valores padrão.

**Funções auxiliares**
- `mostrarMensagem(texto, ehErro)`: mostra a caixa de aviso no topo; se for erro, ela fica vermelha.
- `limparTexto(texto)`: tira acentos e deixa tudo minúsculo, para que "jundiai" encontre "Jundiaí".
- `horarioParaMinutos(horario)`: transforma "07:30" em 450 minutos, para podermos comparar horários com contas.
- `emailValido(email)`: confere se o e-mail tem `@` e `.`.

**Interação 1 - Login/Logout:** o botão mostra "Login" ou "Sair (Nome)" dependendo de existir um usuário salvo. Clicar com usuário logado apaga o cadastro do `localStorage`; sem usuário, o site orienta a fazer o cadastro.

**Interação 2 - Cadastro com validação:** ao enviar, o código usa `preventDefault()` para a página não recarregar, confere se todos os campos estão preenchidos e se o e-mail é válido. Se estiver tudo certo, salva o usuário no `localStorage`, atualiza o botão de login e mostra boas-vindas. O campo "Ponto de partida" da busca já vem preenchido com a localização do usuário cadastrado.

**Interação 3 - Busca de caronas:** a função `buscarCaronas()` percorre a lista de caronas com um `for` e usa `if` para aceitar só as que combinam com o destino, o ponto de partida (se informado) e o horário (com até 60 minutos de diferença). Os resultados aparecem como cards criados com `createElement`. Cada card tem o botão **"Pedir carona"**, que diminui o número de vagas (e vira "Lotada" quando chega a zero). A busca também é salva no histórico, com a data.

**Interação 4 - Histórico:** `mostrarHistorico()` limpa e recria a lista na tela, mostra o total de buscas e coloca um botão **"Remover"** em cada item (usando `splice` para tirar só aquele). O botão "Limpar histórico" pede confirmação (`confirm`) antes de apagar tudo.

## 5. Conclusão

Com o desenvolvimento do CaronaU, aprendemos na prática como estruturar um site com HTML5 semântico (header, nav, main, section), organizar a estilização com CSS3 usando variáveis de cor para manter a identidade visual consistente entre páginas, e criar interatividade do lado do cliente com JavaScript — manipulando o DOM, tratando eventos de clique e de envio de formulário, e persistindo dados entre sessões com `localStorage`.

Também entendemos melhor o que significa pensar um projeto com caráter extensionista: em vez de só cumprir requisitos técnicos, precisamos pensar em quem realmente usaria o site e que problema real ele resolve — no nosso caso, o custo e a dificuldade de deslocamento dos estudantes até a faculdade. Isso mudou a forma como planejamos as telas, priorizando simplicidade e um fluxo direto de cadastro e busca.

Como próximos passos, identificamos pontos que ainda podem evoluir: implementar um login de verdade (com senha), permitir que o usuário **ofereça** uma carona (hoje as caronas são exemplos fixos no código) e usar um banco de dados real para que os usuários cadastrados apareçam nas buscas uns dos outros.

## 6. Equipe

| Nome | RA |
|---|---|
| Carolina Mason | 10771365 |
| Dhara Dantas | 10780188 |
| Giovanna Cseri | 10771364 |
| Natalia Ramos | 10771391 |
