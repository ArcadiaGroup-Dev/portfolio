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
      nombre: "German Ostchega ",
      comentario:
        "El diseño es increíble, la comunicación fue clara en todo momento, los chicos muy dispuestos a los cambios propuestos",
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
    <section className="py-16 px-4 bg-white" id="testimonials">
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#040c63]">
        Testimonios de Clientes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-[#f4f7ff] shadow-xl rounded-lg p-6 flex flex-col items-center"
          >
            <h4 className="text-xl font-semibold text-[#040c63] mb-2">
              {testimonio.nombre}
            </h4>
            <p className="text-gray-600 text-center mb-4">
              {testimonio.comentario}
            </p>
            <p className="text-[#096392] text-center font-semibold">
              {testimonio.descripcion}
            </p>
            <div className="flex justify-center items-center mt-4">
              {[...Array(testimonio.calificacion)].map((_, i) => (
                <span key={i} className="text-yellow-500">
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
