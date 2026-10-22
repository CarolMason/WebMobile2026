/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Link from "next/link";

export default function Header({ titulo = "CaronaU" }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1><Link href="/">{titulo}</Link></h1>
        <nav aria-label="Navegação principal">
          <ul>
            <li><Link href="/#cadastro">Cadastro</Link></li>
            <li><Link href="/#busca">Buscar carona</Link></li>
            <li><Link href="/historico">Histórico</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
