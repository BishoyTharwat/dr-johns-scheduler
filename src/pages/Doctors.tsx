
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GraduationCap, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. John Smith",
      title: "Chief Dentist & Founder",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["General Dentistry", "Cosmetic Dentistry", "Oral Surgery"],
      education: "DDS - Harvard School of Dental Medicine",
      experience: "15+ years",
      about: "Dr. John Smith has been practicing dentistry for over 15 years, specializing in comprehensive dental care with a focus on patient comfort and advanced treatment techniques."
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Orthodontist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Orthodontics", "Invisalign", "Pediatric Dentistry"],
      education: "DDS, MS - University of California",
      experience: "10+ years",
      about: "Dr. Sarah Johnson specializes in orthodontics and has helped hundreds of patients achieve their perfect smile using both traditional braces and modern clear aligners."
    },
    {
      name: "Dr. Michael Brown",
      title: "Oral Surgeon",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specialties: ["Oral Surgery", "Dental Implants", "Wisdom Teeth Removal"],
      education: "DDS, MD - Johns Hopkins University",
      experience: "12+ years",
      about: "Dr. Michael Brown is a dual-degree oral and maxillofacial surgeon, providing advanced surgical treatments including dental implants and complex extractions."
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
              Meet Our <span className="text-clinic-blue">Expert Team</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced dental professionals are committed to providing you with the highest quality care.
            </p>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {doctors.map((doctor, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/3">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="lg:w-2/3">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
                    <p className="text-clinic-blue font-semibold text-lg mb-4">{doctor.title}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <GraduationCap className="text-clinic-blue mr-2" size={20} />
                        <span className="text-gray-700">{doctor.education}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="text-clinic-blue mr-2" size={20} />
                        <span className="text-gray-700">{doctor.experience}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Award className="text-clinic-blue mr-2" size={20} />
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-blue-50 text-clinic-blue px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{doctor.about}</p>

                    <Button asChild className="bg-clinic-blue hover:bg-blue-600">
                      <Link to="/book-appointment">Book with {doctor.name.split(' ')[1]}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Practice?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="text-clinic-blue mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600">Over 35 years of combined experience in dental care</p>
              </div>
              <div className="text-center">
                <MapPin className="text-clinic-blue mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Convenient Location</h3>
                <p className="text-gray-600">Easily accessible location with ample parking</p>
              </div>
              <div className="text-center">
                <Clock className="text-clinic-blue mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-600">Extended hours to accommodate your busy schedule</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
