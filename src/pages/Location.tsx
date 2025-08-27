import { MapPin, Phone, Clock, Navigation, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Downtown Office",
    address: "123 Main Street, Downtown, City 12345",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-8PM",
    services: ["Car Pickup", "Car Return", "Customer Service", "Vehicle Inspection"],
    isMain: true,
  },
  {
    name: "Airport Terminal",
    address: "Airport Terminal 1, Level 2, City Airport",
    phone: "+1 (555) 234-5678",
    hours: "24/7 Available",
    services: ["Car Pickup", "Car Return", "Express Service"],
    isMain: false,
  },
  {
    name: "Shopping Mall",
    address: "456 Shopping Center, Mall District, City 12345",
    phone: "+1 (555) 345-6789",
    hours: "Mon-Sat: 10AM-9PM, Sun: 12PM-6PM",
    services: ["Car Pickup", "Car Return", "Customer Service"],
    isMain: false,
  },
  {
    name: "Train Station",
    address: "Central Train Station, Platform Level, City 12345",
    phone: "+1 (555) 456-7890",
    hours: "Daily: 6AM-11PM",
    services: ["Car Pickup", "Car Return", "Express Service"],
    isMain: false,
  },
];

export default function Location() {
  return (
    <div className="min-h-screen pt-8">
      {/* Header Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Locations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Convenient pickup and drop-off locations throughout the city. 
            Find the location nearest to you for easy car rental access.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              Find Us on the Map
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Click on any location marker to view details and get directions
            </p>
            
            {/* Map Placeholder */}
            <Card className="card-elegant">
              <CardContent className="p-0">
                <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 text-primary mx-auto" />
                    <h3 className="text-xl font-semibold text-foreground">Interactive Map</h3>
                    <p className="text-muted-foreground max-w-md">
                      Map integration would show all our locations with clickable markers. 
                      Each marker would display location details and provide directions.
                    </p>
                    <Button variant="outline">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              All Locations
            </h2>
            <p className="text-muted-foreground">
              Complete list of our pickup and drop-off locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className={`card-elegant p-6 ${location.isMain ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        {location.name}
                        {location.isMain && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                            Main Office
                          </span>
                        )}
                      </h3>
                    </div>
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <p className="text-muted-foreground">{location.phone}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-muted-foreground text-sm font-medium mb-1">Services:</p>
                        <div className="flex flex-wrap gap-1">
                          {location.services.map((service, serviceIndex) => (
                            <span
                              key={serviceIndex}
                              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="hero" size="sm" className="flex-1">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Location
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Pick Up Your Car?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Choose your preferred location and book your rental car today
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
      </section>
    </div>
  );
}