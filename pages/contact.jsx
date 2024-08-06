import Link from "next/link";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <head>
        <title>Contact</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contacto</h1>
            <p className="description">Ponte en contacto conmigo</p>
            <ul className="contact-links">
              <li className="contact-item">
                <a
                  href="https://www.instagram.com/tenormariomonge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <i className="fab fa-instagram"></i> tenormariomonge
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
