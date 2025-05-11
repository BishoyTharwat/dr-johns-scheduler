
import { Link } from "react-router-dom";
import { Smile, Shield, Star, Users, Clock } from "lucide-react";

const ServiceCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-clinic-blue group-hover:scale-110 transform transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-clinic-blue font-medium hover:underline inline-flex items-center">
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Dental Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive dental services to meet all your family's oral health needs, from routine cleanings to advanced treatments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Smile size={40} />}
            title="General Dentistry"
            description="Regular check-ups, cleanings, fillings, and preventive care to maintain your oral health."
            link="/services/general-dentistry"
          />
          <ServiceCard 
            icon={<Star size={40} />}
            title="Cosmetic Dentistry"
            description="Enhance your smile with teeth whitening, veneers, bonding, and other aesthetic treatments."
            link="/services/cosmetic-dentistry"
          />
          <ServiceCard 
            icon={<Shield size={40} />}
            title="Orthodontics"
            description="Straighten your teeth and correct bite issues with braces, aligners, and other orthodontic solutions."
            link="/services/orthodontics"
          />
          <ServiceCard 
            icon={<Users size={40} />}
            title="Pediatric Dentistry"
            description="Specialized dental care for children in a friendly, gentle environment."
            link="/services/pediatric-dentistry"
          />
          <ServiceCard 
            icon={<Clock size={40} />}
            title="Emergency Dental Care"
            description="Prompt treatment for dental emergencies to relieve pain and prevent further complications."
            link="/services/emergency-care"
          />
          <ServiceCard 
            icon={<Star size={40} />}
            title="Dental Implants"
            description="Restore missing teeth with permanent, natural-looking dental implants."
            link="/services/dental-implants"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
