import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className="w-full bg-black text-white py-6 flex flex-col md:justify-between md:items-center gap-4 px-4 md:px-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <div className='w-full flex justify-center items-center flex-col py-6 my-4'>
                <h2 className='text-4xl font-bold'>Besoin d'aide ?</h2>
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
    )
}

export default Footer