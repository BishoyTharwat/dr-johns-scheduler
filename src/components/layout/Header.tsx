
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-clinic-blue font-bold text-xl md:text-2xl">Dr. John's Clinic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-clinic-blue font-medium">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-clinic-blue font-medium">Services</Link>
          <Link to="/doctors" className="text-gray-700 hover:text-clinic-blue font-medium">Doctors</Link>
          <Link to="/blog" className="text-gray-700 hover:text-clinic-blue font-medium">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-clinic-blue font-medium">Contact</Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" className="border-clinic-blue text-clinic-blue hover:bg-clinic-light-blue hover:text-clinic-blue">
            <Link to="/login"><User size={18} className="mr-1" /> Login</Link>
          </Button>
          <Button asChild className="bg-clinic-blue text-white hover:bg-blue-500">
            <Link to="/book-appointment"><Calendar size={18} className="mr-1" /> Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-clinic-blue font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-clinic-blue font-medium py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-clinic-blue font-medium py-2" onClick={toggleMenu}>Doctors</Link>
            <Link to="/blog" className="text-gray-700 hover:text-clinic-blue font-medium py-2" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-clinic-blue font-medium py-2" onClick={toggleMenu}>Contact</Link>
            <div className="flex flex-col space-y-3 pt-2 border-t border-gray-100">
              <Button asChild variant="outline" className="w-full border-clinic-blue text-clinic-blue hover:bg-clinic-light-blue hover:text-clinic-blue">
                <Link to="/login" onClick={toggleMenu}><User size={18} className="mr-2" /> Login</Link>
              </Button>
              <Button asChild className="w-full bg-clinic-blue text-white hover:bg-blue-500">
                <Link to="/book-appointment" onClick={toggleMenu}><Calendar size={18} className="mr-2" /> Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
