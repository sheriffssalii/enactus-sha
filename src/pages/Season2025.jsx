import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Season2025 = () => {
  const activities = [
    {
      title: "Meeting the Visionary",
      description:
        "An inspiring moment with the Co-Founder and CEO of Enactus Egypt, sharing insights, encouragement, and a vision for empowering young entrepreneurs to create real change.",
      image: "/Presedintial board.jpg",
    },
    {
      title: " General Orientation Training",
      description:
        "Our General Orientation Training brought together new and returning members to learn about Enactus Shorouk Academy’s mission, values, and upcoming season plans — building teamwork and inspiration from day one.",
      image: "/got.jpg",
    },
    {
      title: "First Bazaar",
      description:
        "Our inaugural bazaar showcased student entrepreneurship and creativity, bringing together innovative products and services from our community",
      image: "/bazzar1.jpg",
    },
    {
      title: "Mini National Competition",
      description:
        "An intensive preparation event that tested our presentation skills and project development, setting the stage for national competition excellence.",
      image: "/mini-nc.jpg",
    },
    {
      title: "National Competition",
      description:
        "The pinnacle of our year - competing against Egypt's best Enactus teams, showcasing our social impact projects and entrepreneurial solutions.",
      image: "/nc.jpg",
    },
    {
      title: "Orientation Day",
      description:
        "Welcoming new members to the Enactus family, introducing them to our mission, values, and the exciting journey ahead.",
      image: "/Orientation.jpg",
    },
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
      <section
        className="pt-24 pb-16 px-4 bg-cover bg-center bg-no-repeat relative min-h-[50vh] md:min-h-[60vh] flex items-center"
        style={{
          backgroundImage: "url('/LeadershipTraining.jpg')",
        }}
      >
        {/* Enhanced dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-4 md:mb-6 leading-tight">
               2025 Season
              <span className="text-primary"> Recap</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-white mb-4 md:mb-6 leading-tight mb-8 font-roboto">
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
                className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4 md:mb-6 text-center"
              >
                {activity.title}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 font-roboto text-center max-w-3xl mx-auto px-4"
              >
                {activity.description}
              </motion.p>

              <motion.div variants={itemVariants} className="w-full">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 sm:h-56 md:h-72 lg:h-96 object-cover rounded-lg shadow-lg"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-4 md:mb-6 px-4">
              Thank You to Our Amazing Team
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 md:mb-8 font-roboto px-4 max-w-3xl mx-auto">
              Together, we've made 2025 a year of incredible impact and growth. Ready to join our mission?
            </p>
            <Link to="/join">
              <Button size="lg" className="font-poppins font-semibold text-lg px-8 py-3">
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
