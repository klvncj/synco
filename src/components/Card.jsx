import React from 'react'

const Card = ({ image, detail }) => {
    return (
        <div className="border border-black flex flex-col justify-center items-center pt-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className='px-4'>
                <img
                    src={image || "https://www.pasou-parts.com/wp-content/uploads/2023/05/Sinotruck_Truck_Auto_Body_Parts_1.webp"}
                    alt="Product"
                    className="w-full h-auto mb-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
            </div>
            <div className="text-center bg-[#f7f7f7] font-bold border-t border-black w-full h-20 flex justify-center items-center px-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {detail || "Pièces Détachées camions"}
            </div>
        </div>
    )
}

export default Card
