import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
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
import NotFound from "./pages/NotFound";
import { Analytics } from '@vercel/analytics/react';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
