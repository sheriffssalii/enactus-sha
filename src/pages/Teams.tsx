import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Camera, 
  Target, 
  Presentation, 
  DollarSign, 
  Megaphone 
} from "lucide-react";

const Teams = () => {
  const teams = [
    {
      name: "Human Resources",
      icon: Users,
      description: "Building and nurturing our community of passionate students. We handle recruitment, team development, and creating a positive organizational culture.",
      responsibilities: ["Recruitment & Selection", "Team Building", "Training Programs", "Performance Management","Learning & Development"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "Multimedia",
      icon: Camera,
      description: "Bringing our stories to life through visual content. We create compelling videos, photography, and digital assets that showcase our impact.",
      responsibilities: ["Video Production", "Photography", "Graphic Design"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      name: "Project Management",
      icon: Target,
      description: "Leading our social ventures from conception to implementation. We ensure projects deliver maximum impact and sustainable solutions.",
      responsibilities: ["Project Planning", "Implementation", "Impact Measurement", "Stakeholder Management"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      name: "Presentation",
      icon: Presentation,
      description: "Communicating our impact with power and precision. We represent Enactus SHA at competitions and events with compelling presentations.",
      responsibilities: ["Competition Preparation", "Public Speaking", "Storytelling", "Presentation Design"],
      color: "from-red-500/20 to-red-600/20"
    },
    {
      name: "Public Relations & Finance",
      icon: DollarSign,
      description: "Building strategic partnerships and managing resources. We secure funding, maintain sponsor relationships, and handle financial planning.",
      responsibilities: ["Sponsorship Acquisition", "Financial Planning", "Partnership Management", "Resource Allocation"],
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      name: "Marketing",
      icon: Megaphone,
      description: "Amplifying our message and expanding our reach. We develop marketing strategies to promote our projects and attract new members.",
      responsibilities: ["Social Media Management", "Brand Development", "Event Marketing", "Digital Campaigns","Content Creation"],
      color: "from-pink-500/20 to-pink-600/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            Our <span className="text-primary">Teams</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-roboto">
            Meet the specialized teams that drive our mission forward. Each team brings unique 
            skills and expertise to create meaningful social impact.
          </p>
        </motion.div>

        {/* Teams Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teams.map((team, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${team.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${team.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <team.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-poppins font-semibold text-foreground">
                      {team.name}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground font-roboto mb-6 leading-relaxed">
                    {team.description}
                  </p>
                  
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {team.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground font-roboto flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Find Your Perfect Team
              </h3>
              <p className="text-muted-foreground font-roboto mb-6 max-w-2xl mx-auto">
                Each team offers unique opportunities for growth and impact. You can choose up to 
                3 teams that align with your interests and skills when you apply to join us.
              </p>
              <motion.a
                href="/join"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-poppins font-semibold hover:bg-primary/90 transition-colors"
              >
                Apply to Join Our Teams
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;