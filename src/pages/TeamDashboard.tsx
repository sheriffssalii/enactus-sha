import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TeamMemberCard from '@/components/TeamMemberCard';
import { LogOut, Users, Trophy, Star } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  team: string;
  skill_rating: number;
  total_points: number;
}

interface TeamDashboardProps {
  teamName: string;
  teamDisplayName: string;
}

const TeamDashboard: React.FC<TeamDashboardProps> = ({ teamName, teamDisplayName }) => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { signOut, profile } = useAuth();

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('team', teamName)
        .order('total_points', { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTeamStats = () => {
    if (members.length === 0) return { totalPoints: 0, avgSkillRating: 0, topPerformer: null };
    
    const totalPoints = members.reduce((sum, member) => sum + member.total_points, 0);
    const avgSkillRating = members.reduce((sum, member) => sum + member.skill_rating, 0) / members.length;
    const topPerformer = members[0];
    
    return { totalPoints, avgSkillRating: Math.round(avgSkillRating * 10) / 10, topPerformer };
  };

  const { totalPoints, avgSkillRating, topPerformer } = getTeamStats();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{teamDisplayName} Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {profile?.email}
              </p>
            </div>
            <Button onClick={signOut} variant="outline" className="gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Total Members</span>
              </div>
              <div className="text-2xl font-bold">{members.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">Total Points</span>
              </div>
              <div className="text-2xl font-bold">{totalPoints}</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Avg Skill Rating</span>
              </div>
              <div className="text-2xl font-bold">{avgSkillRating}/10</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium">Top Performer</span>
              </div>
              <div className="text-lg font-bold">
                {topPerformer ? topPerformer.name : 'N/A'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} />
              Team Members Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            {members.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No team members found for {teamDisplayName}
              </div>
            ) : (
              <div className="space-y-4">
                {members.map((member, index) => (
                  <TeamMemberCard 
                    key={member.id} 
                    member={member} 
                    rank={index + 1}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TeamDashboard;