"use client";

/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import { useEffect, useState } from "react";
import Aviso from "./Aviso";
import { lerHistorico, limparHistorico } from "../lib/historico";
import styles from "./HistoricoLista.module.css";

export default function HistoricoLista() {
  const [itens, setItens] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setItens(lerHistorico());
    setCarregado(true);
  }, []);

  function limpar() {
    setItens(limparHistorico());
  }

  if (!carregado) return null;

  if (itens.length === 0) {
    return <Aviso>Você ainda não fez nenhuma busca. Use a página inicial para buscar uma carona.</Aviso>;
  }

  return (
    <>
      <ul className="history-list">
        {itens.map((item) => (
          <li key={item.id}>
            <span>{item.partida || "Qualquer origem"} → {item.destino}</span>
            <span className="history-time">{item.horario || "Qualquer horário"}</span>
          </li>
        ))}
      </ul>
      <p className="history-note">As buscas ficam salvas apenas neste navegador.</p>
      <button type="button" className={styles.limpar} onClick={limpar}>Limpar histórico</button>
    </>
  );
}
