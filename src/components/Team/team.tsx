import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="py-16 text-black px-4 bg-gray-100" id="who-we-are">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#040c63]">
        Conoce a nuestro equipo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-start">
        {/* Team members */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <Image
            src="/coti.png"
            alt="Constanza Herrera"
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Constanza Herrera</h4>
          <p className="text-gray-600 text-center">Backend</p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <Image
            src="/nacho.png"
            alt="Ignacio Jordan"
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Ignacio Jordan</h4>
          <p className="text-gray-600 text-center">Backend</p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <Image
            src="/gime.png"
            alt="Gimena Pascuale"
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Gimena Pascuale</h4>
          <p className="text-gray-600 text-center">Frontend</p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <Image
            src="/emi.png"
            alt="Emiliano Cararo"
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Emiliano Cararo</h4>
          <p className="text-gray-600 text-center">Frontend</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
