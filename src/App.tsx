import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SkipLink from "./components/SkipLink";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import History from "./pages/History";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import Season2025 from "./pages/Season2025";
import Season2026 from "./pages/Season2026";
import Login from "./pages/Login";
import PresentationTeam from "./pages/PresentationTeam";
import ProjectManagementTeam from "./pages/ProjectManagementTeam";
import HRTeam from "./pages/HRTeam";
import MarketingTeam from "./pages/MarketingTeam";
import MultimediaTeam from "./pages/MultimediaTeam";
import PRFinanceTeam from "./pages/PRFinanceTeam";
import NotFound from "./pages/NotFound";
import { Analytics } from '@vercel/analytics/react';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <SkipLink />
            <div className="min-h-screen flex flex-col font-roboto transition-colors duration-300">
              <Navigation />
              <main id="main-content" className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/join" element={<JoinUs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/season2025" element={<Season2025 />} />
                  <Route path="/season2026" element={<Season2026 />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/presentation" element={<PresentationTeam />} />
                  <Route path="/project-management" element={<ProjectManagementTeam />} />
                  <Route path="/hr" element={<HRTeam />} />
                  <Route path="/marketing" element={<MarketingTeam />} />
                  <Route path="/multimedia" element={<MultimediaTeam />} />
                  <Route path="/pr-finance" element={<PRFinanceTeam />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
          <Analytics />
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
