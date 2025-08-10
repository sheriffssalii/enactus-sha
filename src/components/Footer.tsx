import { Link } from "react-router-dom";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTiktok,
} from "react-icons/si"; // using react-icons simple-icons pack

const Footer = () => {
  const currentYear = new Date().getFullYear();

  
const quickLinks = () => {
    return (
        <div className="footer">
            <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                    <li><Link to="/teams" onClick={() => window.scrollTo(0, 0)}>Teams</Link></li>
                    <li><Link to="/history" onClick={() => window.scrollTo(0, 0)}>Our History</Link></li>
                    <li><Link to="/join" onClick={() => window.scrollTo(0, 0)}>Join Us</Link></li>
                    <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};
  const socialLinks = [
    { name: "Facebook", icon: SiFacebook, url: "https://www.facebook.com/Enactus.ShA" },
    { name: "Instagram", icon: SiInstagram, url: "https://www.instagram.com/enactus_shoroukacademy/" },
    { name: "LinkedIn", icon: SiLinkedin, url: "https://linkedin.com/company/enactus-alshorouk-academy" },
    { name: "TikTok", icon: SiTiktok, url: "https://www.tiktok.com/@enactus.sh.a?is_from_webapp=1&sender_device=pc" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
                 <img src="/EnactusLogo.png" alt="Enactus Logo" className="w-full h-full rounded-full" />
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
              {quickLinks()}
            </div>


          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground font-roboto">
              <p>enactussha20@gmail.com</p>
              <p>Shorouk Academy<br />Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
  <p className="text-muted-foreground font-roboto text-sm">
    <a
      href="https://www.linkedin.com/in/sherif-ali-90516b297/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 transition-colors duration-200 hover:underline"
    >
      Sherif Ali
    </a>{' '}
    @ © {currentYear} Enactus Shorouk Academy. All rights reserved.
  </p>
        </div>
</div>
    </footer>
  );
};

export default Footer;
