import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// ⬇️ shadcn/ui imports for dropdown
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSeasonsOpen, setIsSeasonsOpen] = useState(false); // mobile seasons toggle
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/teams", label: "Teams" },
    { path: "/history", label: "Our History" },
    { path: "/join", label: "Join Us" },
    { path: "/contact", label: "Contact" },
    {
      label: "Seasons",
      children: [
        { path: "/season2025", label: "2025" },
        { path: "/season2026", label: "2026" },
      ],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img
                src="/EnactusLogo.png"
                alt="Enactus Shorouk Academy Logo"
                className="w-full h-full rounded-full object-contain"
                loading="eager"
              />
            </div>
            <span className="font-poppins font-semibold text-lg text-foreground">
              Enactus SHA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.children ? (
                // ✅ Seasons dropdown (click-to-open)
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="font-poppins font-medium flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem asChild key={child.path}>
                        <Link
                          to={child.path}
                          className={`w-full ${
                            isActive(child.path)
                              ? "text-primary font-semibold"
                              : "text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-poppins font-medium transition-all duration-200 relative ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-secondary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
              role="menu"
              aria-labelledby="mobile-menu-button"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsSeasonsOpen(!isSeasonsOpen)}
                        className="w-full flex justify-between items-center px-4 py-2 font-poppins font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isSeasonsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isSeasonsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-2 font-poppins text-sm rounded-md transition-colors ${
                                  isActive(child.path)
                                    ? "text-primary bg-primary/10"
                                    : "text-foreground hover:text-primary hover:bg-primary/5"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                      className={`block px-4 py-2 font-poppins font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
                        isActive(item.path)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
