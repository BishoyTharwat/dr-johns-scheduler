
import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-clinic-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Book your appointment today and take the first step towards a healthier, brighter smile. Our friendly staff is ready to assist you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-clinic-blue hover:bg-blue-50 font-medium">
              <Link to="/book-appointment">
                <Calendar size={18} className="mr-2" />
                Book Online
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-clinic-blue hover:bg-blue-600">
              <a href="tel:+11234567890">
                <Phone size={18} className="mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
