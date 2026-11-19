/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import styles from "./CampoFormulario.module.css";

export default function CampoFormulario({ id, rotulo, valor, aoMudar, erro, ...resto }) {
  const idErro = `${id}-erro`;

  return (
    <>
      <label htmlFor={id}>{rotulo}</label>
      <input
        id={id}
        name={id}
        value={valor}
        onChange={aoMudar}
        className={erro ? styles.invalido : undefined}
        aria-invalid={erro ? "true" : "false"}
        aria-describedby={erro ? idErro : undefined}
        {...resto}
      />
      {erro ? (
        <span id={idErro} className={styles.erro}>
          {erro}
        </span>
      ) : null}
    </>
  );
}
