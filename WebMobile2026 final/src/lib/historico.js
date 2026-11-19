/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
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

export async function adicionarBusca(busca) {
  return chamar({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(busca),
  });
}

export async function limparHistorico() {
  return (await chamar({ method: "DELETE" })) ?? [];
}
