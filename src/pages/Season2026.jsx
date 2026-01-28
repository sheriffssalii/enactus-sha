import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TeamStructure26 from "@/components/TeamStructure26";

// Toggle to control if Season 2026 content is available
const SEASON_2026_ACTIVE = true;

const ComingSoon = () => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
    <div className="text-center max-w-2xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6">
          Season <span className="text-primary">2026</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-roboto">
          Coming Soon
        </p>
        <p className="text-lg text-muted-foreground mb-8 font-roboto">
          Get ready for another year of innovation, collaboration, and impact at Enactus Shorouk Academy.
        </p>
        <Link to="/join">
          <Button size="lg" className="font-poppins font-semibold text-lg px-8 py-3">
            Join Our Community
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </div>
);

const Season2026 = () => {
  // If season is not active, show coming soon page
  if (!SEASON_2026_ACTIVE) {
    return <ComingSoon />;
  }

  const activities = [
    {
      title: "Orientation Day",
      description:
        "Welcoming new members to the Enactus family, introducing them to our mission, values, and the exciting journey ahead.",
      image: "/orientation26.jpeg",
      icon: Users,
      date: "October 2025",
    },
    {
      title: "Leadership Training",
      description:
        "An empowering workshop designed to strengthen leadership skills, teamwork, and communication — preparing members to lead impactful projects with confidence.",
      image: "/Leadership26.jpeg",
      icon: Target,
      date: "November 2025",
    },
  ];

  const stats = [
    { value: "200+", label: "Team Members", icon: Users },
    { value: "6", label: "Active Teams", icon: Sparkles },
    { value: "2", label: "Major Events", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Glassmorphism */}
      <section
        className="pt-24 pb-20 px-4 bg-cover bg-center bg-no-repeat relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/SeasonPageCover.png')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-0"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">New Season</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground mb-6 leading-tight">
              Season{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                2026
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed font-roboto max-w-2xl mx-auto">
              A year of innovation, collaboration, and transformative impact at Enactus Shorouk Academy.
            </p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center bg-card/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-border"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section with Enhanced Cards */}
      <section className="py-20 px-4 bg-background relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-foreground">
            Season <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground font-roboto max-w-2xl mx-auto">
            Key moments that defined our journey this season
          </p>
        </motion.div>

        <div className="container mx-auto relative max-w-6xl">
          {/* Vertical timeline line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>

          <div className="space-y-12 md:space-y-20">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
              >
                {/* Image Card with Hover Effect */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={activity.image}
                        alt={`${activity.title} - Enactus Shorouk Academy event`}
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    className="w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg"
                  >
                    <activity.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-4">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{activity.date}</span>
                    </div>
                    
                    {/* Mobile Icon */}
                    <div className="md:hidden flex justify-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <activity.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4 text-foreground">
                      {activity.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground font-roboto leading-relaxed">
                      {activity.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <TeamStructure26 />

      {/* Enhanced Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-accent"></div>
        
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 text-primary-foreground">
              Thanks to Our Amazing Team
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-roboto mb-8 leading-relaxed">
              Together, we've made 2026 a year of incredible impact and growth. Ready to be part of our mission?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/join">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-poppins font-semibold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Join Our Next Season
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Season2026;
