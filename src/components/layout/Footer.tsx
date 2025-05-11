
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="font-bold text-lg text-clinic-dark-gray mb-4">Dr. John's Clinic</h3>
            <p className="text-gray-600 mb-6">Providing quality dental care with a gentle touch since 2010.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-clinic-blue hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-clinic-blue hover:text-blue-600">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-clinic-blue hover:text-blue-600">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-clinic-dark-gray mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-clinic-blue">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-clinic-blue">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-600 hover:text-clinic-blue">Doctors</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-clinic-blue">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-clinic-blue">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg text-clinic-dark-gray mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/general-dentistry" className="text-gray-600 hover:text-clinic-blue">General Dentistry</Link></li>
              <li><Link to="/services/cosmetic-dentistry" className="text-gray-600 hover:text-clinic-blue">Cosmetic Dentistry</Link></li>
              <li><Link to="/services/orthodontics" className="text-gray-600 hover:text-clinic-blue">Orthodontics</Link></li>
              <li><Link to="/services/pediatric-dentistry" className="text-gray-600 hover:text-clinic-blue">Pediatric Dentistry</Link></li>
              <li><Link to="/services/dental-implants" className="text-gray-600 hover:text-clinic-blue">Dental Implants</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-clinic-dark-gray mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-clinic-blue flex-shrink-0 mr-2 mt-1" />
                <span className="text-gray-600">123 Main Street, City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-clinic-blue flex-shrink-0 mr-2" />
                <a href="tel:+11234567890" className="text-gray-600 hover:text-clinic-blue">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-clinic-blue flex-shrink-0 mr-2" />
                <a href="mailto:info@drjohnsclinic.com" className="text-gray-600 hover:text-clinic-blue">info@drjohnsclinic.com</a>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="text-clinic-blue flex-shrink-0 mr-2 mt-1" />
                <div>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">© {currentYear} Dr. John's Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
