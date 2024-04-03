import "../styles/index.css"

const Index = () => {
  return (
    <>
      <header className="relative min-h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row gap-10 w-full lg:justify-between z-20 mt-32 lg:mt-40 px-10 lg:px-40 appear">
          <h2 className="text-white text-4xl lg:text-6xl font-semibold lg:max-w-[900px]">Dispositivo de Determinación de Grupo Sanguíneo Rápido</h2>

          <h2 className="text-white text-xl mt-5">Trust by
            <span className="text-rose-600"> 1000+ </span>
            companies
          </h2>

        </div>
        <article className="hidden md:grid grid-cols-1 lg:grid-cols-4 mt-20 lg:mt-60 px-10 lg:px-40 z-20 gap-10 appear">
          <h3 className="text-white text-2xl text-center">Objetivo</h3>
          <div className="">
            <p className="text-white">Desarrollar un dispositivo capaz de identificar rápidamente el grupo sanguíneo de una persona.</p>
            <div className="h-[1px] w-full bg-white my-5" />
            <p className="text-white">Utilizando técnicas avanzadas de comparación de imágenes mediante Machine Learning y OpenCV para una precisión y velocidad óptimas.</p>
            <button className="text-white bg-rose-600 rounded-lg p-3 mt-5">Ver mas</button>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between bg-rose-700 w-full p-5 rounded">
            <p className="text-white">Este innovador dispositivo utiliza la potencia de la inteligencia artificial para ofrecer resultados precisos y rápidos en la determinación del grupo sanguíneo. Gracias a algoritmos avanzados de aprendizaje automático, nuestro sistema puede analizar y comparar imágenes de muestras sanguíneas con una precisión sin precedentes. Esto no solo garantiza resultados confiables, sino que también agiliza el proceso, proporcionando una solución eficiente para profesionales médicos y pacientes por igual.</p>
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl"></span>
              <button type="button" className="text-rose-600 bg-white rounded-lg p-3 w-1/3 mt-5">Aprender mas</button>
            </div>
          </div>
        </article>
        <div className="w-full min-h-screen bg-black opacity-60 absolute z-10" />
        <img src="/hero-4.jpg" alt="hero" className="min-h-screen object-cover absolute" />
      </header >

      <section className="md:hidden grid grid-cols-1 lg:grid-cols-4 mt-20 lg:mt-60 px-10 lg:px-40 z-20 gap-10 appear">
        <h3 className="text-white text-2xl text-center">Objetivo</h3>
        <div className="">
          <p className="text-white">Desarrollar un dispositivo capaz de identificar rápidamente el grupo sanguíneo de una persona.</p>
          <div className="h-[1px] w-full bg-white my-5" />
          <p className="text-white">Utilizando técnicas avanzadas de comparación de imágenes mediante Machine Learning y OpenCV para una precisión y velocidad óptimas.</p>
          <button className="text-white bg-rose-600 rounded-lg p-3 mt-5">Ver mas</button>
        </div>
        <div className="lg:col-span-2 flex flex-col justify-between bg-rose-700 w-full p-5 rounded">
          <p className="text-white">Este innovador dispositivo utiliza la potencia de la inteligencia artificial para ofrecer resultados precisos y rápidos en la determinación del grupo sanguíneo. Gracias a algoritmos avanzados de aprendizaje automático, nuestro sistema puede analizar y comparar imágenes de muestras sanguíneas con una precisión sin precedentes. Esto no solo garantiza resultados confiables, sino que también agiliza el proceso, proporcionando una solución eficiente para profesionales médicos y pacientes por igual.</p>
          <div className="flex justify-between items-center">
            <span className="text-white text-4xl"></span>
            <button type="button" className="text-rose-600 bg-white rounded-lg p-3 w-1/3 mt-5">Aprende mas</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Index
