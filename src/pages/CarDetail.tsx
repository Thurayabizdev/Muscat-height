import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Car, Clock, ChevronDown, Star, Users, Fuel, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import economyCar from "@/assets/economy-car.jpg";
import compactCar from "@/assets/compact-car.jpg";
import midsizeCar from "@/assets/midsize-car.jpg";
import fullsizeCar from "@/assets/fullsize-car.jpg";
import midsizeSuv from "@/assets/midsize-suv.jpg";

const carData = {
  economy: {
    name: "Chevrolet Spark or similar",
    category: "Economy Car",
    image: economyCar,
    price: 45,
    seats: 4,
    transmission: "Automatic",
    mpg: "27-35",
    ageRequirement: "21+ years",
    description: "Perfect for city driving and budget-conscious travelers. This compact vehicle offers excellent fuel efficiency while providing comfortable seating for up to 4 passengers. Ideal for navigating busy urban streets and finding parking in tight spaces.",
    features: ["Air Conditioning", "Bluetooth", "USB Ports", "Power Steering"],
    faq: [
      {
        question: "What is an economy car?",
        answer: "An economy car is a compact, fuel-efficient vehicle designed for affordability and practicality. Perfect for city driving and short trips."
      },
      {
        question: "Are they easy to drive in NYC?",
        answer: "Absolutely. Economy vehicles are compact and easy to maneuver, making them perfect for city driving and parking."
      },
      {
        question: "Can I upgrade?",
        answer: "No problem — just contact us before pickup to upgrade to a larger vehicle based on availability."
      },
      {
        question: "Can I travel outside the city?",
        answer: "Yes, most rentals can be taken outside the city. Check with us about any restrictions for your specific rental."
      },
      {
        question: "What is the fuel efficiency?",
        answer: "Economy cars average 30–40 MPG, making them very cost-effective for longer trips."
      },
      {
        question: "Transmission type?",
        answer: "All economy rentals come with automatic transmission for easy driving."
      }
    ]
  },
  compact: {
    name: "Hyundai Accent or similar",
    category: "Compact Car",
    image: compactCar,
    price: 55,
    seats: 5,
    transmission: "Automatic",
    mpg: "27-35",
    ageRequirement: "21+ years",
    description: "Comfortable and efficient for longer trips. This compact car provides more space than economy vehicles while maintaining excellent fuel efficiency. Perfect for small groups or travelers with more luggage.",
    features: ["Air Conditioning", "Bluetooth", "Backup Camera", "Cruise Control"],
    faq: [
      {
        question: "How does compact differ from economy?",
        answer: "Compact cars offer more interior space, trunk capacity, and additional features while still maintaining good fuel efficiency."
      },
      {
        question: "Seating capacity?",
        answer: "Compact cars comfortably seat up to 5 passengers with adequate legroom for all."
      }
    ]
  },
  midsize: {
    name: "Hyundai Elantra or similar",
    category: "Midsize Car",
    image: midsizeCar,
    price: 65,
    seats: 5,
    transmission: "Automatic",
    mpg: "33-43",
    ageRequirement: "21+ years",
    description: "Spacious interior with excellent fuel economy. The perfect balance of comfort, space, and efficiency for both business and leisure travel. Ideal for longer trips with family or friends.",
    features: ["Air Conditioning", "Bluetooth", "Backup Camera", "Heated Seats", "Sunroof"],
    faq: [
      {
        question: "What makes midsize cars special?",
        answer: "Midsize cars offer the best balance of space, comfort, and fuel efficiency, perfect for longer trips and family travel."
      },
      {
        question: "Trunk space?",
        answer: "Midsize cars offer generous trunk space for luggage, making them ideal for extended trips or group travel."
      }
    ]
  },
  fullsize: {
    name: "Chevrolet Malibu or similar",
    category: "Full-size Car",
    image: fullsizeCar,
    price: 75,
    seats: 5,
    transmission: "Automatic",
    mpg: "25-32",
    ageRequirement: "25+ years",
    description: "Maximum comfort and space for premium travel experience. Full-size vehicles offer the ultimate in passenger comfort with premium features and ample luggage space.",
    features: ["Leather Seats", "Navigation System", "Premium Audio", "Climate Control"],
    faq: [
      {
        question: "Who should choose full-size?",
        answer: "Full-size cars are perfect for business travelers, families, or anyone who values maximum comfort and premium features."
      }
    ]
  },
  suv: {
    name: "Nissan Rogue or similar",
    category: "Midsize SUV",
    image: midsizeSuv,
    price: 85,
    seats: 7,
    transmission: "Automatic",
    mpg: "24-31",
    ageRequirement: "25+ years",
    description: "Elevated driving position with extra cargo space. Perfect for families, group travel, or anyone needing additional storage and seating capacity.",
    features: ["All-Wheel Drive", "Third Row Seating", "Roof Rails", "Power Liftgate"],
    faq: [
      {
        question: "Benefits of choosing an SUV?",
        answer: "SUVs offer higher seating position, more cargo space, and better visibility, making them ideal for families and group travel."
      }
    ]
  }
};

export default function CarDetail() {
  const { carType } = useParams<{ carType: string }>();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const car = carData[carType as keyof typeof carData];

  if (!car) {
    return <div>Car not found</div>;
  }

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 1;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const totalPrice = car.price * calculateDays();

  const relatedCars = Object.entries(carData)
    .filter(([key]) => key !== carType)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Split Screen Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Car Image */}
        <div className="relative h-96 lg:h-screen">
          <img 
            src={car.image} 
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right Side - Booking Dashboard */}
        <div className="p-6 lg:p-12 flex flex-col justify-center bg-background">
          <Card className="card-elegant">
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold text-foreground mb-6">Book Your Rental</h1>
              
              <div className="space-y-6">
                {/* Pickup Date */}
                <div className="space-y-2">
                  <Label htmlFor="pickup-date" className="flex items-center gap-2 font-semibold">
                    <Calendar className="h-4 w-4 text-primary" />
                    Pickup Date
                  </Label>
                  <Input
                    id="pickup-date"
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="h-12"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Return Date */}
                <div className="space-y-2">
                  <Label htmlFor="return-date" className="flex items-center gap-2 font-semibold">
                    <Clock className="h-4 w-4 text-primary" />
                    Return Date
                  </Label>
                  <Input
                    id="return-date"
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="h-12"
                    min={pickupDate || new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Pickup Location */}
                <div className="space-y-2">
                  <Label htmlFor="pickup-location" className="flex items-center gap-2 font-semibold">
                    <MapPin className="h-4 w-4 text-primary" />
                    Pickup Location
                  </Label>
                  <Select value={pickupLocation} onValueChange={setPickupLocation}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown Office</SelectItem>
                      <SelectItem value="airport">Airport Terminal</SelectItem>
                      <SelectItem value="mall">Shopping Mall</SelectItem>
                      <SelectItem value="station">Train Station</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Estimation */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Daily Rate</span>
                    <span className="font-semibold">${car.price}/day</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Days</span>
                    <span className="font-semibold">{calculateDays()}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">${totalPrice}</span>
                  </div>
                </div>

                <Button 
                  className="w-full h-14 text-lg font-bold"
                  variant="accent"
                  size="lg"
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Below */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Car Details */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {car.category} – {car.name}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {car.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">{car.seats} Seats</div>
            </div>
            <div className="text-center">
              <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">{car.transmission}</div>
            </div>
            <div className="text-center">
              <Fuel className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">{car.mpg} MPG</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">{car.ageRequirement}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Review</h3>
          <Card className="card-elegant">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-xl font-semibold mb-4">{car.name}</h4>
                  <p className="text-muted-foreground mb-4">
                    This vehicle consistently receives excellent reviews for its reliability, 
                    comfort, and fuel efficiency. Perfect choice for your rental needs.
                  </p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">4.8/5 (127 reviews)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Discover More Options */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Discover More Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedCars.map(([key, relatedCar]) => (
              <Link key={key} to={`/car/${key}`}>
                <Card className="card-elegant hover-scale cursor-pointer">
                  <CardContent className="p-6">
                    <img 
                      src={relatedCar.image} 
                      alt={relatedCar.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-semibold mb-2">{relatedCar.category}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{relatedCar.name}</p>
                    <p className="text-primary font-bold">${relatedCar.price}/day</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-8">Got Questions?</h3>
          <div className="space-y-4">
            {car.faq.map((item, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-card rounded-lg hover:bg-muted/30 transition-colors">
                  <span className="font-semibold text-left">{item.question}</span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 pt-0">
                  <p className="text-muted-foreground">{item.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}