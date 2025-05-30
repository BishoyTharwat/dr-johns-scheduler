
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact <span className="text-clinic-blue">Us</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with Dr. John's Clinic. We're here to answer your questions and schedule your appointment.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-clinic-blue flex-shrink-0 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">123 Main Street<br />City, State 12345<br />United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-clinic-blue flex-shrink-0 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        Main: <a href="tel:+11234567890" className="text-clinic-blue hover:underline">+1 (123) 456-7890</a><br />
                        Emergency: <a href="tel:+11234567999" className="text-clinic-blue hover:underline">+1 (123) 456-7999</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-clinic-blue flex-shrink-0 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        General: <a href="mailto:info@drjohnsclinic.com" className="text-clinic-blue hover:underline">info@drjohnsclinic.com</a><br />
                        Appointments: <a href="mailto:appointments@drjohnsclinic.com" className="text-clinic-blue hover:underline">appointments@drjohnsclinic.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-clinic-blue flex-shrink-0 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-800 mb-4">Find Us</h3>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" type="text" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" type="text" required className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      required 
                      className="mt-1"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-clinic-blue hover:bg-blue-600">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Dental Emergency?</h2>
              <p className="text-lg text-gray-600 mb-6">
                If you're experiencing a dental emergency outside of our regular hours, please call our emergency line immediately.
              </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <a href="tel:+11234567999">
                  <Phone size={18} className="mr-2" />
                  Emergency Line: +1 (123) 456-7999
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
