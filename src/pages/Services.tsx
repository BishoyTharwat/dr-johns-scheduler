
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Clock, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Examinations", "Fluoride Treatments"],
      price: "Starting at $150",
      icon: CheckCircle
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our advanced cosmetic dental procedures.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
      price: "Starting at $300",
      icon: Heart
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern aligners.",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
      price: "Starting at $2,500",
      icon: Shield
    },
    {
      title: "Dental Implants",
      description: "Replace missing teeth with permanent, natural-looking implants.",
      features: ["Single Implants", "Multiple Implants", "All-on-4", "Bone Grafting"],
      price: "Starting at $1,200",
      icon: Clock
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Dental <span className="text-clinic-blue">Services</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive dental care services to keep your smile healthy and beautiful.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-clinic-blue mr-3" size={24} />
                      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="text-green-500 mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-clinic-blue font-semibold">{service.price}</span>
                      <Button asChild className="bg-clinic-blue hover:bg-blue-600">
                        <Link to="/book-appointment">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Treatment?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. John to discuss your dental needs and create a personalized treatment plan.
            </p>
            <Button asChild size="lg" className="bg-clinic-blue hover:bg-blue-600">
              <Link to="/book-appointment">Schedule Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
