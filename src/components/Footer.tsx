import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "Our History", path: "/history" },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/enactusshorouk" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/enactusshorouk" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/enactusshorouk" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="font-poppins font-semibold text-lg text-foreground">
                Enactus Shorouk Academy
              </span>
            </Link>
            <p className="text-muted-foreground font-roboto mb-4 max-w-md">
              Empowering students to create positive social impact through entrepreneurial 
              action and innovation. Join us in building a better world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground font-roboto hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground font-roboto">
              <p>enactus@shorouk.edu.eg</p>
              <p>+20 101 234 5678</p>
              <p>Shorouk Academy<br />Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-roboto text-sm">
            © {currentYear} Enactus Shorouk Academy. All rights reserved.
          </p>
          <p className="text-muted-foreground font-roboto text-sm mt-2 md:mt-0">
            Made with ❤️ for social impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;