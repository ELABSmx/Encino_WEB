import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proyecto from "./components/Proyecto";
import Amenidades from "./components/Amenidades";
import Lotes from "./components/Lotes";
import Ubicacion from "./components/Ubicacion";
import Precios from "./components/Precios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proyecto />
        <Amenidades />
        <Lotes />
        <Ubicacion />
        <Precios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
