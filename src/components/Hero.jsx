import React from 'react';

const Hero = ({ onNavigate }) => {
    return (
        <section id="home" className="relative bg-gray-900 text-white h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Overlay Image */}
            <div className="absolute inset-0 opacity-100 bg-[url('/Bg.jpg')] bg-cover bg-center"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Welcome to <br /> <span className="text-orange-500">Football Saga</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                    Your ultimate destination for premium turf booking in Mumbai. Experience the game like never before.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button
                        onClick={() => onNavigate('home', 'turfs')}
                        className="cursor-pointer bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg shadow-orange-900/50 flex items-center justify-center gap-2"
                    >
                        <i className="fas fa-search-location"></i> Find Turfs Nearby
                    </button>
                    <button
                        onClick={() => onNavigate('home', 'about')}
                        className="cursor-pointer bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg flex items-center justify-center"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
