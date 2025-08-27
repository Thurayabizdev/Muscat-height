import { CheckCircle, Users, Star, Award, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: CheckCircle,
    title: "Quality First",
    description: "Every vehicle in our fleet undergoes rigorous inspection and maintenance to ensure the highest standards of safety and reliability."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We prioritize customer satisfaction and strive to exceed expectations with personalized service and flexible solutions."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We are committed to excellence in every aspect of our service, from vehicle quality to customer support."
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your safety is our priority. All rentals include comprehensive insurance and 24/7 roadside assistance."
  },
];

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "500+", label: "Vehicles Available" },
  { number: "15+", label: "Years Experience" },
  { number: "24/7", label: "Customer Support" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About CarRent
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in quality car rentals since 2009. We're dedicated to providing 
            exceptional service and reliable vehicles for all your transportation needs.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, CarRent began as a small family business with a simple mission: 
                  to provide reliable, affordable car rental services to our community. What started 
                  with just five vehicles has grown into one of the region's most trusted rental companies.
                </p>
                <p>
                  Over the years, we've expanded our fleet to include over 500 modern vehicles, 
                  ranging from fuel-efficient economy cars to spacious SUVs. Our commitment to 
                  quality and customer service has earned us the loyalty of thousands of customers.
                </p>
                <p>
                  Today, we continue to evolve and innovate, embracing new technologies and 
                  sustainable practices while maintaining the personal touch that has been our 
                  hallmark since day one.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="card-elegant text-center p-6">
                  <CardContent className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="card-elegant p-8">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide our customers with safe, reliable, and affordable transportation 
                  solutions while delivering exceptional service that exceeds expectations. 
                  We aim to make car rental simple, convenient, and stress-free.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant p-8">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading car rental company in the region, recognized for our 
                  commitment to quality, innovation, and sustainable practices. We envision 
                  a future where mobility is accessible, environmentally responsible, and seamlessly integrated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-elegant p-8">
                  <CardContent className="flex gap-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience CarRent?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who trust us for their car rental needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground hover:bg-accent-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book Your Car
            </button>
            <button className="bg-white/10 text-white border border-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}