import React from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import TeamDashboard from '@/pages/TeamDashboard';

const ProjectManagementTeam: React.FC = () => {
  return (
    <ProtectedRoute allowedRole="project_management">
      <TeamDashboard teamName="project_management" teamDisplayName="Project Management Team" />
    </ProtectedRoute>
  );
};

export default ProjectManagementTeam;