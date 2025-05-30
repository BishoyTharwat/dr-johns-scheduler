
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Heart, Smile, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PediatricDentistry = () => {
  const services = [
    "Pediatric Dental Exams",
    "Children's Teeth Cleaning",
    "Fluoride Treatments",
    "Dental Sealants",
    "Cavity Treatment for Kids",
    "Space Maintainers",
    "Early Orthodontic Assessment",
    "Dental Emergencies for Children"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Pediatric <span className="text-clinic-blue">Dentistry</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Gentle, specialized dental care for children of all ages. We make dental visits fun and comfortable for your little ones.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Kid-Friendly Dental Care</h2>
                <p className="text-gray-600 mb-6">
                  Pediatric dentistry focuses on the oral health of children from infancy through the teen years. Our specialized approach ensures that children receive age-appropriate care in a comfortable, friendly environment.
                </p>
                <p className="text-gray-600 mb-8">
                  We believe that early dental experiences shape a child's attitude toward oral health for life. That's why we work hard to make every visit positive and educational.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Heart className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Gentle Approach</span>
                  </div>
                  <div className="flex items-center">
                    <Smile className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Fun Environment</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Family-Centered</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Preventive Focus</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Services for Children:</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-clinic-blue/10 rounded-lg">
                  <p className="text-clinic-blue font-semibold">Starting at $120</p>
                  <p className="text-gray-600 text-sm">Children's dental exam and cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Age Guidelines */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Age-Specific Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Ages 0-3</h3>
                <p className="text-gray-600">First dental visit by age 1, basic oral hygiene education</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Ages 4-8</h3>
                <p className="text-gray-600">Regular cleanings, sealants, and cavity prevention</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-clinic-blue">Ages 9-18</h3>
                <p className="text-gray-600">Advanced care, orthodontic evaluation, wisdom teeth monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Give Your Child a Healthy Smile</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your child's appointment today and help them develop healthy dental habits for life.
            </p>
            <Button asChild size="lg" className="bg-clinic-blue hover:bg-blue-600">
              <Link to="/book-appointment">Book Child's Appointment</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PediatricDentistry;
