import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Headset, MessageCircleMore } from 'lucide-react'
import Info from '../components/Info'

const Contact = () => {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Info />
      <Navbar />
      <section
        className='w-full h-[300px] bg-black/90 flex justify-center items-center text-white'
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className='flex flex-col justify-center items-center text-center gap-2 px-2'>
          <h2 className='text-4xl uppercase font-semibold text-white'>Contact</h2>
          <p>Envoyez un message à nos équipes Commerciales ou Support sur WhatsApp<br /> pour une assistance rapide et personnalisée.</p>
        </div>

      </section>

      <section className="flex flex-col justify-center items-center w-full my-6 mb-12">
        <div className='flex justify-center items-center my-7'>
          <h2 className='font-semibold tracking-normal text-4xl text-center' style={{ fontFamily: "'Poppins', sans-serif" }}>Discutez avec notre équipe.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div className='border-gray-500 border rounded-md flex flex-col gap-y-4  p-4 w-96'>
            <h3 className='flex gap-1 font-bold'><MessageCircleMore /> Ventes</h3>
            <p className='font-semibold leading-7 tracking-wide '>Nouveau ici ?
              <p className='font-normal'>Contactez notre équipe commerciale sur WhatsApp — nous répondrons à vos questions et étudierons vos besoins.</p>
            </p>
            <a href='https://wa.me/237676369747' className='bg-black text-white px-2 py-1 w-auto flex justify-center items-center rounded'>Chat with sales</a>
            <p className=''>Ou envoyez-nous un e-mail à <a href='mailto:costan.sarl@gmail.com' className='text-cyan-800 font-semibold'>sales@costan.com</a></p>
          </div>
          {/* Next step */}
          <div className='border-gray-500 border rounded-md flex flex-col gap-y-4  p-4 w-96'>
            <h3 className='flex gap-1 font-bold'><Headset /> Assistance client</h3>
            <p className='font-semibold leading-7 tracking-wide '>Vous travaillez déjà avec nous ?
              <p className='font-normal'> Pour toute assistance, notre équipe d'assistance dévouée et amicale est à votre disposition par simple message.</p></p>
            <a href='https://wa.me/237676369747' className='bg-black text-white px-2 py-1 w-auto flex justify-center items-center rounded'>Discutez avec l'assistance</a>
            <p className=''>Ou envoyez-nous un e-mail à <a href='mailto:costan.sarl@gmail.com' className='text-cyan-800 font-semibold'>support@costan.com</a></p>
          </div>
        </div>

      </section>
      <hr className='border-gray-300' />


      <Footer />
    </main>
  )
}

export default Contact