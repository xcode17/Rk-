import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form handling logic here
        alert("Message sent! (Demo)");
    };

    return (
        <section id="contact" className="py-20 px-6 relative z-10 bg-violet-dark/30">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-200">
                            <div className="p-3 bg-violet-neon/20 rounded-full text-violet-neon">
                                <Mail size={24} />
                            </div>
                            <span>RajaKuberan.p@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-200">
                            <div className="p-3 bg-violet-neon/20 rounded-full text-violet-neon">
                                <Phone size={24} />
                            </div>
                            <span>+91 9487343696</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-200">
                            <div className="p-3 bg-violet-neon/20 rounded-full text-violet-neon">
                                <MapPin size={24} />
                            </div>
                            <span>India</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-neon transition-colors"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-neon transition-colors"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea
                            rows="4"
                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-neon transition-colors"
                            placeholder="Your message..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-violet-neon hover:bg-violet-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                        Send Message <Send size={18} />
                    </button>
                </motion.form>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919487343696"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
            >
                <MessageCircle size={32} />
            </a>
        </section>
    );
};
