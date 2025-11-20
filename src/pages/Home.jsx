import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import Info from '../components/Info'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Badge from '../assets/badge.svg'
import Support from '../assets/support.svg'
import Delivery from '../assets/delivery.svg'
import Shield from '../assets/shield.svg'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Stats from '../components/Stats'

const Home = () => {

    const cards = [
        {
            image: "https://www.pasou-parts.com/wp-content/uploads/2023/05/Sinotruck_Truck_Auto_Body_Parts_1.webp",
            detail: "Pièces Détachées camions"
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2024/2/386940167/DS/YC/TQ/8330203/fork-lift-parts-and-accessories-1000x1000.jpg",
            detail: "Pièces détachées pour chariots élévateurs",
        },
        {
            image: "https://www.hyunkookparts.com/wp-content/uploads/2022/04/Spare-parts-1.jpg",
            detail: "Pièces Détachées Engins Lourds",
        },
        {
            image: "https://my.fhtrailer.com/upload/7149/trailer-parts-axles-spare-parts-accessories--1--1843276.jpg",
            detail: "Pièces Détachées Remorques",
        },
    ]

    return (
        <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
            <Info />
            <Navbar page={'Accueil'} />
            <Banner />

            <section className="flex flex-col justify-center items-center w-full my-4">
                <div className="flex flex-col items-center justify-center mt-8 px-2 md:px-0 text-center gap-2">
                    <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-2xl">- NOS PRODUITS -</h1>
                    <h3 style={{ fontFamily: "'Montserrat', sans-serif" }}>Une sélection rigoureuse des meilleures pièces pour camions et remorques, conçues pour la fiabilité et la performance.</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4 sm:px-8 py-10 w-full max-w-7xl gap-y-16 justify-center">
                    {/* Product Cards */}
                    {/* <Card />
                    <Card />
                    <Card />
                    <Card /> */}

                    {cards.map((card, index) => (
                        <Card image={card.image} detail={card.detail} key={index} />
                    ))
                    }
                </div>

            </section>
            <section className="w-full bg-gray-200 flex justify-center items-center my-6 py-6">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-0 w-full max-w-6xl"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    {/* Text Section */}
                    <div className="p-4 flex flex-col justify-center items-start gap-4">
                        <h2 className="font-bold uppercase text-lg sm:text-xl">Costan Sarl</h2>
                        <h3 className="text-2xl sm:text-3xl font-semibold">La qualité rencontre la fiabilité</h3>
                        <p className="text-sm sm:text-base">
                            Forte de plus de 10 ans d'expérience dans le secteur, Costan SARL s'engage à fournir des pièces détachées de haute qualité pour camions et remorques. Nous simplifions votre approvisionnement en vous proposant des solutions durables, issues de marques reconnues et de notre propre gamme de produits.
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                        <Cta svg={Badge} quote={"Pièces 100% d'origine"} />
                        <Cta svg={Shield} quote={"Garantie sur tous les produits"} />
                        <Cta svg={Delivery} quote={"Livraison rapide et fiable"} />
                        <Cta svg={Support} quote={"Support client dédié"} />
                    </div>
                </div>
            </section>

            <Partners />

            <hr/>

           <div className='flex flex-col justify-center items-center my-8'>
            <h3  style={{ fontFamily: "'Montserrat', sans-serif" }} className='text-3xl uppercase font-bold'>- En Chiffres -</h3>
            <p className='text-center'>Découvrez nos performances et l’impact de notre engagement à travers nos chiffres clés.</p>
             <Stats/>
           </div>

          <Footer />


        </main>
    )
}

export default Home


const Cta = ({ svg, quote }) => {
    return (
        <div className=' flex flex-col justify-center items-center gap-2 py-4 bg-[#fafafa] rounded shadow-md px-1' style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <div> <img src={svg} alt={quote} className='w-16 h-16' /></div>
            <h3 className='font-bold'> {quote} </h3>
        </div>
    )
}