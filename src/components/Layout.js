/* Autoria: Carolina Mason - RA 10771365; Dhara Dantas - RA 10780188; Giovanna Cseri - RA 10771364; Natalia Ramos - RA 10771391 */
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ tituloHeader, classeMain, children }) {
  return (
    <>
      <Header titulo={tituloHeader} />
      <main className={classeMain}>{children}</main>
      <Footer />
    </>
  );
}
