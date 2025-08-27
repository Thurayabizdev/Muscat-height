import { Users, Fuel, Settings, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CarCardProps {
  name: string;
  image: string;
  category: string;
  seats: number;
  transmission: string;
  mpg: string;
  ageRequirement: string;
  description: string;
  features?: string[];
  isPopular?: boolean;
  carType?: string;
}

export function CarCard({
  name,
  image,
  category,
  seats,
  transmission,
  mpg,
  ageRequirement,
  description,
  features = [],
  isPopular = false,
  carType,
}: CarCardProps) {
  return (
    <Card className="card-elegant h-full flex flex-col relative overflow-hidden">
      {isPopular && (
        <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
          Popular
        </Badge>
      )}
      
      <div className="relative p-6 pb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain rounded-lg"
        />
      </div>

      <CardContent className="flex-1 p-6 pt-2">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span>{seats} Seats</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Settings className="h-4 w-4 text-primary" />
              <span>{transmission}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Fuel className="h-4 w-4 text-primary" />
              <span>{mpg} MPG</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{ageRequirement}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Features:</h4>
              <div className="flex flex-wrap gap-1">
                {features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        {carType ? (
          <Link to={`/car/${carType}`} className="w-full">
            <Button variant="hero" size="lg" className="w-full">
              View Details
            </Button>
          </Link>
        ) : (
          <Button variant="hero" size="lg" className="w-full">
            Book Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}