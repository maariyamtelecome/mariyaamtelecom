  
const ContactSection = () => {  
  return (  
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="text-center mb-16">  
          <h2 className="text-4xl md:text-5xl mb-4">  
            Get In Touch  
          </h2>  
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">  
            Ready to enhance your telecommunications infrastructure?   
            Contact our experts today for a personalized consultation.  
          </p>  
        </div>  
  
        <div className="grid md:grid-cols-2 gap-12 items-center">  
          {/* Contact Info */}  
          <div className="space-y-6">  
            <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">  
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />  
                </svg>  
              </div>  
              <div>  
                <h4 className="font-semibold text-lg mb-1">Email Us</h4>  
                <p className="text-blue-100">sales@mariyaamtelecom.com</p>  
                <p className="text-blue-100">support@mariyaamtelecom</p>  
              </div>  
            </div>  
  
            <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">  
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />  
                </svg>  
              </div>  
              <div>  
                <h4 className="font-semibold text-lg mb-1">Call Us</h4>  
                <p>+44 7476680398</p>  
                <p>+44 7449769921</p>  
              </div>  
            </div>  
  
            <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">  
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />  
                </svg>  
              </div>  
              <div>  
                <h4 className="font-semibold text-lg mb-1">Visit Us</h4>  
                <p className="text-blue-100">123 Telecom Tower</p>  
                <p className="text-blue-100">New York, NY 10001</p>  
              </div>  
            </div>  
          </div>  
  
          {/* Contact Form */}  
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">  
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>  
            <form className="space-y-4">  
              <div>  
                <input  
                  type="text"  
                  placeholder="Your Name"  
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition-all"  
                />  
              </div>  
              <div>  
                <input  
                  type="email"  
                  placeholder="Your Email"  
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition-all"  
                />  
              </div>  
              <div>  
                <input  
                  type="tel"  
                  placeholder="Your Phone"  
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition-all"  
                />  
              </div>  
              <div>  
                <textarea  
                  rows="4"  
                  placeholder="Your Message"  
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition-all resize-none"  
                ></textarea>  
              </div>  
              <button  
                type="submit"  
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"  
              >  
                Send Message  
              </button>  
            </form>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  
  
export default ContactSection;  
