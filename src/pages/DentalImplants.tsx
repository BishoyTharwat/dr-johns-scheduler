
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Award, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DentalImplants = () => {
  const services = [
    "Single Tooth Implants",
    "Multiple Tooth Implants",
    "All-on-4 Implants",
    "All-on-6 Implants",
    "Implant-Supported Dentures",
    "Bone Grafting",
    "Sinus Lift Procedures",
    "Immediate Load Implants"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Dental <span className="text-clinic-blue">Implants</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Replace missing teeth with permanent, natural-looking dental implants. Restore your smile, confidence, and ability to eat comfortably.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Permanent Tooth Replacement</h2>
                <p className="text-gray-600 mb-6">
                  Dental implants are titanium posts that are surgically placed into the jawbone to replace missing tooth roots. They provide a strong foundation for permanent or removable replacement teeth that are made to match your natural teeth.
                </p>
                <p className="text-gray-600 mb-8">
                  Unlike dentures or bridges, dental implants don't slip or move, allowing you to eat, speak, and smile with confidence. They also help preserve facial structure and prevent bone deterioration.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Award className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Premium Quality</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Long-Lasting</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Quick Recovery</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Natural Look</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Implant Solutions:</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-clinic-blue/10 rounded-lg">
                  <p className="text-clinic-blue font-semibold">Starting at $1,200</p>
                  <p className="text-gray-600 text-sm">Single tooth implant with crown</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Dental Implants?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="text-clinic-blue mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Durability</h3>
                <p className="text-gray-600">Can last a lifetime with proper care</p>
              </div>
              <div className="text-center">
                <Shield className="text-clinic-blue mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Bone Health</h3>
                <p className="text-gray-600">Prevents bone loss in the jaw</p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-clinic-blue mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Natural Feel</h3>
                <p className="text-gray-600">Function just like natural teeth</p>
              </div>
              <div className="text-center">
                <Clock className="text-clinic-blue mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Convenience</h3>
                <p className="text-gray-600">No special maintenance required</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Restore Your Complete Smile</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to learn if dental implants are right for you and discover how they can transform your life.
            </p>
            <Button asChild size="lg" className="bg-clinic-blue hover:bg-blue-600">
              <Link to="/book-appointment">Schedule Implant Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DentalImplants;
