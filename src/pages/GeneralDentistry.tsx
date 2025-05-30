
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GeneralDentistry = () => {
  const services = [
    "Regular Dental Cleanings",
    "Comprehensive Oral Examinations",
    "Cavity Fillings (Composite & Amalgam)",
    "Fluoride Treatments",
    "Dental X-rays",
    "Root Canal Therapy",
    "Tooth Extractions",
    "Periodontal (Gum) Treatment"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                General <span className="text-clinic-blue">Dentistry</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive dental care for the whole family. Our general dentistry services focus on preventive care and maintaining optimal oral health.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is General Dentistry?</h2>
                <p className="text-gray-600 mb-6">
                  General dentistry encompasses the prevention, diagnosis, and treatment of a wide variety of conditions, disorders, and diseases affecting the teeth, gums, and maxillofacial region of the body.
                </p>
                <p className="text-gray-600 mb-8">
                  Our general dentistry services are designed to maintain your oral health through regular check-ups, cleanings, and preventive treatments. We believe that prevention is always better than cure.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Clock className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Quick Appointments</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Safe Procedures</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Family-Friendly</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Proven Results</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services Include:</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-clinic-blue/10 rounded-lg">
                  <p className="text-clinic-blue font-semibold">Starting at $150</p>
                  <p className="text-gray-600 text-sm">Comprehensive examination and cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready for Your Next Check-up?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your general dentistry appointment today and take the first step towards optimal oral health.
            </p>
            <Button asChild size="lg" className="bg-clinic-blue hover:bg-blue-600">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GeneralDentistry;
