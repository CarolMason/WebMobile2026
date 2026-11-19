/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

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

async function lerTudo() {
  try {
    const bruto = await readFile(ARQUIVO, "utf8");
    const dados = JSON.parse(bruto);
    return dados && typeof dados === "object" && !Array.isArray(dados) ? dados : {};
  } catch (erro) {
    if (erro.code === "ENOENT") return {};
    throw erro;
  }
}

async function gravarTudo(dados) {
  await mkdir(PASTA, { recursive: true });
  const temporario = `${ARQUIVO}.tmp`;
  await writeFile(temporario, JSON.stringify(dados), "utf8");
  await rename(temporario, ARQUIVO);
}

export function listarBuscas(visitante) {
  return enfileirar(async () => {
    const dados = await lerTudo();
    return Object.hasOwn(dados, visitante) ? dados[visitante] : [];
  });
}

export function adicionarBusca(visitante, busca) {
  return enfileirar(async () => {
    const dados = await lerTudo();
    const atual = Object.hasOwn(dados, visitante) ? dados[visitante] : [];
    const lista = [{ ...busca, id: Date.now() }, ...atual].slice(0, LIMITE_POR_VISITANTE);

    delete dados[visitante];
    dados[visitante] = lista;
    for (const chave of Object.keys(dados).slice(0, Math.max(0, Object.keys(dados).length - LIMITE_VISITANTES))) {
      delete dados[chave];
    }

    await gravarTudo(dados);
    return lista;
  });
}

export function limparBuscas(visitante) {
  return enfileirar(async () => {
    const dados = await lerTudo();
    if (Object.hasOwn(dados, visitante)) {
      delete dados[visitante];
      await gravarTudo(dados);
    }
    return [];
  });
}
