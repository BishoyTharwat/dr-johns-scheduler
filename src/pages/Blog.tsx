
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Tips for Better Oral Hygiene",
      excerpt: "Learn the fundamental practices that will keep your teeth and gums healthy for life.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Dr. John Smith",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Oral Health"
    },
    {
      id: 2,
      title: "The Complete Guide to Dental Implants",
      excerpt: "Everything you need to know about dental implants, from the procedure to recovery.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Dr. Michael Brown",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Dental Procedures"
    },
    {
      id: 3,
      title: "Orthodontics: Braces vs. Clear Aligners",
      excerpt: "Compare traditional braces with modern clear aligners to find the best option for you.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981960afbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Dr. Sarah Johnson",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Orthodontics"
    },
    {
      id: 4,
      title: "Preventing Tooth Decay in Children",
      excerpt: "A parent's guide to maintaining their child's dental health and preventing cavities.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Dr. Sarah Johnson",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Pediatric Dentistry"
    },
    {
      id: 5,
      title: "Foods That Naturally Whiten Your Teeth",
      excerpt: "Discover natural ways to brighten your smile through your daily diet choices.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Dr. John Smith",
      date: "February 20, 2024",
      readTime: "3 min read",
      category: "Nutrition"
    },
    {
      id: 6,
      title: "Understanding Gum Disease: Prevention and Treatment",
      excerpt: "Learn about the stages of gum disease and how to prevent and treat this common condition.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Dr. John Smith",
      date: "February 15, 2024",
      readTime: "7 min read",
      category: "Gum Health"
    }
  ];

  const categories = ["All", "Oral Health", "Dental Procedures", "Orthodontics", "Pediatric Dentistry", "Nutrition", "Gum Health"];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Dental Health <span className="text-clinic-blue">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest tips, insights, and news about dental health and treatments.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-clinic-blue hover:bg-blue-600" : "border-clinic-blue text-clinic-blue hover:bg-clinic-light-blue"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-clinic-light-blue text-clinic-blue px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="mt-4 w-full border-clinic-blue text-clinic-blue hover:bg-clinic-light-blue">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-clinic-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Articles</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest dental health tips and news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md text-gray-800"
              />
              <Button className="bg-white text-clinic-blue hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
