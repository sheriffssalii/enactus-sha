import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  id: string;
  name: string;
  team: string;
  skill_rating: number;
  total_points: number;
}

interface TeamMemberCardProps {
  member: TeamMember;
  rank: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, rank }) => {
  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500';
    if (rank === 2) return 'bg-gray-400';
    if (rank === 3) return 'bg-amber-600';
    return 'bg-muted';
  };

  const getSkillRatingColor = (rating: number) => {
    if (rating >= 9) return 'bg-green-500';
    if (rating >= 7) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full ${getRankColor(rank)} flex items-center justify-center text-white font-bold text-sm`}>
              {rank}
            </div>
            <div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground capitalize">
                {member.team.replace('_', ' ')}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {member.total_points}
            </div>
            <div className="text-xs text-muted-foreground">points</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Skill Rating</span>
          <Badge 
            variant="secondary" 
            className={`${getSkillRatingColor(member.skill_rating)} text-white`}
          >
            {member.skill_rating}/10
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;