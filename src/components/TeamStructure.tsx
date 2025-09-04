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

const TeamStructure = () => {
  const executiveBoard: TeamMember[] = [
    { title: "President", image: "President.jpg" },
    { title: "Vice President", image: "VicePresident.jpg" },
    { title: "Vice President", image: "VicePresident2.jpg" },
  ];

  const teams: Team[] = [
    {
      name: "HR Team",
      members: [
        { title: "Head", image: "HRHead.jpg" },
        { title: "Vice Head", image: "HRViceHead.jpg" },
        { title: "Vice Head", image: "HRViceHead2.jpg" },
        { title: "Performance Management Leader", image: "PMLeader.jpg" },
        { title: "Performance Management Leader", image: "PMLeader2.jpg" },
        { title: "L&D Leader", image: "L&DLeader.jpg" },
      ],
    },
    {
      name: "Marketing Team",
      members: [
        { title: "Head", image: "MarketingHead.jpg" },
        { title: "Vice Head", image: "MarketingViceHead.jpg" },
        { title: "Leader", image: "MarketingLeader.jpg" },
      ],
    },
    {
      name: "Presentation Team",
      members: [
        { title: "Head", image: "PresentationHead.jpg" },
        { title: "Leader", image: "PresentationLeader.jpg" },
        { title: "Leader", image: "PresentationLeader2.jpg" },
      ],
    },
    {
      name: "PR & FR Team",
      members: [
        { title: "Head", image: "PRHead.jpg" },
        { title: "Vice Head", image: "PRViceHead.jpg" },
        { title: "Event Leader", image: "EventLeader.jpg" },
        { title: "PR Leader", image: "PRLeader.jpg" },
      ],
    },
    {
      name: "Multimedia Team",
      members: [
        { title: "Head", image: "MultimediaHead.jpg" },
        { title: "Vice Head", image: "MMViceHead.jpg" },
        { title: "Vice Head", image: "MMViceHead2.jpg" },
        { title: "Design Leader", image: "DesignLeader.jpg" },
        { title: "Videography Leader", image: "VideoLeader.jpg" },
      ],
    },
    {
      name: "Project Team",
      members: [
        { title: "Head", image: "ProjectHead.jpg" },
        { title: "Head", image: "ProjectHead2.jpg" },
        { title: "Vice Head", image: "ProjectViceHead.jpg" },
        { title: "Vice Head", image: "ProjectViceHead2.jpg" },
        { title: "R&D Leader", image: "R&DLeader.jpg" },
        { title: "Execution Leader", image: "ExecutionLeader.jpg" },
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

export default TeamStructure;
