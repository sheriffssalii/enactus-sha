import { motion } from "framer-motion";
import { Crown, Users } from "lucide-react";

interface TeamMember {
  title: string;
  name?: string;
  image?: string;
}

interface Team {
  name: string;
  members: TeamMember[];
}

const TeamStructure26 = () => {
  const executiveBoard: TeamMember[] = [
    { title: "President", image: "Youssef Ehab.jpeg" },
    { title: "Vice President", image: "Essam Moamen.jpeg" },
    { title: "Vice President", image: "Fatamah Qadri.jpeg" },
  ];

  const teams: Team[] = [
    {
      name: "HR Team",
      members: [
        { title: "Head", image: "IbraamMagdy.jpeg" },
        { title: "Vice Head", image: "SuaadEslam.jpeg" },
        { title: "PM Leader", image: "SherifAli.jpeg" },
        { title: "PM Supervisor", image: "BasmalaShdeed.jpeg" },
        { title: "L&D Leader", image: "ZiadFahmy.jpeg" },
        { title: "L&D Supervisor", image: "SandyHagag.jpeg" },
        { title: "Consultant Leader", image: "AhmedAlaa.jpeg" },
      ],
    },
    {
      name: "Marketing Team",
      members: [
        { title: "Head", image: "FateimaZidan.jpeg" },
        { title: "Vice Head", image: "NancyWael.jpeg" },
        { title: "Vice Head", image: "AbdelrahmanHassan.jpeg" },
        { title: "Leader", image: "MalakIbrahim.jpeg" },
        { title: "PR & Marketing Liaison", image: "HabibaSalah.jpeg" },
      ],
    },
    {
      name: "Presentation Team",
      members: [
        { title: "Head", image: "ShahdYasser.jpeg" },
        { title: "Leader", image: "MohamedRamadan.jpeg" },
        { title: "Leader", image: "ReemAmr.jpeg" },
      ],
    },
    {
      name: "PR & FR Team",
      members: [
        { title: "Head", image: "Zizo.jpeg" },
        { title: "Vice Head", image: "YoussefSherif.jpeg" },
        { title: "Logistics Leader", image: "YoussefHossam.jpeg" },
        { title: "PR Leader", image: "MennaMohamed.jpeg" },
        { title: "Event Leader", image: "RovaidaHaitham.jpeg" },
      ],
    },
    {
      name: "Multimedia Team",
      members: [
        { title: "Head", image: "SeifAhmed.jpeg" },
        { title: "Graphic Design Vice Head", image: "ZiadSayed.jpeg" },
        { title: "Photography Vice Head", image: "Felo.jpeg" },
        { title: "Design Leader", image: "FarahEssam.jpeg" },
        { title: "Design Leader", image: "MariamSameh.jpeg" },
      ],
    },
    {
      name: "Project Team",
      members: [
        { title: "Head", image: "Rokaya.jpeg" },
        { title: "Vice Head", image: "MarwanTarek.jpeg" },
        { title: "Leader", image: "SeifMamdouh.jpeg" },
        { title: "Leader", image: "AbdallahAhmed.jpeg" },
        { title: "Leader", image: "MohabDiaa.jpeg" },
        { title: "Leader", image: "HadyMohamed.jpeg" },
        { title: "Leader", image: "AbdelrhmanSaeed.jpeg" },
      ],
    },
  ];

  const MemberCard = ({ member, index, isExecutive = false }: { member: TeamMember; index: number; isExecutive?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={`group relative ${isExecutive ? 'bg-gradient-to-br from-card via-card to-primary/5' : 'bg-card'} border border-border rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-500`}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 rounded-2xl blur opacity-0 group-hover:opacity-30 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-500"></div>
      
      <div className="relative">
        {/* Profile Image */}
        <div className="relative aspect-square bg-muted rounded-xl mb-4 overflow-hidden">
          {member.image ? (
            <>
              <img
                src={member.image}
                alt={member.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary/40" />
              </div>
            </div>
          )}
          
          {/* Executive Badge */}
          {isExecutive && (
            <div className="absolute top-2 right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Crown className="w-4 h-4 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Position Title */}
        <div className="text-center">
          <h4 className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {member.title}
          </h4>
        </div>
      </div>
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Meet The Team</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 text-foreground">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leadership</span> Team
          </h2>
          <p className="text-lg text-muted-foreground font-roboto max-w-2xl mx-auto">
            Meet the dedicated leaders driving innovation and impact at Enactus Shorouk Academy.
          </p>
        </motion.div>

        {/* Executive Board */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Crown className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold font-poppins text-foreground">
              Presidential Board
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {executiveBoard.map((member, index) => (
              <MemberCard key={`exec-${index}`} member={member} index={index} isExecutive />
            ))}
          </motion.div>
        </div>

        {/* Teams */}
        <div className="space-y-16">
          {teams.map((team, teamIndex) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Team Divider */}
              {teamIndex > 0 && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-border to-transparent rounded-full"></div>
              )}
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl font-bold font-poppins mb-8 text-center"
              >
                <span className="relative inline-block">
                  <span className="text-foreground">{team.name}</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                </span>
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
              >
                {team.members.map((member, index) => (
                  <MemberCard key={`${team.name}-${index}`} member={member} index={index} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStructure26;
