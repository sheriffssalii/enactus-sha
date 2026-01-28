import { motion } from "framer-motion";

interface TeamMember {
  title: string;
  name?: string;
  image?: string; // new field for profile image
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

  const MemberCard = ({ member, index }: { member: TeamMember; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card hover:bg-accent/5 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      {/* Profile Image */}
      <div className="aspect-square bg-muted rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.title}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
          </div>
        )}
      </div>

      {/* Position Title */}
      <h4 className="text-sm font-semibold text-foreground text-center leading-tight">
        {member.title}
      </h4>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-foreground">
            Our <span className="text-primary">Leadership</span> Team
          </h2>
          <p className="text-lg text-muted-foreground font-roboto max-w-2xl mx-auto">
            Meet the dedicated leaders driving innovation and impact at Enactus Shorouk Academy.
          </p>
        </motion.div>

        {/* Executive Board */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold font-poppins mb-8 text-center text-foreground"
          >
            Presidential Board
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {executiveBoard.map((member, index) => (
              <MemberCard key={`exec-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Teams */}
        <div className="space-y-16">
          {teams.map((team, teamIndex) => (
            <div key={team.name} className="border-t border-border pt-16 first:border-t-0 first:pt-0">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: teamIndex * 0.1 }}
                className="text-2xl font-bold font-poppins mb-8 text-center lg:text-left text-foreground"
              >
                {team.name}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {team.members.map((member, index) => (
                  <MemberCard key={`${team.name}-${index}`} member={member} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStructure26;
