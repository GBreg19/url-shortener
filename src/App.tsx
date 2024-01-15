import styles from "./App.module.css";
import { Header, Footer } from "./components/Layout";
import { Description, Statistics, UrlShortening } from "./components/Sections";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Description />
        <UrlShortening />
        <Statistics />
      </main>
      <Footer />
    </>
  );
}

export default App;
