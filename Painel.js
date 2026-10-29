/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
export default function Panel({ id, titulo, ajuda, children }) {
  return (
    <section id={id} className="panel">
      <h2>{titulo}</h2>
      {ajuda ? <p className="texto-ajuda">{ajuda}</p> : null}
      {children}
    </section>
  );
}
