
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppointmentBookingForm from "@/components/booking/AppointmentBookingForm";
import { Phone, Clock, Calendar } from "lucide-react";

const BookAppointment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Dental Appointment</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Schedule your visit to Dr. John's Dental Clinic. Choose your preferred date, time, and service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AppointmentBookingForm />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl mb-4">Booking Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="text-clinic-blue flex-shrink-0 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Clinic Hours</h4>
                      <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-600 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="text-clinic-blue flex-shrink-0 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Appointment Policy</h4>
                      <p className="text-gray-600 text-sm">Please arrive 15 minutes before your scheduled appointment time.</p>
                      <p className="text-gray-600 text-sm">Cancellations must be made at least 24 hours in advance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-clinic-blue flex-shrink-0 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Need Help?</h4>
                      <p className="text-gray-600 text-sm">Call us at <a href="tel:+11234567890" className="text-clinic-blue hover:underline">+1 (123) 456-7890</a></p>
                      <p className="text-gray-600 text-sm">Email: <a href="mailto:appointments@drjohnsclinic.com" className="text-clinic-blue hover:underline">appointments@drjohnsclinic.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-lg mb-3">Emergency Dental Care</h3>
                <p className="text-gray-700 mb-3">
                  If you're experiencing a dental emergency, please call our emergency line for immediate assistance.
                </p>
                <a href="tel:+11234567999" className="inline-flex items-center text-clinic-blue font-medium hover:underline">
                  <Phone size={16} className="mr-2" />
                  +1 (123) 456-7999
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
