import chili from "./assets/chili.jpg";
import losdosh from "./assets/losdosh.jpg";
import lapi from "./assets/lapi.jpg";
import mamaypi from "./assets/mamaypi.jpg";
import papaypi from "./assets/papaypi.jpg";
import loslosdosh from "./assets/imagenDeLosDos.jpg"
import cinacum from './assets/cinacum.gif'
import cielo from "./assets/cielo.jpg"


import { useState } from "react";

function TarjetaCumple() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-200 via-purple-500 to-red/20 border-[3px] border-purple-100">

      <main className="flex flex-col z-10 mx-2 md:mx-10 my-4 md:my-10 overflow-hidden backdrop-blur-sm rounded-lg">

        <div className="flex flex-col md:flex-row rounded-xl w-full items-center md:items-stretch gap-2 md:gap-0 bg-gradient-to-br from-[#ec489e]/80 via-transparent to-purple-50/40 bg-[#ec489e]/20 shadow-2xl">
          <img
            className="overflow-auto w-full md:w-96 h-48 sm:h-56 md:h-auto object-cover object-center rounded-t-xl md:rounded-l-xl md:rounded-t-none"
            src={lapi}
            alt="la pi posando preciosa"
          />
          <div className="flex flex-col w-full md:w-auto ml-0 md:ml-2 border-t-2 md:border-t-0 md:border-l-2 border-red-100 font-bebas tracking-widest p-4 justify-start items-center md:items-start">
            <h1 className="text-white font-extrabold text-[2em] sm:text-[2.5em] md:text-[3.5em] text-center md:text-left pb-4">FELIZ CUMPLEAÑOS A LA HERMOSA CUMPLEAÑERA</h1>
            <p className="text-purple-100 text-[1em] sm:text-[1.1em] md:text-[1.2em]">OLA MI CORAZOM HE DESARROLLADO ESTA PAGINA WEB (bastante básica) como un pequeño regalo de cumpleaños. Realmente ha costado un poco ya que no se demasiado como se hacen paginas web. Sin embargo, di lo mejor de mi para lograr darte esta pequeña sorpresa que espero que te guste mucho. Deseo que tengas un dia precioso en el que logres sentir el amor que tanto yo, como todos los que te queremos, tenemos por ti. <br /><br /><br />
              Aqui encontraras unos cuantos mensajes que algunas personas que te quieren mucho han querido compartirte con todo el amor del mundo.
            </p>
          </div>

        </div>
        
        <header className="flex justify-between">
          <h1 className="pt-8 pb-4 px-2 md:px-6 font-bebas tracking-[12px] text-[7vw] md:text-[30px] text-[#ffffff] text-start">
            FELICES 24 AÑITOS MI CORAZOM
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md: md:gap-9 mr-0 md:mr-5">
            <a href="" target="_blank" className="flex px-2 m-auto border border-purple-950 bg-purple-950/20 rounded-full font-bebas text-purple-950 py-2"></a>
            <a href="" target="_blank" className="flex px-2 m-auto border border-purple-950 bg-purple-950/20 rounded-full font-bebas text-purple-950 py-2"></a>
            <a href="" target="_blank" className="flex px-2 m-auto border border-purple-950 bg-purple-950/20 rounded-full font-bebas text-purple-950 py-2"></a>
          </div>
        </header>
        
        <section className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8">
          {/* Tarjeta Hansel*/}
          <div className="flex flex-col md:flex-row min-h-[180px] md:min-h-[400px] min-w-[320px] md:min-w-[600px] max-w-full md:max-w-[600px] w-full md:w-[600px] h-auto md:h-[400px] m-2 text-start bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200/70 rounded-[1em] overflow-hidden shadow-lg border border-blue-300">
            <img className="w-full md:w-[250px] h-40 sm:h-48 md:h-full object-cover object-center" src={losdosh} alt="imagen de la chili chili" />
            <div className="flex flex-col justify-between border border-blue-200 rounded-[1.5em] m-4 text-[4vw] md:text-[11px] flex-1 md:overflow-auto overflow-visible h-auto">
              <div className="flex flex-row items-center justify-between">
                <h2 className="p-1 md:px-6 pt-4 md:pt-6 uppercase font-bebas tracking-[6px] text-[6vw] md:text-[30px] mb-3 text-[#eeecfb]">Hansel/Hpan</h2>
                <h2 className="mx-2 md:mx-3.8 text-[8vw] md:text-[45px]">🎨</h2>
              </div>
              <p className="px-2 md:px-4 justify-center font-fraunces text-[3vw] md:text-[14px] text-[#f5f3ff]">Este es un pequeño mensaje de tu novio Hansel. Con mucho amor. Feliz Cumpleaños mi amor hermosa, Diosa de mi vida y lucecita de felicidad</p>
              <button id="hpan" onClick={() => setOpenModal('hpan')} className="text-center py-2 bg-blue-200/40 uppercase font-bebas text-[4vw] md:text-[16px] tracking-[4px] md:tracking-[6px] mt-2 text-[#eeecfb] md:overflow-hidden">Dame click</button>
              {openModal === 'hpan' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2 md:p-0">
                  <div className="bg-[#97d9f9]/20 backdrop-blur-3xl border-[1px] border-[#42a8ef] rounded-xl p-3 md:p-6 max-w-full md:max-w-[90vw] w-full md:w-auto shadow-lg flex flex-col items-center mx-auto">
                    <div className="flex items-center gap-12">
                      <div>
                        <img src={loslosdosh} alt="imagen de los dos" className="border-[2px] border-sky-50 w-full md:max-w-md lg:max-w-2xl mb-4 rounded-lg object-cover" style={{ maxHeight: '40vh' }} />
                        <div className="flex gap-12">
                          <img className="w-40 h-30" src={cinacum} alt="" />
                          <img className="border-[2px] border-sky-50 w-60 md:max-w-md lg:max-w-2xl mb-4 rounded-lg object-cover" src={cielo} alt="" />
                        </div>
                      </div>
                      <iframe className="rounded-lg border-2 border-blue-300" width="270" height="480" src="https://www.youtube.com/embed/ODrC0aPSqO0" title="Feliz cumpleaños a los que cumplen en agosto XD 🥳" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <h3 className="p-2 md:pt-10 md:p-3 mb-4 text-center text-[1.3em] md:text-[2em] lg:text-[2.5em] font-bebas text-[#e8f3fa] leading-tight">Ahora mismo además de felicitarte quiero darte las gracias, no tienes idea de lo agradecido que estoy de poder tenerte en mi vida. Me siento completamente bendecido por Dios por la vida o cualquier fuerza suprema que nos dirige por tener la posibilidad de que estes presente en mi día a día. Desde que apareciste has llenado por completo mi vida de alegría, de entusiasmo y sobretodo me has mostrado lo bonito de la vida lo hermoso que es pasar los dís al lado de la mujer que amo.. Sirley desde lo más profundo de mi corazón, te amo y te adoro como nunca a nadie en mi vida. Eres la luz que me ilumina y me mantiene con ganas de querer vivir día tras día. Espero que podamos seguir juntos mucho, mucho tiempo más y espero poder siempre hacerte feliz y hacerte sentir la mujer más especial del mundo. Te amo, mi amor. <br />Tu y yo estamos hechos el uno para el otro. Te Pi 🎨</h3>
                    <button onClick={() => setOpenModal(null)} className="px-6 md:px-8 py-2 md:py-1 backdrop-blur-md border-[1px] border-[#42a8ef] rounded-full hover:bg-gray-400 transition font-bebas text-[1em] md:text-[2em] text-[#f1f7fa] mt-2">Salir</button>
                  </div>
                </div>
              )}
            </div>
          </div>


          {/* Tarjeta Mamá Elba*/}
          <div className="flex flex-col md:flex-row min-h-[180px] md:min-h-[400px] min-w-[320px] md:min-w-[600px] max-w-full md:max-w-[600px] w-full md:w-[600px] h-auto md:h-[400px] m-2 text-start bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-400 rounded-[1em] overflow-hidden border border-yellow-300">

            <img className="w-full md:w-[250px] h-40 sm:h-48 md:h-full object-cover object-center" src={mamaypi} alt="imagen de la chili chili" />

            <div className="flex flex-col justify-between border border-yellow-100 rounded-[1.5em] m-4 text-[4vw] md:text-[11px] flex-1 md:overflow-auto overflow-visible h-auto">

              <div className="flex flex-row items-center justify-between">

                <h2 className="px-2 md:px-6 pt-4 md:pt-6 uppercase font-bebas tracking-[6px] text-[6vw] md:text-[30px] mb-3 text-yellow-100">Mamá <br />elba</h2>

                <h2 className="mx-2 md:mx-4 text-[8vw] md:text-[45px]">😍</h2>
              </div>

              <p className="px-2 md:px-4 justify-center font-fraunces text-[3vw] md:text-[14px] text-yellow-100">Aqui un mensajito de tu segunda mamá. Mamá Elba. Con mucho cariño mucho amor, para la nueva preciosa hija que la vida le ha dado el orgullo de tener.</p>

              <button id="mama" onClick={() => setOpenModal('mama')} className="text-center py-2 bg-yellow-100/40 uppercase font-bebas text-[4vw] md:text-[16px] tracking-[4px] md:tracking-[6px] mt-2 text-yellow-100">Dame click</button>

              {openModal === 'mama' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-800 bg-opacity-40 p-2 md:p-0">
                  <div className="bg-yellow-500/60 backdrop-blur-3xl border-[1px] border-yellow-900 rounded-xl p-3 md:p-6 max-w-full md:max-w-[90vw] w-full md:w-auto shadow-lg flex flex-col items-center mx-auto">

                    <div>
                        <img src={loslosdosh} alt="imagen de los dos" className="border-[2px] border-sky-50 w-full md:max-w-md lg:max-w-2xl mb-4 rounded-lg object-cover" style={{ maxHeight: '40vh' }} />
                        <div className="flex gap-12">
                          <img className="border-[2px] border-yellow-300 w-60 md:max-w-md lg:max-w-2xl mb-4 rounded-lg object-cover" src={cielo} alt="" />
                        </div>
                      </div>

                    <p className="p-2 md:p-3 mb-4 text-center text-[1.3em] md:text-[2em] lg:text-[2.5em] font-bebas text-[#e8f3fa] leading-tight">Mensaje especial para Mamá Elba. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem nihil, consectetur cum reprehenderit mollitia repellendus facilis deserunt, maxime laboriosam molestiae error, dolore repudiandae vero et temporibus ullam reiciendis totam.</p>
                    <button onClick={() => setOpenModal(null)} className="px-6 md:px-8 py-2 md:py-1 backdrop-blur-md border-[1px] border-yellow-900 rounded-full hover:bg-yellow-200 transition font-bebas text-[1em] md:text-[2em] text-[#f1f7fa] mt-2">Salir</button>
                  </div>

                </div>
              )}

            </div>
          </div>
          
          
          {/* Tarjeta Papá Raul*/}
          <div className="flex flex-col md:flex-row min-h-[180px] md:min-h-[400px] min-w-[320px] md:min-w-[600px] max-w-full md:max-w-[600px] w-full md:w-[600px] h-auto md:h-[400px] m-2 text-start bg-gradient-to-br from-red-900 via-red-500 to-red-400 rounded-[1em] overflow-hidden shadow-lg border border-red-300">
            <img className="w-full md:w-[250px] h-40 sm:h-48 md:h-full object-cover object-center" src={papaypi} alt="imagen de la chili chili" />
            <div className="flex flex-col justify-between border border-red-200 rounded-[1.5em] m-4 text-[4vw] md:text-[11px] flex-1 md:overflow-auto overflow-visible h-auto">
              <div className="flex flex-row items-center justify-between">
                <h2 className="px-2 md:px-6 pt-4 md:pt-6 uppercase font-bebas tracking-[6px] text-[6vw] md:text-[30px] mb-3 text-red-100">Papá <br /> raul</h2>
                <h2 className="mx-2 md:mx-4 text-[8vw] md:text-[45px]">😘</h2>
              </div>
              <p className="px-2 md:px-4 justify-center font-fraunces text-[3vw] md:text-[14px] text-red-100">De parte de Papá Raul, que con muchisimo amor por su hijita querida te desea lo mejor en este día especial y para todos tus días venideros y que esten llenos de amor y felicidad</p>
              <button id="papa" onClick={() => setOpenModal('papa')} className="text-center py-2 bg-red-200/40 uppercase font-bebas text-[4vw] md:text-[16px] tracking-[4px] md:tracking-[6px] mt-2 text-red-100">Dame click</button>
              {openModal === 'papa' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2 md:p-0">
                  <div className="bg-red-900/60 backdrop-blur-3xl border-[1px] border-red-900 rounded-xl p-3 md:p-6 max-w-full md:max-w-[90vw] w-full md:w-auto shadow-lg flex flex-col items-center mx-auto">
                    <h3 className="p-2 md:p-3 mb-4 text-center text-[1.3em] md:text-[2em] lg:text-[2.5em] font-bebas text-[#e8f3fa] leading-tight">Mensaje especial para Papá Raul.</h3>
                    <button onClick={() => setOpenModal(null)} className="px-6 md:px-8 py-2 md:py-1 backdrop-blur-md border-[1px] border-red-900 rounded-full hover:bg-red-200 transition font-bebas text-[1em] md:text-[2em] text-[#f1f7fa] mt-2">Salir</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          
          {/* Tarjeta Mamita */}
          <div className="flex flex-col md:flex-row min-h-[180px] md:min-h-[400px] min-w-[320px] md:min-w-[600px] max-w-full md:max-w-[600px] w-full md:w-[600px] h-auto md:h-[400px] m-2 text-start zbg-gradient-to-br from-green-800 via-green-500 to-green-300 rounded-[1em] overflow-hidden shadow-lg border border-green-300">
            <img className="w-full md:w-[250px] h-40 sm:h-48 md:h-full object-cover object-center" src={chili} alt="imagen de la chili chili" />
            <div className="flex flex-col justify-between border border-purple-200 rounded-[1.5em] m-4 text-[4vw] md:text-[11px] flex-1 md:overflow-auto overflow-visible h-auto">
              <div className="flex flex-row items-center justify-between">
                <h2 className="px-2 md:px-6 pt-4 md:pt-6 uppercase font-bebas tracking-[6px] text-[6vw] md:text-[30px] mb-3 text-green-200">Mamita</h2>
                <h2 className="mx-2 md:mx-4 text-[8vw] md:text-[45px]">🩷</h2>
              </div>
              <p className="px-2 md:px-4 justify-center font-fraunces text-[3vw] md:text-[14px] text-green-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, facilis fugit incidunt aliquam cum maiores atque quas nulla, eveniet in perspiciatis quia. Enim eveniet molestiae incidunt atque aliquam unde recusandae!</p>
              <button id="mamita" onClick={() => setOpenModal('mamita')} className="text-center py-2 bg-green-300/80 uppercase font-bebas text-[4vw] md:text-[16px] tracking-[4px] md:tracking-[6px] mt-2 text-green-100">Dame click</button>
              {openModal === 'mamita' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-900 bg-opacity-40 p-2 md:p-0">
                  <div className="bg-green-900/60 backdrop-blur-3xl border-[1px] border-green-900 rounded-xl p-3 md:p-6 max-w-full md:max-w-[90vw] w-full md:w-auto shadow-lg flex flex-col items-center mx-auto">
                    <h3 className="p-2 md:p-3 mb-4 text-center text-[1.3em] md:text-[2em] lg:text-[2.5em] font-bebas text-[#e8f3fa] leading-tight">Mensaje especial para Mamita.</h3>
                    <button onClick={() => setOpenModal(null)} className="px-6 md:px-8 py-2 md:py-1 backdrop-blur-md border-[1px] border-green-900 rounded-full hover:bg-green-200 transition font-bebas text-[1em] md:text-[2em] text-[#f1f7fa] mt-2">Salir</button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </section>

      </main>

    </div>
  );
}

function App() {
  return <TarjetaCumple/>;
}

export default App;
