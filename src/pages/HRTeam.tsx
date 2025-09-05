import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import TeamDashboard from '@/pages/TeamDashboard';

const HRTeam: React.FC = () => {
  return (
    <ProtectedRoute allowedRole="hr">
      <TeamDashboard teamName="hr" teamDisplayName="Human Resources Team" />
    </ProtectedRoute>
  );
};

export default HRTeam;