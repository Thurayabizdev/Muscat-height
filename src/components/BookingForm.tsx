import { useState } from "react";
import { Calendar, MapPin, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BookingForm() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [carType, setCarType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted", { pickupDate, returnDate, pickupLocation, carType });
  };

  return (
    <Card className="card-elegant max-w-6xl mx-auto -mt-20 relative z-10 bg-background/95 backdrop-blur-sm border-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">Find Your Perfect Car</h2>
          <p className="text-lg text-muted-foreground">Choose from our extensive fleet of modern vehicles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Pickup Location */}
          <div className="space-y-3">
            <Label htmlFor="pickup-location" className="flex items-center gap-3 font-semibold text-base">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              Pickup Location
            </Label>
            <Select value={pickupLocation} onValueChange={setPickupLocation}>
              <SelectTrigger className="h-14 text-base rounded-xl border-2 hover:border-primary/30 transition-colors">
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

          {/* Car Type */}
          <div className="space-y-3">
            <Label htmlFor="car-type" className="flex items-center gap-3 font-semibold text-base">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Car className="h-5 w-5 text-primary" />
              </div>
              Car Type
            </Label>
            <Select value={carType} onValueChange={setCarType}>
              <SelectTrigger className="h-14 text-base rounded-xl border-2 hover:border-primary/30 transition-colors">
                <SelectValue placeholder="Select car type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy Car</SelectItem>
                <SelectItem value="compact">Compact Car</SelectItem>
                <SelectItem value="midsize">Midsize Car</SelectItem>
                <SelectItem value="fullsize">Full-size Car</SelectItem>
                <SelectItem value="suv">Midsize SUV</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pickup Date */}
          <div className="space-y-3">
            <Label htmlFor="pickup-date" className="flex items-center gap-3 font-semibold text-base">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              Pickup Date
            </Label>
            <Input
              id="pickup-date"
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="h-14 text-base rounded-xl border-2 hover:border-primary/30 transition-colors"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Return Date */}
          <div className="space-y-3">
            <Label htmlFor="return-date" className="flex items-center gap-3 font-semibold text-base">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              Return Date
            </Label>
            <Input
              id="return-date"
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="h-14 text-base rounded-xl border-2 hover:border-primary/30 transition-colors"
              min={pickupDate || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            type="submit" 
            variant="accent" 
            size="xl"
            className="h-16 px-16 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Search & Book
          </Button>
        </div>
      </form>
    </Card>
  );
}