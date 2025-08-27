import { CheckCircle, Star, Shield, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/BookingForm";
import { CarCard } from "@/components/CarCard";
import heroBanner from "@/assets/hero-banner.jpg";
import economyCar from "@/assets/economy-car.jpg";
import compactCar from "@/assets/compact-car.jpg";
import midsizeCar from "@/assets/midsize-car.jpg";

const fleetPreview = [
  {
    name: "Chevrolet Spark or similar",
    image: economyCar,
    category: "Economy Car",
    seats: 4,
    transmission: "Automatic",
    mpg: "27-35",
    ageRequirement: "21+ years",
    description: "Perfect for city driving and budget-conscious travelers.",
    isPopular: true,
    carType: "economy",
  },
  {
    name: "Hyundai Accent or similar",
    image: compactCar,
    category: "Compact Car", 
    seats: 5,
    transmission: "Automatic",
    mpg: "27-35",
    ageRequirement: "21+ years",
    description: "Comfortable and efficient for longer trips.",
    carType: "compact",
  },
  {
    name: "Hyundai Elantra or similar",
    image: midsizeCar,
    category: "Midsize Car",
    seats: 5,
    transmission: "Automatic", 
    mpg: "33-43",
    ageRequirement: "21+ years",
    description: "Spacious interior with excellent fuel economy.",
    carType: "midsize",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "All vehicles undergo rigorous inspection and maintenance"
  },
  {
    icon: Star,
    title: "24/7 Support",
    description: "Round-the-clock customer service for your peace of mind"
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage on all rentals"
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Easy online booking with flexible pickup and return times"
  },
  {
    icon: Users,
    title: "Trusted Service",
    description: "Over 10,000 satisfied customers and counting"
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description: "Convenient pickup locations throughout the city"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-accent"> Rental Car</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Discover our premium fleet of modern vehicles for every journey. 
              Quality, comfort, and reliability guaranteed.
            </p>
          </div>
        </div>
        
        {/* Booking Form Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      {/* Fleet Preview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Popular Vehicles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse fleet of well-maintained, modern vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {fleetPreview.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="px-8">
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose CarRent?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best car rental experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="card-elegant text-center p-8">
                  <CardContent className="space-y-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Hit the Road?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Book your perfect rental car today and enjoy the freedom of the road. 
              Quick, easy, and hassle-free booking process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" className="px-8">
                Book Now
              </Button>
              <Button variant="outline" size="xl" className="px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                View Fleet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}