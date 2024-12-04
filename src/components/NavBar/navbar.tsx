"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import arcadia from "../../../public/arcadia.jpg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para manejar el menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#040c63] text-white fixed top-0 left-0 w-full z-10 shadow-md backdrop-blur-md bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="#">
            <Image
              src={arcadia}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Botón para abrir/cerrar el menú móvil */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú de navegación (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <Link
            href="#technologies"
            className="hover:text-[#1ebdcf] transition"
          >
            Tecnologías
          </Link>
          <Link href="#projects" className="hover:text-[#1ebdcf] transition">
            Proyectos
          </Link>
          <Link href="#testimonials" className="hover:text-[#1ebdcf] transition">
            Clientes
          </Link>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-[#040c63] text-white absolute top-16 left-0 w-full py-4 space-y-4 transition-all duration-300 ease-in-out`}
      >
        <Link href="#technologies" className="block text-center py-2">
          Tecnologías
        </Link>
        <Link href="#projects" className="block text-center py-2">
          Proyectos
        </Link>
        <Link href="#testimonials" className="block text-center py-2">
          Clientes
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
