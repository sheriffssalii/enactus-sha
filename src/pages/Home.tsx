import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const kpis = [
    { icon: Users, value: "200+", label: "Active Students" },
    { icon: Target, value: "15+", label: "Social Projects" },
    { icon: Globe, value: "13", label: "Years of Impact" },
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
    backgroundImage: "url('/HomePage.jpg')",
  }}>
          {/* Optional: dark overlay for better text readability */}
  <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8"
            >
                <div className="w-15 h-10 bg-white rounded-full p-1">
                  <img 
                    src="/EnactusLogo.png" 
                    alt="Enactus Shorouk Academy Logo - Empowering student entrepreneurs" 
                    className="w-full h-full rounded-full object-contain" 
                    loading="eager"
                  />
                </div>

      
           </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6">
              We See
              <span className="text-primary"> Opportunity</span>
            </h1>
            <p className="text-xl md:text-2xl text-offwhite mb-6 leading-tight font-roboto">
              Enactus Shorouk Academy empowers students to create positive social impact 
              through entrepreneurial action and innovation.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/join">
                <Button size="lg" className="font-poppins font-semibold text-lg px-8 py-3">
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Enactus Worldwide */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6"
            >
              About Enactus Worldwide
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 font-roboto leading-relaxed"
            >
              Enactus is a global network of students, academic advisors, and business leaders 
              committed to using entrepreneurial action to create a better world. We believe 
              that business innovation and entrepreneurship can transform lives and shape a 
              better, more sustainable world.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="bg-primary/10 rounded-lg p-8"
            >
              <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                Our Global Mission
              </h3>
              <p className="text-foreground font-roboto">
                To develop the next generation of entrepreneurial leaders and social innovators 
                who will use business as a force for positive change in their communities and beyond.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enactus Shorouk Academy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-8 text-center"
            >
              Enactus Shorouk Academy
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground font-roboto">
                      To empower Shorouk Academy students with the knowledge, skills, and 
                      passion to create sustainable social ventures that address community 
                      challenges and drive positive change.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground font-roboto">
                      To be the leading force for social entrepreneurship in Egypt, 
                      developing innovative solutions that transform communities and 
                      inspire the next generation of change-makers.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12"
            >
              Our Impact in Numbers
            </motion.h2>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <kpi.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-3xl font-poppins font-bold text-primary mb-2">
                        {kpi.value}
                      </div>
                      <div className="text-sm font-roboto text-muted-foreground">
                        {kpi.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-roboto">
              Join our community of student entrepreneurs and social innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button variant="secondary" size="lg" className="font-poppins font-semibold">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="font-poppins font-semibold bg-white text-primary hover:bg-white/90">
                  Team Login
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;