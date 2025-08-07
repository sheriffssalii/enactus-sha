import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/enactusshorouk",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/enactusshorouk",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/enactusshorouk",
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-50"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "enactus@shorouk.edu.eg",
      description: "Send us your questions or collaboration ideas"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+20 101 234 5678",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Shorouk Academy, Cairo, Egypt",
      description: "Find us on campus"
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
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground font-roboto max-w-2xl mx-auto">
            We'd love to hear from you! Whether you're interested in joining our team, 
            partnering with us, or just want to learn more about our impact.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-poppins font-semibold text-foreground mb-8 text-center"
          >
            Contact Information
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-primary font-roboto font-medium mb-2">
                      {contact.info}
                    </p>
                    <p className="text-sm text-muted-foreground font-roboto">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-poppins font-semibold text-foreground mb-6">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground font-roboto mb-12 max-w-2xl mx-auto">
            Stay connected with us on social media to see our latest projects, 
            achievements, and behind-the-scenes moments.
          </p>

          <div className="flex justify-center items-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 ${link.bgColor} ${link.color} hover:shadow-lg group`}
              >
                <link.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Additional Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                  Ready to Make an Impact?
                </h3>
                <p className="text-muted-foreground font-roboto mb-6 max-w-2xl mx-auto">
                  Join us in creating positive social change through entrepreneurial action. 
                  Whether you're a student, partner, or supporter, there's a place for you in our community.
                </p>
                <motion.a
                  href="/join"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-poppins font-semibold hover:bg-primary/90 transition-colors"
                >
                  Join Our Community
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;