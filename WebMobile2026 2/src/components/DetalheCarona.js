/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Link from "next/link";
import Panel from "./Panel";
import SolicitarVaga from "./SolicitarVaga";
import styles from "./DetalheCarona.module.css";

export default function DetalheCarona({ carona }) {
  const { motorista, origem, destino, horario, vagas } = carona;

  return (
    <Panel titulo={`${origem} → ${destino}`} ajuda="Confira os detalhes antes de combinar a carona.">
      <dl className={styles.dados}>
        <div>
          <dt>Motorista</dt>
          <dd>{motorista}</dd>
        </div>
        <div>
          <dt>Saída</dt>
          <dd>{origem}</dd>
        </div>
        <div>
          <dt>Destino</dt>
          <dd>{destino}</dd>
        </div>
        <div>
          <dt>Horário</dt>
          <dd>{horario}</dd>
        </div>
        <div>
          <dt>Vagas</dt>
          <dd>{vagas}</dd>
        </div>
      </dl>

      <SolicitarVaga />

      <p>
        <Link className="link-acao" href="/caronas">← Voltar para as caronas</Link>
      </p>
    </Panel>
  );
}
