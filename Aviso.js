/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import styles from "./Aviso.module.css";

export default function Aviso({ tipo = "info", children }) {
  return (
    <div className={`${styles.aviso} ${styles[tipo]}`} role={tipo === "erro" ? "alert" : "status"}>
      {children}
    </div>
  );
}
