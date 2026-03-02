import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto rounded"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-orange-500">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-gray-900 p-4 rounded-lg text-orange-500 mr-5 border border-gray-800">
                                    <i className="fas fa-map-marker-alt text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                                    <p className="text-gray-400">Near 247 Embassy, LBS Marg, Vikhroli(w),<br />Mumbai, Maharashtra 400083</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gray-900 p-4 rounded-lg text-orange-500 mr-5 border border-gray-800">
                                    <i className="fas fa-phone text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                                    <p className="text-gray-400">+91 95946 77284</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gray-900 p-4 rounded-lg text-orange-500 mr-5 border border-gray-800">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email</h4>
                                    <p className="text-gray-400">support@footballsaga.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
                        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will contact you shortly.'); }}>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2 text-gray-300">Name</label>
                                <input type="text" className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2 text-gray-300">Email</label>
                                <input type="email" className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="your@email.com" />
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-bold mb-2 text-gray-300">Message</label>
                                <textarea className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-orange-500 h-32 transition-colors" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="cursor-pointer w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-lg transition shadow-lg shadow-orange-900/40">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
