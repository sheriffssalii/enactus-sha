import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Target } from "lucide-react";

const History = () => {
  const timelineEvents = [
    {
      year: "2013",
      title: "Foundation",
      description:
        "Enactus Shorouk Academy was established with a vision to create positive social impact through entrepreneurial action.",
      icon: Calendar,
      highlight: false,
    },
    {
      year: "2018",
      title: "First National Competition",
      description:
        "Our team participated in the first Enactus Egypt National Competition, gaining valuable experience and connections.",
      icon: Trophy,
      highlight: false,
    },
    {
      year: "2019",
      title: "Community Expansion",
      description:
        "Reached 200+ active members and launched our first major community development project.",
      icon: Users,
      highlight: false,
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Adapted to online operations during the pandemic, launching digital literacy programs for underserved communities.",
      icon: Target,
      highlight: false,
    },
    {
      year: "2022",
      title: "National Recognition",
      description:
        "Participated in the Enactus Egypt National Competition, showcasing our sustainable agriculture project on a national stage.",
      icon: Trophy,
      highlight: false,
    },
    {
      year: "2023",
      title: "First Place PepsiCo Award",
      description:
        "In 2023, our team proudly won the prestigious First Place Award, sponsored by PepsiCo, for our 'Recycle for Tomorrow' initiative -- a shining example of our innovation, dedication, and sustainable impact.",
      icon: Trophy,
      highlight: true,
    },
    {
      year: "2024",
      title: " 7 Years of Impact",
      description:
        "Marking our seventh consecutive year competing in the Enactus Egypt National Competition since 2018, continuing our commitment to social entrepreneurship and innovation.",
      icon: Calendar,
      highlight: true,
    },
  ];

  const achievements = [
    {
      title: " 7 Years of Impact",
      year: "2024",
      description:
        "Seven consecutive years of competing in the Enactus Egypt National Competition since 2018",
    },
    {
      title: "First Place PepsiCo Award",
      year: "2023",
      description:
        "In 2023, our team won first place in PepsiCo's 'Recycle for Tomorrow' initiative for our innovative and sustainable impact.",
    },
    
    {
      title: "Outstanding Presentation",
      year: "2024",
      description:
        "Excellence in presentation and storytelling at the National Competition",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Our <span className="text-primary">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-roboto">
            Thirteen years of social entrepreneurship, innovation, and impact. From humble beginnings
            to national recognition, here's our story.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-poppins font-bold text-foreground mb-12 text-center"
          >
            Timeline of Impact
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card
                      className={`${
                        event.highlight ? "border-primary shadow-lg" : ""
                      } hover:shadow-xl transition-shadow duration-300`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-full ${
                              event.highlight ? "bg-primary" : "bg-primary/20"
                            } flex items-center justify-center`}
                          >
                            <event.icon
                              className={`w-5 h-5 ${
                                event.highlight
                                  ? "text-primary-foreground"
                                  : "text-primary"
                              }`}
                            />
                          </div>
                          <div>
                            <Badge
                              variant={event.highlight ? "default" : "secondary"}
                            >
                              {event.year}
                            </Badge>
                          </div>
                        </div>
                        <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground font-roboto">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for desktop layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-12 text-center">
            Recent Achievements (2022-2024)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Trophy className="w-8 h-8 text-primary flex-shrink-0" />
                      <Badge variant="outline" className="text-primary border-primary">
                        {achievement.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground font-roboto">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
                A Decade of Impact
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-64">
                <div>
                  <div className="text-3xl font-poppins font-bold text-primary mb-2">13</div>
                  <div className="text-sm text-muted-foreground font-roboto">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-poppins font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground font-roboto">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-poppins font-bold text-primary mb-2">2000+</div>
                  <div className="text-sm text-muted-foreground font-roboto">Alumni</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default History;
