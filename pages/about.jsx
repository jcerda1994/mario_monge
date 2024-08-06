import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Biografía</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Biografía</h1>
            <p className="description">
              Nacido en Monterrey, Nuevo León, Mario Monge se ha coronado como
              uno de los más grandes tenores de México. Un día en la Scala de
              Milán, Luciano Pavarotti quedó sorprendido por su voz y su
              parecido a él en su juventud. <br />
              Pavarotti votó por un joven tenor de México, y los entendidos no
              demoraron en decir que era un heredero de Pavarotti al escucharlo.{" "}
              <br />
              Mario Monge interpretó a la perfección los temas especiales de
              Luciano, firmando contratos exclusivos y participando con su voz
              en telenovelas de Televisa que llegaron a más de 180 naciones,
              como el tema de apertura "Cuando se sabe amar". <br />
              La Orquesta Sinfónica de México, con más de cien músicos, lo
              acompañó en sus interpretaciones. Monge ha consagrado su carrera
              con el más amplio repertorio italiano que comprende canciones,
              romanzas y los más conocidos temas del arte lírico y el bel canto.{" "}
              <br />
              Cantó en directo desde la casa papal en Lorenzago Di Cadore por la
              RAI en un homenaje al papa Juan Pablo II en su canonización.
            </p>

            <h1 className="title">Logros</h1>
            <ul className="description">
              <li>
                Uno de los tenores más importantes de México y de Latinoamérica.
              </li>
              <li>
                Su carrera lo ha llevado a las posiciones más privilegiadas a
                las que un cantante de ópera pueda aspirar, desde ser parte de
                la Scala de Milán hasta ser invitado por Luciano Pavarotti para
                estudiar técnica vocal con el maestro Arrigo Pola en Módena.
              </li>
              <li>Fundador de la Compañía Ópera de Monterrey.</li>
              <li>
                Participó en numerosos eventos de la Organización Mundial por la
                Paz y fue invitado a múltiples eventos de talla internacional
                con la asistencia de embajadores y cónsules.
              </li>
              <li>
                Representante cultural de México en diversos países y embajador
                por la paz en la Organización Mundial por la Paz.
              </li>
              <li>
                Contribuyó a proyectos de la Organización de las Naciones Unidas
                en conjunto con la SEMARNAT.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
