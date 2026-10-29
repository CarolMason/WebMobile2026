/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import styles from "./CardCarona.module.css";

export default function CardCarona({ carona }) {
  const { motorista, origem, destino, horario, vagas } = carona;

  return (
    <li className={styles.card}>
      <div className={styles.topo}>
        <strong className={styles.rota}>{origem} → {destino}</strong>
        <span className={styles.horario}>{horario}</span>
      </div>
      <span className={styles.detalhes}>
        Motorista: {motorista} · {vagas} {vagas === 1 ? "vaga" : "vagas"}
      </span>
    </li>
  );
}
