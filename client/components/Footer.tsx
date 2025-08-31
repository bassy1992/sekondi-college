import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-school-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2F9c6f96bc86aa4c84939e9e7b283fc612?format=webp&width=800"
                alt="Sekondi College Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Sekondi College</h3>
                <p className="text-sm text-school-secondary">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to providing quality secondary education and nurturing future leaders 
              through academic excellence, character development, and holistic growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Academics", href: "/academics" },
                { name: "Admissions", href: "/admissions" },
                { name: "News & Events", href: "/news" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-school-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Academic Programs</h4>
            <ul className="space-y-2">
              {[
                "General Arts",
                "General Science", 
                "Business",
                "Agriculture",
                "Home Economics",
                "Visual Arts"
              ].map((program) => (
                <li key={program}>
                  <span className="text-gray-300 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-school-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Sekondi-Takoradi, Western Region, Ghana
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-school-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+233 (0) 312-000-000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-school-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@sekondicollege.edu.gh</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-school-primary rounded-full flex items-center justify-center hover:bg-school-secondary transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-school-primary rounded-full flex items-center justify-center hover:bg-school-secondary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-school-primary rounded-full flex items-center justify-center hover:bg-school-secondary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sekondi College. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-school-secondary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-school-secondary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
