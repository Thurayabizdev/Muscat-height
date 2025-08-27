import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CarRent</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for quality car rentals. We provide reliable, affordable, and comfortable vehicles for all your transportation needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-background/80 hover:text-background transition-colors text-sm">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-background transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-background transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vehicle Categories</h3>
            <ul className="space-y-2">
              <li className="text-background/80 text-sm">Economy Cars</li>
              <li className="text-background/80 text-sm">Compact Cars</li>
              <li className="text-background/80 text-sm">Midsize Cars</li>
              <li className="text-background/80 text-sm">Full-size Cars</li>
              <li className="text-background/80 text-sm">SUVs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">info@carrent.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-background/80 text-sm">
                  123 Main Street<br />
                  Downtown, City 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 CarRent. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-background/60 hover:text-background transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}