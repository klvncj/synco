import { useState } from 'react'
import { X, Menu, } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = ({ page }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuItems = [
        { label: 'Accueil', path: '/' },
        { label: 'À propos', path: '/a-propos' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <div className='relative'>
            {/* Navbar */}
            <div
                className='flex justify-between items-center px-4 py-3 md:justify-around md:py-3'
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                {/* Logo (now on left in mobile) */}
                <div className='text-lg font-semibold cursor-pointer md:order-1'>COSTAN Sarl</div>

                {/* Burger menu (now on right in mobile) */}
                <div className='flex items-center md:hidden cursor-pointer md:order-2'>
                    <button onClick={() => setIsMenuOpen(true)} className='ml-3'>
                        <Menu />
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-4 cursor-pointer md:order-3'>
                    {menuItems.map((item) => (
                        <Link
                            to={item.path}
                            key={item.label}
                            className='relative text-black px-4 py-1 rounded-md group cursor-pointer'
                        >
                            {item.label}
                            <span
                                className={`absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out ${page === item.path.replace('/', '') || (page === 'Accueil' && item.label === 'Accueil')
                                    ? 'scale-x-100'
                                    : ''
                                    }`}
                            ></span>
                        </Link>
                    ))}
                </div>

            </div>

            {/* MOBILE DRAWERS */}
            <div
                className={`fixed left-0 top-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                {/* Header */}
                <div className='flex justify-between items-center p-4 border-b'>
                    <h2 className='text-lg font-semibold capitalize'>Menu</h2>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className='cursor-pointer hover:bg-slate-200 transition ease-in-out p-1 rounded'
                    >
                        <X />
                    </button>
                </div>


                <div className='flex flex-col p-4 space-y-3 overflow-y-auto'>
                    {menuItems.map((item) => (
                        <Link
                            to={item.path}
                            key={item.label}
                            className='text-left text-black uppercase border-b pb-1 hover:bg-gray-100 transition'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Navbar
