# WebMobile2026

# CaronaU

Site desenvolvido como projeto extensionista da disciplina de Fundamentos de Web, do curso de Sistemas de Informação (Universidade Presbiteriana Mackenzie).

O CaronaU conecta estudantes da mesma faculdade que fazem trajetos parecidos, permitindo que ofereçam ou busquem caronas entre si.

## Ideação

Tudo começou com um problema que todo estudante conhece: ir para a faculdade custa caro e dá trabalho. Muita gente faz um trajeto parecido, saindo da mesma região e no mesmo horário, só que ninguém sabe disso. No fim cada um vai sozinho e gasta mais com transporte.

A ideia foi fazer um site simples para essas pessoas se encontrarem. O estudante se cadastra com nome, faculdade, localização e e-mail. Depois ele pode buscar uma carona, informando destino, horário e ponto de partida, ou oferecer uma carona para quem faz o mesmo caminho. Chamei o site de VaiJunto, mas o nome ainda pode mudar.

As páginas que planejamos são a Home (`/`), Cadastro (`/cadastro`), Buscar carona (`/caronas`), Detalhe da carona (`/caronas/[id]`), Oferecer carona (`/oferecer`) e Sobre (`/sobre`). A `/sobre` é a rota simples e a `/caronas/[id]` é a rota dinâmica, onde o id da URL diz qual carona abrir. As caronas da tela vão vir de uma rota de API do próprio Next.js (`/api/caronas`), que devolve um JSON fixo.


## Protótipo (wireframes)

Fizemos os wireframes só na versão de computador, porque o site foi pensado para ser usado no desktop. Os números laranja mostram as partes que viram componentes.

### Home

A Home tem o menu, uma busca rápida, a explicação de como funciona e uma lista com as caronas disponíveis (que virão da API).

### Cadastro

Formulário com os quatro dados que o estudante precisa informar.

### Buscar carona

Em cima ficam os campos de destino, horário e ponto de partida. Embaixo aparece a lista de caronas encontradas.

### Detalhe da carona

Essa é a página da rota dinâmica. Mostra o trajeto, as informações do motorista e o botão para pedir a carona.

### Oferecer carona

Seção onde as caronas encontradas aparecem para escolha.

### Sobre

Página que explica o que é o CaronaU, como ele funciona e como garantimos a segurança dos usuários (cadastro vinculado à faculdade).

## Uso de IA

Usamos o Claude (IA generativa) no Check-in 1 para ajudar gerar as imagens dos wireframes. 


## Conclusão

Com o desenvolvimento do CaronaU, aprendemos na prática como estruturar um site com HTML5 semântico (header, nav, main, section), organizar a estilização com CSS3 usando variáveis de cor para manter a identidade visual consistente entre páginas, e criar interatividade do lado do cliente com JavaScript — manipulando o DOM, tratando eventos de clique e de envio de formulário, e persistindo dados entre sessões com `localStorage`.

Também entendemos melhor o que significa pensar um projeto com caráter extensionista: em vez de só cumprir requisitos técnicos, precisamos pensar em quem realmente usaria o site e que problema real ele resolve — no nosso caso, o custo e a dificuldade de deslocamento dos estudantes até a faculdade. Isso mudou a forma como planejamos as telas, priorizando simplicidade e um fluxo direto de cadastro e busca.

Como próximos passos, identificamos pontos que ainda podem evoluir: implementar um login de verdade (com senha), permitir que o usuário **ofereça** uma carona (hoje as caronas são exemplos fixos no código) e usar um banco de dados real para que os usuários cadastrados apareçam nas buscas uns dos outros.

## Equipe

| Nome | RA |
|---|---|
| Carolina Mason | 10771365 |
| Dhara Dantas | 10780188 |
| Giovanna Cseri | 10771364 |
| Natalia Ramos | 10771391 |
