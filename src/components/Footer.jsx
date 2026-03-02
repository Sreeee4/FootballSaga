import React from 'react';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><i className="fas fa-futbol text-orange-500"></i> Football Saga</h3>
                        <p className="text-gray-500">Connecting players with the best grounds in Mumbai. Play anytime, anywhere.</p>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-800 transition"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-800 transition"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-800 transition"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Quick Links</h4>
                        <ul className="text-gray-500 space-y-3">
                            <li><button onClick={() => onNavigate('home')} className="hover:text-orange-500 transition flex items-center bg-transparent border-none cursor-pointer text-gray-500 p-0"><i className="fas fa-chevron-right text-xs mr-2 text-orange-900"></i> Home</button></li>
                            <li><button onClick={() => onNavigate('home', 'turfs')} className="hover:text-orange-500 transition flex items-center bg-transparent border-none cursor-pointer text-gray-500 p-0"><i className="fas fa-chevron-right text-xs mr-2 text-orange-900"></i> Find Turfs</button></li>
                            <li><button onClick={() => onNavigate('home', 'about')} className="hover:text-orange-500 transition flex items-center bg-transparent border-none cursor-pointer text-gray-500 p-0"><i className="fas fa-chevron-right text-xs mr-2 text-orange-900"></i> About Us</button></li>
                            <li><button onClick={() => onNavigate('home', 'contact')} className="hover:text-orange-500 transition flex items-center bg-transparent border-none cursor-pointer text-gray-500 p-0"><i className="fas fa-chevron-right text-xs mr-2 text-orange-900"></i> Contact</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Newsletter</h4>
                        <p className="text-gray-500 mb-4">Subscribe for updates and offers.</p>
                        <div className="flex">
                            <input type="email" placeholder="Email Address" className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:border-orange-500 w-full transition-colors" />
                            <button className="bg-orange-600 hover:bg-orange-500 px-4 py-3 rounded-r-lg text-white font-bold transition cursor-pointer">Join</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-900 pt-8 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2023 Football Saga Mumbai. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Made with <i className="fas fa-heart text-orange-500 mx-1"></i> for Sports</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
