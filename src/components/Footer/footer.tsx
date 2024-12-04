import Link from "next/link";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#040c63] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sección de Contacto */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p className="text-gray-300 mb-2">
                Email:{" "}
                <a
                  href="mailto:arcadiagroup.team@gmail.com"
                  className="text-[#1ebdcf] hover:text-white transition"
                >
                  arcadiagroup.team@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                ¡No dudes en ponerte en contacto con nosotros!
              </p>
            </div>

            {/* Sección de Enlaces */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces útiles</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#technologies"
                    className="text-gray-300 hover:text-[#1ebdcf] transition"
                  >
                    Tecnologías
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-gray-300 hover:text-[#1ebdcf] transition"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#clients"
                    className="text-gray-300 hover:text-[#1ebdcf] transition"
                  >
                    Clientes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sección de Redes Sociales */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#1ebdcf] transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#1ebdcf] transition"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Derechos reservados */}
          <div className="text-center mt-8 text-gray-300">
            <p>
              © {new Date().getFullYear()} Arcadia Group. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}

export default Footer;
