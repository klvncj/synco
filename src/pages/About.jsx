import React from 'react'
import Navbar from '../components/Navbar'
import Info from '../components/Info'
import { Link } from 'react-router-dom'
import Partners from '../components/Partners'

const About = () => {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Info />
      <Navbar page={'À propos'} />
      {/* Banner with solid color and text in the center - the text says ('about' in french) */}
      <section className="w-full h-60 bg-gray-800 flex justify-center items-center">
        <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white text-3xl font-bold uppercase">À propos de nous</h1>
      </section>
      <section className="flex flex-col justify-center items-center w-full my-4 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center mt-8 text-center gap-4 max-w-4xl">
          <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-2xl">- COSTAN Sarl -</h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-justify">
            Bienvenue chez Costan Sarl, votre partenaire de confiance pour les pièces détachées de camions, remorques, chariots élévateurs et engins lourds. Forts de plusieurs années d'expérience dans le secteur, nous nous engageons à fournir des produits de haute qualité qui répondent aux besoins spécifiques de nos clients.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-justify">
            Notre mission est de simplifier l'approvisionnement en pièces détachées en offrant une gamme complète de produits issus de marques reconnues ainsi que notre propre gamme de pièces. Nous comprenons l'importance de la fiabilité et de la performance dans le secteur des transports et de la logistique, c'est pourquoi nous sélectionnons rigoureusement chaque pièce pour garantir qu'elle répond aux normes les plus élevées.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-justify">
            Chez Costan Sarl, nous valorisons la satisfaction de nos clients et nous nous efforçons de fournir un service exceptionnel. Notre équipe dédiée est toujours prête à vous aider à trouver les pièces dont vous avez besoin et à répondre à toutes vos questions.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-justify">
            Merci de choisir Costan Sarl comme votre fournisseur de pièces détachées. Nous sommes impatients de collaborer avec vous et de contribuer au succès de vos opérations.
          </p>
        </div>

      </section>
     
     <Partners />
     
      <section className="w-full bg-black text-white py-6 flex flex-col md:justify-between md:items-center gap-4 px-4 md:px-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div className='w-full flex justify-center items-center flex-col py-6 my-4'>
          <h2 className='text-4xl font-bold'>Need any Help ?</h2>
          <Link to="/contact">
            <button className="mt-2 px-4 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
              Contactez-nous
            </button>
          </Link>
        </div>
        <hr className="border-t border-gray-600 w-full" />
        <div className="text-center md:text-left">
          © 2025 Costan Sarl. Tous droits réservés.
        </div>
        {/* <div className="text-center md:text-right">
                          Conçu par Kelvyn Dev
                      </div> */}
      </section>
    </main>
  )
}

export default About