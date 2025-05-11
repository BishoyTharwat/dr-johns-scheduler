
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    content: "Dr. John's team provided exceptional care during my dental procedure. The staff was friendly, and the clinic was immaculate. I highly recommend their services to anyone looking for top-notch dental care.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "After years of dental anxiety, I finally found a clinic where I feel comfortable. Dr. John was patient, gentle, and thoroughly explained my treatment options. My smile has never looked better!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    content: "The pediatric dentist was amazing with my son who has special needs. They took their time, showed patience, and made what is usually a stressful experience into a positive one. We're grateful for their care.",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    content: "The cosmetic dental work I received has transformed my confidence. The results exceeded my expectations, and the attention to detail was impressive. Worth every penny!",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 italic">{testimonial.content}</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const paginatedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied patients about their experiences at Dr. John's Dental Clinic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {paginatedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={prevPage}
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-clinic-light-blue focus:outline-none"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} className="text-clinic-blue" />
          </button>
          <div className="flex space-x-2">
            {[...Array(pageCount)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full ${
                  i === currentPage ? "bg-clinic-blue" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextPage}
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-clinic-light-blue focus:outline-none"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} className="text-clinic-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
