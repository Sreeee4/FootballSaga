import React, { useState } from 'react';

const SearchFilter = ({ onFilter }) => {
    const [location, setLocation] = useState('all');
    const [sport, setSport] = useState('all');

    const handleSearch = () => {
        onFilter(location, sport);
    };

    return (
        <section className="py-10 bg-gray-900 shadow-xl border border-gray-800 relative -mt-10 mx-4 md:mx-20 rounded-xl z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="w-full md:w-1/3">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="locationFilter">Location</label>
                        <div className="relative">
                            <select
                                id="locationFilter"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="block w-full bg-gray-800 border border-gray-700 text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-orange-500 transition-colors"
                            >
                                <option value="all">All Mumbai</option>
                                <option value="Bandra">Bandra</option>
                                <option value="Andheri">Andheri</option>
                                <option value="Dadar">Dadar</option>
                                <option value="Powai">Powai</option>
                                <option value="Juhu">Juhu</option>
                                <option value="Colaba">Colaba</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="sportFilter">Sport</label>
                        <div className="relative">
                            <select
                                id="sportFilter"
                                value={sport}
                                onChange={(e) => setSport(e.target.value)}
                                className="block w-full bg-gray-800 border border-gray-700 text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-orange-500 transition-colors"
                            >
                                <option value="all">All Sports</option>
                                <option value="Football">Football</option>
                                <option value="Cricket">Cricket</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 pt-6">
                        <button
                            onClick={handleSearch}
                            className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition shadow-lg shadow-orange-900/30"
                        >
                            Search Turfs
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchFilter;
