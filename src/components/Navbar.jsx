import React, { useState } from 'react';

const Navbar = ({ onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (view, anchorId = null) => {
        setIsMobileMenuOpen(false);
        onNavigate(view, anchorId);
    };

    return (
        <nav className="bg-black/90 backdrop-blur-md border-b border-orange-900/50 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => handleNavClick('home')}
                >
                    <img src="/LOGO.png" alt="Football Saga" className="h-[75px] w-auto" />
                </div>

                <div className="hidden md:flex space-x-8">
                    <button onClick={() => handleNavClick('home')} className="hover:text-orange-400 transition bg-transparent border-none cursor-pointer">Home</button>
                    <button onClick={() => handleNavClick('home', 'turfs')} className="hover:text-orange-400 transition bg-transparent border-none cursor-pointer">Find Turfs</button>
                    <button onClick={() => handleNavClick('home', 'about')} className="hover:text-orange-400 transition bg-transparent border-none cursor-pointer">About</button>
                    <button onClick={() => handleNavClick('home', 'contact')} className="hover:text-orange-400 transition bg-transparent border-none cursor-pointer">Contact</button>
                </div>

                <button
                    onClick={() => handleNavClick('home', 'turfs')}
                    className="bg-orange-600 text-white px-5 py-2 rounded-full font-bold hover:bg-orange-500 transition shadow-lg shadow-orange-900/20 cursor-pointer hidden md:block"
                >
                    Book Now
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none bg-transparent border-none cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4">
                    <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 hover:text-orange-400 bg-transparent border-none cursor-pointer">Home</button>
                    <button onClick={() => handleNavClick('home', 'turfs')} className="block w-full text-left py-2 hover:text-orange-400 bg-transparent border-none cursor-pointer">Find Turfs</button>
                    <button onClick={() => handleNavClick('home', 'about')} className="block w-full text-left py-2 hover:text-orange-400 bg-transparent border-none cursor-pointer">About</button>
                    <button onClick={() => handleNavClick('home', 'contact')} className="block w-full text-left py-2 hover:text-orange-400 bg-transparent border-none cursor-pointer">Contact</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
