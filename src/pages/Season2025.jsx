import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TeamStructure from "@/components/TeamStructure";

const Season2025 = () => {
  const activities = [
    {
      title: "Meeting the Visionary",
      description:
        "An inspiring moment with the Co-Founder and CEO of Enactus Egypt, sharing insights, encouragement, and a vision for empowering young entrepreneurs to create real change.",
      image: "/Presedintial board.jpg",
    },
    {
      title: "Enactus Egypt Coordinator Visit",
      description:
        "A valuable session with our dedicated Enactus Egypt Coordinator, providing guidance, support, and strategic direction to help our team excel and achieve our goals throughout the season.",
      image: "/EnactusCoordinator.jpg",
    },
    {
      title: "Orientation Day",
      description:
        "Welcoming new members to the Enactus family, introducing them to our mission, values, and the exciting journey ahead.",
      image: "/Orientation.jpg",
    },
    {
      title: "General Orientation Training",
      description:
        "Our General Orientation Training brought together new and returning members to learn about Enactus Shorouk Academy’s mission, values, and upcoming season plans — building teamwork and inspiration from day one.",
      image: "/got.jpg",
    },
    {
      title: "Leadership Training",
      description:
        "An empowering workshop designed to strengthen leadership skills, teamwork, and communication — preparing members to lead impactful projects with confidence.",
      image: "/LeadershipTraining.jpg",
    },
    {
      title: "Our Bazaar",
      description:
        "Our inaugural bazaar showcased student entrepreneurship and creativity, bringing together innovative products and services from our community.",
      image: "/bazzar1.jpg",
    },
    {
      title: "Mini National Competition",
      description:
        "An intensive preparation event that tested our presentation skills and project development, setting the stage for national competition excellence.",
      image: "/MiniNC.jpg",
    },
    {
      title: "National Competition",
      description:
        "The pinnacle of our year – attending the National Competition as guests, witnessing Egypt’s best Enactus teams showcase their projects and entrepreneurial solutions while gaining inspiration for our future journey.",
      image: "/NC25.jpg",
    },
    {
      title: "Closing day",
      description:
        "As we close this remarkable season, we come together to celebrate the milestones, the challenges we’ve overcome, and the unforgettable memories we’ve created. The Closing Day marks not just an end, but a new beginning—filled with gratitude, inspiration, and excitement for what’s ahead.",
      image: "/ClosingDay.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="pt-24 pb-16 px-4 bg-cover bg-center bg-no-repeat relative min-h-[50vh] md:min-h-[60vh] flex items-center"
        style={{
          backgroundImage: "url('/SeasonPageCover.png')",
        }}
      >
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

            <p className="text-xl md:text-2xl text-foreground mb-6 leading-tight font-roboto">
              A year of innovation, collaboration, and impact at Enactus Shorouk Academy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-16">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2 p-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src={activity.image}
                      alt={`${activity.title} - Enactus Shorouk Academy event showcasing student entrepreneurship and community impact`}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-4 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4 text-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground font-roboto">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <TeamStructure />

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4 text-foreground">
                Thanks to Our Amazing Team
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-roboto mb-6">
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
