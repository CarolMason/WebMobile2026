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

## 2. Objetivo

Este projeto tem caráter extensionista porque busca atender a uma necessidade real da comunidade acadêmica: a mobilidade dos estudantes até a faculdade. O CaronaU não é só um exercício técnico — ele propõe uma solução prática que pode:

- Reduzir o custo de transporte dos alunos, já que o valor da corrida é dividido;
- Diminuir a circulação de carros, tornando o trajeto mais sustentável;
- Aproximar estudantes que não se conheciam, fortalecendo o senso de comunidade dentro da faculdade;
- Aumentar a segurança, já que o cadastro é feito com dados da própria instituição de ensino.

## 3. Explicação do código

O projeto é dividido em 4 arquivos:

### `projeto.html`
Página principal do site. Contém:
- Cabeçalho com o nome do site, botão de **Login** e menu de navegação;
- Seção de **Cadastro de usuário** (formulário com nome, faculdade, localização e e-mail);
- Seção de **Buscar carona** (formulário com destino, horário e ponto de partida).

### 'Historico.html'
Página que mostra o histórico de buscas de carona do usuário. Contém:

Cabeçalho com o mesmo menu de navegação das outras páginas;
Uma lista (<ul id="lista-historico">) que começa vazia no HTML e é preenchida dinamicamente pelo script.js, com cada viagem já buscada;
Um botão "Limpar histórico" que apaga todos os registros salvos.

Essa página não guarda nada sozinha — ela só existe para exibir o que está salvo no localStorage do navegador, que é atualizado pelo script.js toda vez que o usuário faz uma busca na página principal (projeto.html).

### `Sobre.html`
Página que explica o que é o CaronaU, como ele funciona e como garantimos a segurança dos usuários (cadastro vinculado à faculdade).

### `Style.css`
Responsável pela aparência do site. Usa variáveis de cor (`:root`) para manter a paleta vermelho e branco consistente em todas as páginas. Estiliza o cabeçalho, o menu, as seções, os formulários e os botões, além de deixar o layout centralizado e responsivo.

### 'script.js'
Cuida da parte interativa do site — o que acontece quando o usuário clica em botões ou envia os formulários. Em resumo:

Seleção dos elementos: no início do arquivo, o código guarda em variáveis os elementos da página que serão usados depois (o botão de login, a caixa de mensagem, os formulários de cadastro e busca, a lista de histórico e o botão de limpar), evitando ficar buscando o mesmo elemento várias vezes;
Histórico salvo no navegador: a variável historico começa lendo o que já está guardado no localStorage (um espaço de armazenamento do navegador que mantém os dados mesmo depois de fechar a página). Se não houver nada salvo ainda, ela começa como uma lista vazia;
Clique no botão de login: quando o botão é clicado, aparece uma mensagem avisando que o login ainda não foi implementado, e a página rola suavemente até essa mensagem;
Envio do formulário de cadastro: ao clicar em "Cadastrar", o código impede que a página recarregue (comportamento padrão de formulários), pega o nome digitado e mostra uma mensagem de boas-vindas personalizada, depois limpando os campos do formulário;
Envio do formulário de busca: ao clicar em "Buscar carona", o código pega o destino, horário e ponto de partida digitados. Se o destino estiver vazio, mostra um aviso pedindo para preenchê-lo. Se estiver preenchido, mostra uma mensagem de que a busca deu certo e guarda essa viagem em historico, salvando também no localStorage;
Mostrar o histórico na tela: a função mostrarHistorico() limpa a lista exibida e percorre cada viagem guardada em historico (usando um for), criando um item de lista (<li>) para cada uma com o trajeto e o horário. Se não houver nenhuma viagem salva, mostra uma mensagem dizendo que o histórico está vazio;
Botão de limpar histórico: quando clicado, apaga a lista historico, remove os dados do localStorage e atualiza a tela para mostrar que não há mais viagens salvas. 


## 4. Equipe

| Nome | RA |
| Carolina Mason | 10771365 |
| Dhara Dantas | 10780188 |
| Giovanna Cseri | 10771364 |
| Natalia Ramos | 10771391 |
