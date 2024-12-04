const TestimonialsSection = () => {
  const testimonios = [
    {
      nombre: "Santiago Posse",
      comentario:
        "Excelente trabajo, muy profesional y cumplió con los plazos establecidos.",
      descripcion: "Software para gestión hotelera Villa Rosarito",
      calificacion: 5,
    },
    {
      nombre: "German Ostchega",
      comentario:
        "El diseño es increíble, la comunicación fue clara en todo momento, los chicos muy dispuestos a los cambios propuestos.",
      descripcion: "Ecommerce/Red Social para mutual",
      calificacion: 5,
    },
    {
      nombre: "Mercedes Figueroa",
      comentario:
        "Muy satisfecha con el resultado, superó nuestras expectativas, y muy prácticos para trabajar.",
      descripcion: "Ecommerce de productos de animales",
      calificacion: 5,
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-[#eef2ff] to-[#dbe7ff]"
      id="testimonials"
    >
      <h2 className="text-4xl font-extrabold text-center mb-16 text-[#040c63]">
        Testimonios de Clientes
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl"
          >
            <h4 className="text-2xl font-bold text-[#040c63] mb-4">
              {testimonio.nombre}
            </h4>
            <p className="text-gray-600 text-center italic mb-6">
              {testimonio.comentario}
            </p>
            <p className="text-[#096392] text-center font-medium mb-4">
              {testimonio.descripcion}
            </p>
            <div className="flex justify-center items-center">
              {[...Array(testimonio.calificacion)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
