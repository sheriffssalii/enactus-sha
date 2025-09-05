import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import TeamDashboard from '@/pages/TeamDashboard';

const MultimediaTeam: React.FC = () => {
  return (
    <ProtectedRoute allowedRole="multimedia">
      <TeamDashboard teamName="multimedia" teamDisplayName="Multimedia Team" />
    </ProtectedRoute>
  );
};

export default MultimediaTeam;