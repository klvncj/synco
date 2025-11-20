import React, { useEffect, useRef } from "react";

const Partners = () => {
    const scrollRef = useRef(null);

    const logos = [
        { src: "https://images.seeklogo.com/logo-png/9/2/mercedes-benz-logo-png_seeklogo-91082.png", alt: "Mercedes-Benz" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrWR_208fOakkYaEJocw5U3tMZhgmRRnIAg&s", alt: "JAC Motors" },
        { src: "https://images.seeklogo.com/logo-png/53/1/howo-logo-png_seeklogo-531865.png", alt: "Howo" },
        // { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoZCdmcpRbBshv768UoNEgEQBWLGMXrD1Eg&s", alt: "BPW" },
        { src: "https://iconape.com/wp-content/png_logo_vector/saf-logo.png", alt: "SAF" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbFGPPtx5ZX3XbKLAll5MD6mLtNdPa_S_qw&s", alt: "SHACMAN" },
    ];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return; // IMPORTANT: Ensures the ref is available

        let requestId;

        const step = () => {
            // SCROLL SPEED: 1.0
            container.scrollLeft += 1.0; 
            
            // Logic to reset the scroll position for a seamless loop
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0; 
            }
            requestId = requestAnimationFrame(step);
        };

        requestId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(requestId);
    }, []);

    return (
        <section className="flex flex-col items-center w-full my-12 px-2 relative">
            <h1
                className="font-bold text-2xl"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                - NOS PARTENAIRES -
            </h1>
            <h3
                className="text-center mt-2 px-4 md:px-0"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                Nous collaborons avec les meilleurs pour vous offrir l'excellence.
            </h3>

            {/* Desktop view */}
            <div className="hidden md:flex flex-wrap justify-center items-center mt-6 mb-10 gap-4 lg:gap-6">
                {logos.map((logo) => (
                    <div
                        key={logo.alt}
                        className="flex-1 min-w-[150px] max-w-[150px] flex justify-center"
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* Mobile view (Infinite Auto-Scrolling) */}
            <div className="md:hidden relative mt-6 mb-10 w-full overflow-hidden">
                {/* left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-r from-white"></div>
                {/* right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-l from-white"></div>

                <div
                    ref={scrollRef}
                    // IMPORTANT CLASSES: `flex` (to line up items), `whitespace-nowrap` (to force overflow), `overflow-x-scroll` (to enable scrolling)
                    className="flex whitespace-nowrap gap-6 overflow-x-scroll scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {/* Logos are duplicated for the infinite loop effect */}
                    {logos.concat(logos).map((logo, index) => (
                        <div key={index} className="min-w-[150px] max-w-[150px] flex justify-center shrink-0 border p-2">
                            <img src={logo.src} alt={logo.alt} className="w-full h-auto object-contain grayscale" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Partners;