
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GeneralDentistry from "./pages/GeneralDentistry";
import CosmeticDentistry from "./pages/CosmeticDentistry";
import Orthodontics from "./pages/Orthodontics";
import PediatricDentistry from "./pages/PediatricDentistry";
import DentalImplants from "./pages/DentalImplants";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/orthodontics" element={<Orthodontics />} />
          <Route path="/services/pediatric-dentistry" element={<PediatricDentistry />} />
          <Route path="/services/dental-implants" element={<DentalImplants />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
