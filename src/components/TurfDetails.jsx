import React, { useState, useEffect } from 'react';

const TurfDetails = ({ turf, onBack, onSuccess }) => {
    const [bookingDate, setBookingDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    // Initialize minimum date for booking (today)
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Generate mock slots when date changes
    useEffect(() => {
        if (!bookingDate) {
            setAvailableSlots([]);
            setSelectedSlot(null);
            return;
        }

        const startHour = 7;
        const endHour = 23;
        const now = new Date();
        const selectedDate = new Date(bookingDate);

        const isToday = selectedDate.getDate() === now.getDate() &&
            selectedDate.getMonth() === now.getMonth() &&
            selectedDate.getFullYear() === now.getFullYear();
        const currentHour = now.getHours();

        const slots = [];
        for (let i = startHour; i < endHour; i++) {
            if (isToday && i <= currentHour) continue;

            const timeLabel = `${i > 12 ? i - 12 : i}:00 ${i >= 12 ? 'PM' : 'AM'}`;
            const isBooked = Math.random() < 0.4;

            slots.push({
                time: timeLabel,
                isBooked
            });
        }
        setAvailableSlots(slots);
        setSelectedSlot(null); // Reset selection on new date
    }, [bookingDate]);

    const handleBooking = (e) => {
        e.preventDefault();

        if (!selectedSlot) {
            alert('Please select a time slot');
            return;
        }

        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            const bookingId = Math.floor(1000 + Math.random() * 9000);
            onSuccess({
                turf,
                date: new Date(bookingDate).toDateString(),
                time: selectedSlot,
                id: bookingId,
                customerName,
                customerPhone
            });
        }, 1500);
    };

    if (!turf) return null;

    return (
        <div className="min-h-screen bg-black text-gray-100 pb-20">
            <div className="container mx-auto px-6 py-10">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                    <button onClick={onBack} className="cursor-pointer hover:text-orange-500 bg-transparent border-none p-0 flex items-center">
                        <i className="fas fa-home mr-1"></i> Home
                    </button>
                    <span className="mx-2">/</span>
                    <span className="text-gray-300">Details</span>
                    <span className="mx-2">/</span>
                    <span className="text-orange-500">{turf.name}</span>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">{turf.name}</h1>
                        <p className="text-xl text-gray-400"><i className="fas fa-map-marker-alt text-orange-500 mr-2"></i> {turf.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                        <div className="text-3xl font-bold text-orange-500">₹{turf.price}<span className="text-sm text-gray-500 font-normal">/hour</span></div>
                        <div className="text-yellow-400 mt-1"><i className="fas fa-star"></i> {turf.rating} (120+ Reviews)</div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                    {turf.images.map((img, index) => (
                        <div key={index} className={`h-64 ${index === 0 ? 'md:col-span-2 md:h-96' : ''} overflow-hidden rounded-xl border border-gray-800 relative`}>
                            <img src={img} alt={`${turf.name} - ${index}`} className="w-full h-full object-cover hover:scale-110 transition duration-700" />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Info Column */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">About the Turf</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Experience premium quality sports at {turf.name}. Located in the heart of {turf.location},
                                this turf offers state-of-the-art facilities for {turf.sport} enthusiasts.
                                Perfect for 5v5 or 7v7 matches, corporate events, and tournaments.
                                Maintained daily to ensure professional standards.
                            </p>
                            <h3 className="text-xl font-bold text-white mb-4">Amenities</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {turf.features.map((f, i) => (
                                    <li key={i} className="flex items-center text-gray-300 mb-2">
                                        <i className="fas fa-check-circle text-orange-500 mr-3"></i> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                            <h2 className="text-2xl font-bold text-white mb-6">Rules & Regulations</h2>
                            <ul className="space-y-3 text-gray-400">
                                <li><i className="fas fa-exclamation-circle text-gray-600 mr-2"></i> Studs are not allowed, only turf shoes or trainers.</li>
                                <li><i className="fas fa-exclamation-circle text-gray-600 mr-2"></i> Please arrive 15 minutes before your slot.</li>
                                <li><i className="fas fa-exclamation-circle text-gray-600 mr-2"></i> Smoking and drinking are strictly prohibited on premises.</li>
                                <li><i className="fas fa-exclamation-circle text-gray-600 mr-2"></i> Management is not responsible for lost valuables.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Booking Widget Column */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 rounded-xl p-6 border border-orange-900/30 shadow-2xl sticky top-24">
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Book Your Slot</h3>

                            <form onSubmit={handleBooking}>
                                <div className="mb-5">
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Select Date</label>
                                    <input
                                        type="date"
                                        required
                                        min={today}
                                        value={bookingDate}
                                        onChange={(e) => setBookingDate(e.target.value)}
                                        className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                        style={{ colorScheme: 'dark' }}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Available Slots</label>
                                    <div className="grid grid-cols-3 gap-2 h-64 overflow-y-auto slots-container p-2 border border-gray-700 rounded-lg bg-black">
                                        {!bookingDate ? (
                                            <p className="col-span-3 text-center text-gray-500 py-10 flex flex-col items-center justify-center h-full">
                                                <i className="far fa-calendar-alt text-3xl mb-3 text-gray-700"></i>
                                                Select a date first
                                            </p>
                                        ) : availableSlots.length === 0 ? (
                                            <p className="col-span-3 text-center text-red-400 py-4">No slots available for this date.</p>
                                        ) : (
                                            availableSlots.map((slot, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    disabled={slot.isBooked}
                                                    onClick={() => setSelectedSlot(slot.time)}
                                                    className={`p-2 rounded text-xs font-medium cursor-pointer transition ${slot.isBooked
                                                            ? 'border border-gray-800 bg-gray-900 text-gray-700 cursor-not-allowed'
                                                            : selectedSlot === slot.time
                                                                ? 'border border-orange-500 bg-orange-600 text-white font-bold shadow-lg shadow-orange-900/50'
                                                                : 'border border-gray-700 hover:border-orange-500 hover:bg-orange-900/20 text-gray-300 hover:text-orange-500 bg-black'
                                                        }`}
                                                >
                                                    {slot.time}
                                                </button>
                                            ))
                                        )}
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                        placeholder="e.g. Rahul Sharma"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-400 text-sm font-bold mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={customerPhone}
                                        onChange={(e) => setCustomerPhone(e.target.value)}
                                        className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                        placeholder="e.g. 9876543210"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className={`w-full text-white font-bold py-4 px-4 rounded-lg transition shadow-lg text-lg cursor-pointer ${isProcessing
                                            ? 'bg-orange-800 shadow-none cursor-wait'
                                            : 'bg-orange-600 hover:bg-orange-500 shadow-orange-900/40'
                                        }`}
                                >
                                    {isProcessing ? (
                                        <><i className="fas fa-spinner fa-spin mr-2"></i> Processing...</>
                                    ) : (
                                        'Confirm Booking'
                                    )}
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4"><i className="fas fa-lock flex items-center justify-center"></i> Secure booking. Pay at venue.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurfDetails;
