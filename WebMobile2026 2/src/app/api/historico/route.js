/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { adicionarBusca, limparBuscas, listarBuscas } from "../../../lib/historicoStore";

const COOKIE = "caronau_visitante";
const UM_ANO = 60 * 60 * 24 * 365;
const TAMANHO_MAXIMO_CORPO = 2000;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function erro(mensagem, status) {
  return Response.json({ erro: mensagem }, { status });
}

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

export async function GET() {
  try {
    const visitante = await obterVisitante({ criar: false });
    const itens = visitante ? await listarBuscas(visitante) : [];
    return Response.json({ itens });
  } catch (e) {
    console.error("Falha ao ler o histórico", e);
    return erro("Não foi possível carregar o histórico.", 500);
  }
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

export async function DELETE() {
  try {
    const visitante = await obterVisitante({ criar: false });
    if (visitante) await limparBuscas(visitante);
    return Response.json({ itens: [] });
  } catch (e) {
    console.error("Falha ao limpar o histórico", e);
    return erro("Não foi possível limpar o histórico.", 500);
  }
}
