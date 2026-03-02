import React from 'react';
import TurfCard from './TurfCard';

const TurfList = ({ turfs, onBook }) => {
    return (
        <section id="turfs" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Top Rated Turfs</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-400">Find the perfect ground for your next match.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {turfs.length === 0 ? (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                            <p className="text-xl text-gray-500">No turfs found matching your criteria.</p>
                        </div>
                    ) : (
                        turfs.map(turf => (
                            <TurfCard key={turf.id} turf={turf} onBook={onBook} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default TurfList;
