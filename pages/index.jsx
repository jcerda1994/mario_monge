import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Tributo a Pavarotti</h1>
            <p className="description">
              Descubre a Mario Monge, El único tenor mexicano discípulo de
              Luciano Pavarotti
            </p>

            <Link href="/contact">
              <a className="cta">Contacto</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <img src="/circular_image.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
