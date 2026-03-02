import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-orange-500 rounded-lg opacity-20 blur-lg"></div>
                            <img src="/IMG_9315.JPG" alt="About Football Saga" className="relative rounded-lg shadow-2xl w-full border border-gray-700" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose <span className="text-orange-500">Football Saga</span>?</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                            At Football Saga, we believe that every player deserves a professional playing experience. Whether you're a weekend warrior or an aspiring pro, finding the right turf shouldn't be a hassle.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="bg-gray-800 text-orange-500 p-3 rounded-full mr-4 border border-gray-700"><i className="fas fa-bolt"></i></span>
                                <span className="text-gray-300">Real-time availability updates</span>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-gray-800 text-orange-500 p-3 rounded-full mr-4 border border-gray-700"><i className="fas fa-star"></i></span>
                                <span className="text-gray-300">Premium quality FIFA-standard turfs</span>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-gray-800 text-orange-500 p-3 rounded-full mr-4 border border-gray-700"><i className="fas fa-mobile-alt"></i></span>
                                <span className="text-gray-300">Seamless booking process with instant confirmation</span>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-gray-800 text-orange-500 p-3 rounded-full mr-4 border border-gray-700"><i className="fas fa-map-marked-alt"></i></span>
                                <span className="text-gray-300">Located in prime areas across Mumbai</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
