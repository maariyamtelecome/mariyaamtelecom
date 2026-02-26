import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [contacts, setContacts] = useState([]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      const newContact = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toLocaleString()
      };
      
      setContacts(prev => [...prev, newContact]);
      setSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300 border border-blue-200 hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">Phone</h3>
            <p className="text-gray-600 font-medium">+44 7449769921</p>
          </div>

          <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300 border border-purple-200 hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">Email</h3>
            <p className="text-gray-600 font-medium">sales@mariyaamtelecom.com</p>
          </div>

          <div className="group bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300 border border-pink-200 hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-lg">Location</h3>
            <p className="text-gray-600 font-medium">San Francisco, CA 94102</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-10 mb-10 border border-gray-200">
          <h2 className="text-3xl text-gray-800 mb-8">Send us a Message</h2>
          
          {submitted && (
            <div className="mb-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl flex items-center gap-4 shadow-md">
              <CheckCircle className="text-green-600" size={28} />
              <p className="text-green-700 font-semibold text-lg">Message sent successfully!</p>
            </div>
          )}

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition bg-white shadow-sm ${
                    errors.name ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition bg-white shadow-sm ${
                    errors.email ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition bg-white shadow-sm ${
                    errors.phone ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="1234567890"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition bg-white shadow-sm ${
                    errors.subject ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.subject}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition resize-none bg-white shadow-sm ${
                  errors.message ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-gray-200'
                }`}
                placeholder="Tell us more about your inquiry..."
              ></textarea>
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 font-medium">{errors.message}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
            >
              <Send size={22} />
              Send Message
            </button>
          </div>
        </div>

        {/* Submitted Contacts Display */}
        {contacts.length > 0 && (
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Submissions 
              <span className="ml-3 text-2xl text-purple-600">({contacts.length})</span>
            </h2>
            <div className="space-y-5">
              {contacts.map((contact) => (
                <div key={contact.id} className="border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white hover:border-purple-300">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">Name</p>
                      <p className="font-bold text-gray-800 text-lg">{contact.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">Email</p>
                      <p className="font-bold text-gray-800 text-lg">{contact.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">Phone</p>
                      <p className="font-bold text-gray-800 text-lg">{contact.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">Subject</p>
                      <p className="font-bold text-gray-800 text-lg">{contact.subject}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500 font-semibold mb-1">Message</p>
                      <p className="text-gray-700 leading-relaxed">{contact.message}</p>
                    </div>
                    <div className="md:col-span-2 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-400 font-medium">Submitted: {contact.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}