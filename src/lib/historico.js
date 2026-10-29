/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
const CHAVE = "caronau:historico";
const LIMITE = 10;

function salvar(lista) {
  try {
    window.localStorage.setItem(CHAVE, JSON.stringify(lista));
  } catch {}
}

export function lerHistorico() {
  try {
    const bruto = window.localStorage.getItem(CHAVE);
    const lista = bruto ? JSON.parse(bruto) : [];
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

export function adicionarBusca(busca) {
  const atualizado = [{ ...busca, id: Date.now() }, ...lerHistorico()].slice(0, LIMITE);
  salvar(atualizado);
  return atualizado;
}

export function limparHistorico() {
  salvar([]);
  return [];
}
