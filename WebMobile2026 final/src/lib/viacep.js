/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
const URL_VIACEP = "https://viacep.com.br/ws";

export function limparCep(cep) {
  return cep.replace(/\D/g, "");
}

export function formatarCep(cep) {
  const numeros = limparCep(cep).slice(0, 8);
  return numeros.length > 5 ? `${numeros.slice(0, 5)}-${numeros.slice(5)}` : numeros;
}

export function cepValido(cep) {
  return /^\d{8}$/.test(limparCep(cep));
}

export function montarLocalizacao({ bairro, localidade, uf }) {
  const cidade = [localidade, uf].filter(Boolean).join(" - ");
  return [bairro, cidade].filter(Boolean).join(", ");
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

  return {
    cep: dados.cep,
    logradouro: dados.logradouro,
    bairro: dados.bairro,
    localidade: dados.localidade,
    uf: dados.uf,
  };
}
