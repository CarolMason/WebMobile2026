/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import CardCarona from "./CardCarona";
import Aviso from "./Aviso";
import styles from "./ListaCaronas.module.css";

export default function ListaCaronas({ caronas }) {
  if (caronas.length === 0) {
    return <Aviso>Nenhuma carona encontrada para essa busca. Tente outro destino, ponto de partida ou horário.</Aviso>;
  }

  return (
    <>
      <p className="texto-ajuda">
        {caronas.length} {caronas.length === 1 ? "opção encontrada" : "opções encontradas"} (dados fictícios de demonstração).
      </p>
      <ul className={styles.lista}>
        {caronas.map((carona) => (
          <CardCarona key={carona.id} carona={carona} />
        ))}
      </ul>
    </>
  );
}
