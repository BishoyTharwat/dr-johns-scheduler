
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Star, Smile, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CosmeticDentistry = () => {
  const services = [
    "Professional Teeth Whitening",
    "Porcelain Veneers",
    "Dental Bonding",
    "Smile Makeovers",
    "Gum Contouring",
    "Tooth-Colored Fillings",
    "Crown Lengthening",
    "Aesthetic Crowns"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Cosmetic <span className="text-clinic-blue">Dentistry</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your smile with our advanced cosmetic dental procedures. Achieve the beautiful, confident smile you've always wanted.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Enhance Your Natural Beauty</h2>
                <p className="text-gray-600 mb-6">
                  Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. Our aesthetic treatments combine artistry with advanced dental techniques to create stunning results.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you're looking to brighten your smile, fix imperfections, or completely transform your appearance, our cosmetic dental services can help you achieve your goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Star className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Premium Materials</span>
                  </div>
                  <div className="flex items-center">
                    <Smile className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Natural Results</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Boost Confidence</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-clinic-blue mr-3" size={24} />
                    <span className="text-gray-700">Long-Lasting</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Treatments:</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-clinic-blue/10 rounded-lg">
                  <p className="text-clinic-blue font-semibold">Starting at $300</p>
                  <p className="text-gray-600 text-sm">Professional teeth whitening treatment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Transform Your Smile</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              See the amazing transformations we've achieved for our patients through cosmetic dentistry.
            </p>
            <Button asChild size="lg" className="bg-clinic-blue hover:bg-blue-600">
              <Link to="/book-appointment">Start Your Transformation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
