import { motion } from "framer-motion";

interface TeamMember {
  title: string;
  name?: string;
}

interface Team {
  name: string;
  members: TeamMember[];
}

const TeamStructure = () => {
  const executiveBoard: TeamMember[] = [
    { title: "President" },
    { title: "Vice President" },
    { title: "Vice President" },
  ];

  const teams: Team[] = [
    {
      name: "HR Team",
      members: [
        { title: "Head" },
        { title: "Vice Head" },
        { title: "Vice Head" },
        { title: "Performance Management Leader" },
        { title: "Performance Management Leader" },
        { title: "L&D Leader" },
      ],
    },
    {
      name: "Marketing Team",
      members: [
        { title: "Head" },
        { title: "Vice Head" },
        { title: "Leader" },
      ],
    },
    {
      name: "Presentation Team",
      members: [
        { title: "Head" },
        { title: "Leader" },
        { title: "Leader" },
      ],
    },
    {
      name: "PR & FR Team",
      members: [
        { title: "Head" },
        { title: "Vice Head" },
        { title: "Event Leader" },
        { title: "PR Leader" },
      ],
    },
    {
      name: "Multimedia Team",
      members: [
        { title: "Head" },
        { title: "Vice Head" },
        { title: "Vice Head" },
        { title: "Design Leader" },
        { title: "Videography Leader" },
      ],
    },
    {
      name: "Project Team",
      members: [
        { title: "Head" },
        { title: "Head" },
        { title: "Vice Head" },
        { title: "Vice Head" },
        { title: "R&D Leader" },
        { title: "Execution Leader" },
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
      {/* Profile Image Placeholder */}
      <div className="aspect-[4/5] bg-muted rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
        </div>
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
            Executive Board
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

export default TeamStructure;