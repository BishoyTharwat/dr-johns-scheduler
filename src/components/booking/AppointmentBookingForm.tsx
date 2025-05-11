
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Sample data for services and doctors
const dentalServices = [
  { id: 1, name: "Regular Check-up", duration: 30 },
  { id: 2, name: "Teeth Cleaning", duration: 60 },
  { id: 3, name: "Tooth Extraction", duration: 45 },
  { id: 4, name: "Root Canal Treatment", duration: 90 },
  { id: 5, name: "Dental Filling", duration: 45 },
  { id: 6, name: "Dental Crown", duration: 60 },
];

const doctors = [
  { id: 1, name: "Dr. John Smith", specialization: "General Dentistry" },
  { id: 2, name: "Dr. Sarah Johnson", specialization: "Orthodontist" },
  { id: 3, name: "Dr. Michael Brown", specialization: "Pediatric Dentist" },
];

// Generate time slots from 9 AM to 5 PM with 30-minute intervals
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      slots.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const AppointmentBookingForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [service, setService] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !service || !doctor || !timeSlot) {
      toast({
        variant: "destructive",
        title: "Incomplete Form",
        description: "Please fill out all fields to book your appointment.",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      // This is a stub for the booking functionality
      // In a real app, this would make an API request to book the appointment
      console.log("Booking data:", {
        date: format(date, "yyyy-MM-dd"),
        time: timeSlot,
        serviceId: service,
        doctorId: doctor,
      });
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Appointment Booked",
        description: `Your appointment has been scheduled for ${format(date, "MMMM d, yyyy")} at ${timeSlot}`,
      });
      
      // Reset form
      setDate(undefined);
      setService("");
      setDoctor("");
      setTimeSlot("");
      
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: "There was a problem booking your appointment. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="service">Select Service</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Choose a dental service" />
            </SelectTrigger>
            <SelectContent>
              {dentalServices.map((service) => (
                <SelectItem key={service.id} value={service.id.toString()}>
                  {service.name} ({service.duration} min)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="doctor">Select Doctor</Label>
          <Select value={doctor} onValueChange={setDoctor}>
            <SelectTrigger id="doctor">
              <SelectValue placeholder="Choose a dentist" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((doctor) => (
                <SelectItem key={doctor.id} value={doctor.id.toString()}>
                  {doctor.name} ({doctor.specialization})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Select Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(currentDate) => {
                  // Disable past dates and weekends (Saturday and Sunday)
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const day = currentDate.getDay();
                  return currentDate < today || day === 0 || day === 6;
                }}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeSlot">Select Time</Label>
          <Select value={timeSlot} onValueChange={setTimeSlot} disabled={!date}>
            <SelectTrigger id="timeSlot">
              <SelectValue placeholder="Choose a time slot">
                {timeSlot ? (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {timeSlot}
                  </div>
                ) : (
                  "Select time"
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {!date && <p className="text-xs text-muted-foreground">Please select a date first</p>}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-clinic-blue hover:bg-blue-600"
          disabled={isLoading || !date || !service || !doctor || !timeSlot}
        >
          {isLoading ? "Booking..." : "Book Appointment"}
        </Button>
      </form>
    </Card>
  );
};

export default AppointmentBookingForm;
