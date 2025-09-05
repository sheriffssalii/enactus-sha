import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import TeamDashboard from '@/pages/TeamDashboard';

const MarketingTeam: React.FC = () => {
  return (
    <ProtectedRoute allowedRole="marketing">
      <TeamDashboard teamName="marketing" teamDisplayName="Marketing Team" />
    </ProtectedRoute>
  );
};

export default MarketingTeam;