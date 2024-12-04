import Image from "next/image";
import Link from "next/link";
import arcadialogo from "../../../public/arcadialogo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#040c63] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Sección de Contacto */}
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#1ebdcf] pb-2">
                Contacto
              </h3>
              <p className="text-gray-300 mb-3">
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
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#1ebdcf] pb-2">
                Enlaces útiles
              </h3>
              <ul className="space-y-3">
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

            {/* Espacio para Redes Sociales (puedes reutilizarlo más adelante si decides agregarlo) */}
            <div />
          </div>

          {/* Derechos reservados */}
          <div className="mt-12 text-center text-gray-300">
            <p>
              © {new Date().getFullYear()} Arcadia Group. Todos los derechos
              reservados.
            </p>
          </div>

          {/* Espacio para el logo */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-16 bg-white rounded-md shadow-lg flex items-center justify-center">
              <Image
                src={arcadialogo}
                alt="logo"
                height={50}
                width={50}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
