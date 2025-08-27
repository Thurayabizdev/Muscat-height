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
    <Card className="card-elegant booking-shadow p-6 mx-auto max-w-6xl -mt-16 relative z-10 bg-background">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Car</h2>
          <p className="text-muted-foreground">Choose from our extensive fleet of modern vehicles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* Car Type */}
          <div className="space-y-2">
            <Label htmlFor="car-type" className="flex items-center gap-2 font-semibold">
              <Car className="h-4 w-4 text-primary" />
              Car Type
            </Label>
            <Select value={carType} onValueChange={setCarType}>
              <SelectTrigger className="h-12">
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
        </div>

        <div className="flex justify-center pt-4">
          <Button 
            type="submit" 
            variant="accent" 
            size="xl"
            className="px-12"
          >
            Search Available Cars
          </Button>
        </div>
      </form>
    </Card>
  );
}