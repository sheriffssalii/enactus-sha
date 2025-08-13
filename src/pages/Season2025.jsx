import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Season2025 = () => {
  const activities = [
    {
      title: "First Bazaar",
      description: "Our inaugural bazaar showcased student entrepreneurship and creativity, bringing together innovative products and services from our community.",
      image: "/bazaar1.jpg"
    },
    {
      title: "Second Bazaar",
      description: "Building on our first success, the second bazaar expanded our reach and impact, featuring even more diverse student ventures and social initiatives.",
      image: "/bazaar2.jpg"
    },
    {
      title: "Mini National Competition",
      description: "An intensive preparation event that tested our presentation skills and project development, setting the stage for national competition excellence.",
      image: "/mini-nc.jpg"
    },
    {
      title: "National Competition",
      description: "The pinnacle of our year - competing against Egypt's best Enactus teams, showcasing our social impact projects and entrepreneurial solutions.",
      image: "/nc.jpg"
    },
    {
      title: "Orientation Day",
      description: "Welcoming new members to the Enactus family, introducing them to our mission, values, and the exciting journey ahead.",
      image: "/orientation.jpg"
    },
    {
      title: "Closing Ceremony",
      description: "Celebrating our achievements, recognizing outstanding contributions, and reflecting on a year of transformative social impact.",
      image: "/closing.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/2025-hero.jpg')",
        }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
              2025 Season Recap
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-roboto">
              A year of innovation, collaboration, and impact at Enactus Shorouk Academy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Sections */}
      {activities.map((activity, index) => (
        <section key={index} className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6 text-center"
              >
                {activity.title}
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8 font-roboto text-center max-w-3xl mx-auto"
              >
                {activity.description}
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="w-full"
              >
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-6">
              Thank You to Our Amazing Team
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-roboto">
              Together, we've made 2025 a year of incredible impact and growth. Ready to join our mission?
            </p>
            <Link to="/join">
              <Button variant="secondary" size="lg" className="font-poppins font-semibold">
                Join Our Next Season
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Season2025;