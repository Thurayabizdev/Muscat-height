import { CarCard } from "@/components/CarCard";
import economyCar from "@/assets/economy-car.jpg";
import compactCar from "@/assets/compact-car.jpg";
import midsizeCar from "@/assets/midsize-car.jpg";
import fullsizeCar from "@/assets/fullsize-car.jpg";
import midsizeSuv from "@/assets/midsize-suv.jpg";

const vehicles = [
  {
    name: "Chevrolet Spark or similar",
    image: economyCar,
    category: "Economy Car",
    seats: 4,
    transmission: "Automatic",
    mpg: "27-35",
    ageRequirement: "21+ years",
    description: "Perfect for city driving and budget-conscious travelers. This compact car offers excellent fuel efficiency and easy parking in urban areas. Ideal for short trips and daily commuting.",
    features: ["Air Conditioning", "Bluetooth", "USB Charging", "Power Steering"],
    isPopular: true,
  },
  {
    name: "Hyundai Accent or similar",
    image: compactCar,
    category: "Compact Car",
    seats: 5,
    transmission: "Automatic",
    mpg: "27-35",
    ageRequirement: "21+ years",
    description: "Comfortable and efficient for longer trips. The compact car provides a perfect balance of space, comfort, and fuel economy. Great for small families or groups.",
    features: ["Air Conditioning", "Bluetooth", "USB Charging", "Power Windows", "Cruise Control"],
  },
  {
    name: "Hyundai Elantra or similar",
    image: midsizeCar,
    category: "Midsize Car",
    seats: 5,
    transmission: "Automatic",
    mpg: "33-43",
    ageRequirement: "21+ years",
    description: "Spacious interior with excellent fuel economy. This midsize sedan offers premium comfort with advanced safety features and modern technology integration.",
    features: ["Air Conditioning", "Bluetooth", "USB Charging", "Power Windows", "Cruise Control", "Backup Camera"],
    isPopular: true,
  },
  {
    name: "Nissan Altima or similar",
    image: fullsizeCar,
    category: "Full-size Car",
    seats: 5,
    transmission: "Automatic",
    mpg: "28-39",
    ageRequirement: "25+ years",
    description: "Premium comfort and performance for business travel or special occasions. This full-size sedan provides luxury amenities and a smooth, quiet ride experience.",
    features: ["Air Conditioning", "Bluetooth", "USB Charging", "Power Windows", "Cruise Control", "Backup Camera", "Premium Audio"],
  },
  {
    name: "Hyundai Tucson or similar",
    image: midsizeSuv,
    category: "Midsize SUV",
    seats: 5,
    transmission: "Automatic",
    mpg: "26-33",
    ageRequirement: "25+ years",
    description: "Versatile SUV perfect for family trips and outdoor adventures. Offers elevated seating position, cargo space, and all-weather capability with modern convenience features.",
    features: ["Air Conditioning", "Bluetooth", "USB Charging", "Power Windows", "Cruise Control", "Backup Camera", "All-Wheel Drive", "Roof Rails"],
    isPopular: true,
  },
];

export default function Fleet() {
  return (
    <div className="min-h-screen pt-8">
      {/* Header Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Fleet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of modern, well-maintained vehicles. 
            From efficient economy cars to spacious SUVs, we have the perfect vehicle for every journey.
          </p>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <CarCard key={index} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Found Your Perfect Car?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Book now and enjoy competitive rates with no hidden fees
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground hover:bg-accent-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book Now
            </button>
            <button className="bg-white/10 text-white border border-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}