import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import TeamDashboard from '@/pages/TeamDashboard';

const PRFinanceTeam: React.FC = () => {
  return (
    <ProtectedRoute allowedRole="pr_finance">
      <TeamDashboard teamName="pr_finance" teamDisplayName="PR & Finance Team" />
    </ProtectedRoute>
  );
};

export default PRFinanceTeam;