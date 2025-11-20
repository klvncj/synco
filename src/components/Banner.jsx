import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section
            className="w-full h-[500px] flex justify-center items-center relative bg-cover bg-center"
            style={{
                fontFamily: "'Montserrat', sans-serif",
                backgroundImage: "url('https://img.freepik.com/free-photo/truck-inside-warehouse_23-2152009017.jpg?t=st=1763647165~exp=1763650765~hmac=ce82b10e5fddf6fec2876365f190d970cc4c6e971964b31e341f5a4dc1851e90&w=1480')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="flex flex-col gap-6 relative z-10 text-center px-4">
                <h1 className="text-white text-5xl font-bold">Bienvenue chez Costan</h1>
                <h2 className="text-white text-xl md:font-bold">
                    Les principaux fournisseurs de pièces détachées pour camions et remorques à Douala.
                </h2>
                <Link to="/products" className="self-center">
                    <button
                        className="
          relative inline-block px-4 py-3 text-[16px] font-bold text-white cursor-pointer
          border border-black overflow-hidden
          bg-transparent transition-all duration-300
          before:content-[''] before:absolute before:left-0 before:top-0
          before:w-full before:h-full before:bg-black
          before:-translate-x-full before:transition-transform before:duration-300
          hover:before:translate-x-0
        "
                    >
                        <span className="relative z-10">Voir les Produits</span>
                    </button>
                </Link>
            </div>
        </section>



    )
}

export default Banner