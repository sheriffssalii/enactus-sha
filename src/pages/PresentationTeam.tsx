import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import TeamDashboard from '@/pages/TeamDashboard';

const PresentationTeam: React.FC = () => {
  return (
    <ProtectedRoute allowedRole="presentation">
      <TeamDashboard teamName="presentation" teamDisplayName="Presentation Team" />
    </ProtectedRoute>
  );
};

export default PresentationTeam;