import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 for analytics purposes
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-16 pb-8 px-4 flex items-center justify-center bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-poppins font-bold text-primary mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </motion.div>

          <Card className="shadow-xl border-2 border-border/50 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-foreground mb-4">
                  Oops! Page Not Found
                </h2>
                
                <p className="text-lg text-muted-foreground font-roboto mb-8 leading-relaxed">
                  The page you're looking for doesn't exist or has been moved. 
                  Let's get you back on track!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/">
                    <Button size="lg" className="font-poppins font-semibold">
                      <Home className="mr-2 w-5 h-5" />
                      Back to Home
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => window.history.back()}
                    className="font-poppins font-semibold"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Go Back
                  </Button>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 pt-8 border-t border-border"
              >
                <h3 className="text-lg font-poppins font-semibold text-foreground mb-4">
                  Popular Pages
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link 
                    to="/teams" 
                    className="text-primary hover:text-primary/80 font-roboto transition-colors"
                  >
                    Our Teams
                  </Link>
                  <Link 
                    to="/history" 
                    className="text-primary hover:text-primary/80 font-roboto transition-colors"
                  >
                    Our History
                  </Link>
                  <Link 
                    to="/join" 
                    className="text-primary hover:text-primary/80 font-roboto transition-colors"
                  >
                    Join Us
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-primary hover:text-primary/80 font-roboto transition-colors"
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/season2025" 
                    className="text-primary hover:text-primary/80 font-roboto transition-colors"
                  >
                    Season 2025
                  </Link>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;