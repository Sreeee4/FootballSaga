import React from 'react';

const TurfCard = ({ turf, onBook }) => {
    const featuresHtml = turf.features.slice(0, 2).map((f, i) => (
        <span key={i} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full mr-1 border border-gray-700">
            {f}
        </span>
    ));

    return (
        <div className="turf-card bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-800 flex flex-col h-full hover:shadow-orange-900/20">
            <div className="h-48 overflow-hidden relative group">
                <img src={turf.image} alt={turf.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-orange-500 shadow-sm border border-orange-500/30">
                    ₹{turf.price}/hr
                </div>
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-1"></i> {turf.rating}
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-xl text-white mb-1">{turf.name}</h3>
                            <p className="text-gray-400 text-sm"><i className="fas fa-map-marker-alt mr-1 text-orange-500"></i> {turf.location}</p>
                        </div>
                        <span className="bg-gray-800 text-orange-400 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide border border-gray-700">
                            {turf.sport}
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4 truncate">{turf.address}</p>
                    <div className="mb-4">
                        {featuresHtml}
                        {turf.features.length > 2 && (
                            <span className="text-xs text-gray-600">+ {turf.features.length - 2} more</span>
                        )}
                    </div>
                </div>
                <button
                    onClick={() => onBook(turf)}
                    className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 mt-auto shadow-lg shadow-orange-900/20"
                >
                    View Details & Book <i className="fas fa-arrow-right text-sm"></i>
                </button>
            </div>
        </div>
    );
};

export default TurfCard;
