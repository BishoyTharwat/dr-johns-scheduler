
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import image from "../../../assets/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign.jpg";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Your Smile Deserves <span className="text-clinic-blue">The Best Care</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Welcome to Dr. John's Dental Clinic. We provide exceptional dental care for your entire family in a comfortable and friendly environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-clinic-blue hover:bg-blue-600 text-white font-medium">
                <Link to="/book-appointment">
                  <Calendar size={18} className="mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-clinic-blue text-clinic-blue hover:bg-clinic-light-blue">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src= {image}
              alt="Dental clinic"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
