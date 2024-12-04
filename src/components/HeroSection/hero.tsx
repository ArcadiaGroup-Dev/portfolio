"use client";

import Image from "next/image";
import Link from "next/link";
import arcadia from "../../../public/arcadialogo.png";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-[#040c63] via-[#1ebdcf] to-[#096392] text-white text-center p-8">
      <div>
        <div className="mb-6 flex justify-center items-center">
          <Image
            src={arcadia}
            alt="Logo"
            width={400}
            height={400}
            className="rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-extrabold mb-4 text-shadow-md">
          Bienvenido a Arcadia
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Creamos experiencias digitales modernas, escalables e innovadoras.
        </p>
        <Link href="#projects">
          <span className="bg-white text-[#040c63] py-3 px-8 rounded-full text-xl font-semibold hover:bg-[#1ebdcf] transition duration-300">
            Ver nuestros proyectos
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
