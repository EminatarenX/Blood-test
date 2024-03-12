const Index = () => {
  return (
    <>
      <header className="relative min-h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row gap-10 w-full lg:justify-between z-20 mt-32 lg:mt-40 px-10 lg:px-40">
          <h2 className="text-white text-6xl font-semibold lg:max-w-[900px]">Me dicen el titulo blabla sharala lasdfkjsjdfh</h2>

          <h2 className="text-white text-xl mt-5">Trust by
            <span className="text-rose-600"> 1000+ </span>
            companies
          </h2>

        </div>
        <article className="hidden md:grid grid-cols-1 lg:grid-cols-4 mt-20 lg:mt-60 px-10 lg:px-40 z-20 gap-10">
          <h3 className="text-white text-2xl text-center">facts</h3>
          <div className="">
            <p className="text-white">Un dispositivo super genial que hace cosas bien chidas, ahi me dicen que le pongo aqui ajajjajaj tiene que se una cantidad de texto aproximada</p>
            <div className="h-[1px] w-full bg-white my-5" />
            <p className="text-white">Un dispositivo super genial que hace cosas bien chidas, ahi me dicen que le pongo aqui ajajjajaj tiene que se una cantidad de texto aproximada</p>
            <button className="text-white bg-rose-600 rounded-lg p-3 mt-5">Learn more</button>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between bg-rose-700 w-full p-5 rounded">
            <p className="text-white">Un dispositivo super genial que hace cosas bien chidas, ahi me dicen que le pongo aqui ajajjajaj tiene que se una cantidad de texto aproximada</p>
            <div className="flex justify-between items-center">
              <span className="text-white text-4xl">20%</span>
              <button type="button" className="text-rose-600 bg-white rounded-lg p-3 w-1/3 mt-5">Learn more</button>
            </div>
          </div>
        </article>
        <div className="w-full min-h-screen bg-black opacity-60 absolute z-10" />
        <img src="/hero-4.jpg" alt="hero" className="min-h-screen object-cover absolute" />
      </header >

      <section className="md:hidden grid grid-cols-1 lg:grid-cols-4 mt-20 lg:mt-60 px-10 lg:px-40 z-20 gap-10">
        <h3 className="text-white text-2xl text-center">facts</h3>
        <div className="">
          <p className="text-white">Un dispositivo super genial que hace cosas bien chidas, ahi me dicen que le pongo aqui ajajjajaj tiene que se una cantidad de texto aproximada</p>
          <div className="h-[1px] w-full bg-white my-5" />
          <p className="text-white">Un dispositivo super genial que hace cosas bien chidas, ahi me dicen que le pongo aqui ajajjajaj tiene que se una cantidad de texto aproximada</p>
          <button className="text-white bg-rose-600 rounded-lg p-3 mt-5">Learn more</button>
        </div>
        <div className="lg:col-span-2 flex flex-col justify-between bg-rose-700 w-full p-5 rounded">
          <p className="text-white">Un dispositivo super genial que hace cosas bien chidas, ahi me dicen que le pongo aqui ajajjajaj tiene que se una cantidad de texto aproximada</p>
          <div className="flex justify-between items-center">
            <span className="text-white text-4xl">20%</span>
            <button type="button" className="text-rose-600 bg-white rounded-lg p-3 w-1/3 mt-5">Learn more</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Index
