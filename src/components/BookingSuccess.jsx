import React, { useEffect } from 'react';

const BookingSuccess = ({ booking, onHome }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!booking) return null;

    const { turf, date, time, id, price } = booking;

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-orange-900/30 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 to-yellow-500"></div>
                <div className="w-24 h-24 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-4xl text-green-500"></i>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">Booking Confirmed!</h2>
                <p className="text-gray-400 mb-8">Your turf has been successfully booked.</p>

                <div className="bg-black/50 rounded-xl p-6 mb-8 text-left border border-gray-800">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Turf Name</p>
                            <p className="font-bold text-lg text-orange-500">{turf.name}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Booking ID</p>
                            <p className="font-bold text-lg text-white">#FS-<span>{id}</span></p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Date</p>
                            <p className="font-bold text-white">{date}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Time</p>
                            <p className="font-bold text-white">{time}</p>
                        </div>
                        <div className="col-span-2 pt-4 border-t border-gray-800">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Total Amount</p>
                            <p className="font-bold text-2xl text-white">₹<span>{turf.price}</span></p>
                            <p className="text-xs text-green-500 mt-1"><i className="fas fa-check-circle"></i> Payment to be made at venue</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={onHome}
                        className="cursor-pointer px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-bold transition"
                    >
                        Back to Home
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="cursor-pointer px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold transition shadow-lg shadow-orange-900/30"
                    >
                        Download Receipt
                    </button>
                </div>
            </div>

            {/* Success Toast Animation overlay */}
            <div className="fixed bottom-5 right-5 bg-orange-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50 border border-orange-400 animate-bounce">
                <i className="fas fa-check-circle text-2xl"></i>
                <div>
                    <h4 className="font-bold text-lg">Booking Confirmed!</h4>
                    <p className="text-sm text-orange-100">See you on the field.</p>
                </div>
            </div>
        </div>
    );
};

export default BookingSuccess;
