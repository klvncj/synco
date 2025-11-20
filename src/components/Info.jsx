import { Mail, MapPin, Phone } from 'lucide-react'

const Info = () => {
    return (
        <div
            className="bg-black text-white py-2 px-5 flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
            {/* Left text */}
            <div className="text-center md:text-left">
                Tous les produits pour votre voiture en un seul endroit.
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 text-center md:text-right">
                <span className="hidden md:flex items-center justify-center gap-2 cursor-pointer">
                    <MapPin className="w-4 h-4" /> Douala, Cameroun
                </span>
                <span className="hidden sm:block">|</span>
                <span className="flex items-center justify-center gap-2 cursor-pointer">
                    <Phone className="w-4 h-4" /> +237 233 42 43 38
                </span>
                <span className="hidden sm:block">|</span>
                <a
                    className="flex items-center justify-center gap-2 cursor-pointer"
                    href="mailto:costan.sarl@gmail.com"
                >
                    <Mail className="w-4 h-4" /> costan.sarl@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Info
