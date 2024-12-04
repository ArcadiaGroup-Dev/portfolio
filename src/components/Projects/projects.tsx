"use client";

import Image from "next/image";
import { useState } from "react";

type Proyecto = {
  titulo: string;
  descripcion: string;
  imagenes: string[];
  descripcionModal: string;
};

const ProjectsSection = () => {
  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<Proyecto | null>(null);

  const manejarClickProyecto = (proyecto: Proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const cerrarModal = () => {
    setProyectoSeleccionado(null);
  };

  const manejarClickModal = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const proyectos: Proyecto[] = [
    {
      titulo: "PupShops",
      descripcion: "Descripción del proyecto 1",
      imagenes: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
      descripcionModal: `
        Este proyecto incluye:
        - Sistema de reservas optimizado: Agenda citas de manera rápida y sencilla.
        - Carrito de compras dinámico: Interfaz intuitiva y estilizada con Tailwind CSS.
        - ChatBot funcional: Resuelve dudas en tiempo real.
        - Sistema de descuentos dinámico: Cada compra es más atractiva.
        
        Desarrollado con JavaScript, React, Nest.js, PostgreSQL y Tailwind CSS, combina tecnología avanzada con diseño innovador.
        
        ¿Querés un e-commerce único? En Arcadia, lo hacemos realidad. ¡Exploralo y conectemos!
      `,
    },
    {
      titulo: "Villa Rosarito",
      descripcion: "Bienvenidos a Hotel Villa Rosarito",
      imagenes: [
        "/v.png",
        "/v1.png",
        "/v2.png",
        "/v3.png",
        "/v4.png",
        "/v5.png",
        "/v6.png",
        "/v7.png",
      ],
      descripcionModal: `
        Bienvenidos a Hotel Villa Rosarito
        En Arcadia, diseñamos sistemas de gestión hotelera eficientes. Este proyecto incluye:
        - Vistas personalizadas: Interfaces específicas para administradores, encargados y empleados.
        - Formularios intuitivos: Para inicio de sesión, registro de reservas y compras, y gestión de reservas con filtros avanzados.
        - Diseño moderno: Creado con Tailwind CSS para una experiencia visual atractiva y fluida.
        
        Desarrollado con JavaScript, React, Nest.js, PostgreSQL y Tailwind CSS, este sistema optimiza la gestión y mejora la experiencia del usuario.
        
        ¿Necesitás una solución para tu hotel? En Arcadia, la hacemos posible. ¡Conectemos!
      `,
    },
    {
      titulo: "Tienda Deportiva / DEMO",
      descripcion: "E-commerce para Tienda Deportiva",
      imagenes: ["/cab1.png", "/cab2.png", "/cab3.png", "/cab4.png"],
      descripcionModal: `
        En Arcadia, desarrollamos e-commerces que optimizan la experiencia de compra. Este proyecto incluye:
        - Diseño modular: Creamos componentes flexibles que facilitan el mantenimiento y la expansión del sitio.
        - Lógica avanzada en el backend: Asegura una experiencia de compra fluida desde la selección de productos hasta el pago.
        - Diseño limpio y deportivo: Utilizamos Tailwind CSS para un estilo moderno y atractivo.
        
        Desarrollado con JavaScript, React, Nest.js, PostgreSQL y Tailwind CSS, este proyecto combina innovación, eficiencia y diseño.
        
        ¿Buscás un e-commerce único? En Arcadia, lo hacemos posible. ¡Conectemos!
      `,
    },
    {
      titulo: "Portfolio / DEMO",
      descripcion: "Portafolio interactivo",
      imagenes: ["/image10.jpg", "/image11.jpg", "/image12.jpg"],
      descripcionModal: `
        En Arcadia, creamos portafolios que reflejan talento y profesionalismo. Este ejemplo incluye:
        - Proyectos interactivos: ChatBots, juegos y más.
        - Cambio de idioma en tiempo real.
        - Enlaces directos a redes sociales.
        
        Desarrollado con JavaScript, React, Next.js, Nest.js, PostgreSQL y Tailwind CSS, combina diseño moderno con tecnología avanzada.
        
        ¿Querés un portafolio único? En Arcadia, lo hacemos posible. ¡Exploralo y conectemos!
      `,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100" id="projects">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#040c63]">
        Nuestros Últimos Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            onClick={() => manejarClickProyecto(proyecto)}
          >
            <Image
              src={proyecto.imagenes[0]}
              alt={proyecto.titulo}
              width={350}
              height={250}
              className="rounded-lg mb-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <h4 className="text-2xl font-semibold text-[#040c63] mb-4">
              {proyecto.titulo}
            </h4>
            <p className="text-gray-700 text-center text-lg">
              {proyecto.descripcion}
            </p>
          </div>
        ))}
      </div>

      {proyectoSeleccionado && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={cerrarModal}
        >
          <div
            className="bg-white p-8 rounded-lg w-3/4 max-w-4xl overflow-hidden shadow-lg transform transition-all duration-300 scale-95 hover:scale-100"
            onClick={manejarClickModal}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#040c63]">
              {proyectoSeleccionado.titulo}
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              {proyectoSeleccionado.descripcionModal}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-80 overflow-y-auto">
              {proyectoSeleccionado.imagenes.map((imagen, index) => (
                <Image
                  key={index}
                  src={imagen}
                  alt={`${proyectoSeleccionado.titulo} imagen ${index + 1}`}
                  width={550}
                  height={350}
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              ))}
            </div>
            <button
              className="mt-8 px-8 py-4 bg-[#040c63] text-white rounded-full text-xl font-semibold hover:bg-[#1ebdcf] transition duration-300"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
