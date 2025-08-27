import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Need help with your booking? 
            We're here to help you 24/7. Get in touch with our friendly team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-elegant text-center p-6">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>+1 (555) 123-4567</p>
                  <p className="text-sm">Available 24/7</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center p-6">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>info@carrent.com</p>
                  <p className="text-sm">Response within 1 hour</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center p-6">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Location</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>123 Main Street</p>
                  <p>Downtown, City 12345</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center p-6">
              <CardContent className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Mon-Fri: 6AM-10PM</p>
                  <p>Sat-Sun: 8AM-8PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your inquiry or how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="card-elegant p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        What documents do I need to rent a car?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        You'll need a valid driver's license, credit card, and proof of insurance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Can I modify my reservation?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, you can modify your reservation up to 24 hours before pickup.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Do you offer one-way rentals?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, we offer one-way rentals between select locations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Emergency Contact
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If you're experiencing an emergency during your rental period, 
                    please call our 24/7 emergency hotline immediately.
                  </p>
                  <div className="bg-destructive/10 p-4 rounded-lg">
                    <p className="text-destructive font-semibold">Emergency Hotline</p>
                    <p className="text-destructive text-lg font-bold">+1 (555) 911-HELP</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}