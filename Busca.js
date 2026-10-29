/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
export function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function horarioParaMinutos(horario) {
  const [horas, minutos] = horario.split(":").map(Number);
  return horas * 60 + minutos;
}

const TOLERANCIA_MINUTOS = 60;

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
