import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Sun,
  Moon,
  Cloud,
  Snowflake,
  Leaf,
  Zap,
  Menu,
  X,
  Download,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, weather, toggleWeather } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    try {
      // Create a link element
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "AZAM_Resume.pdf"; // This will be the downloaded file name
      link.target = "_blank";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success toast
      toast({
        title: "📄 Resume Downloaded!",
        description: "Thanks for downloading my resume. Let's connect!",
      });
    } catch (error) {
      // Show error toast if download fails
      toast({
        title: "❌ Download Failed",
        description:
          "Sorry, there was an issue downloading the resume. Please try again.",
      });
      console.error("Resume download error:", error);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Vision", path: "/vision" },
    { name: "Magics", path: "/magics" },
    { name: "Contact", path: "/contact" },
  ];

  const weatherOptions = [
    { name: "clear", icon: Zap },
    { name: "snow", icon: Snowflake },
    { name: "rain", icon: Cloud },
    { name: "autumn", icon: Leaf },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      initial={{ y: -100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
    >
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="mx-auto flex justify-between items-center gap-4 sm:gap-8 bg-card/80 backdrop-blur-sm rounded-full shadow-lg shadow-primary/10 border border-white/10 px-3 sm:px-4 py-2">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-primary text-glow pl-2"
            onClick={closeMobileMenu}
          >
            AZAM
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-full text-sm font-medium ${
                    isActive ? "bg-primary/10 text-primary" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50">
              {weatherOptions.map((opt) => (
                <button
                  key={opt.name}
                  onClick={() => toggleWeather(opt.name)}
                  className={`p-1.5 rounded-full transition-colors ${
                    weather === opt.name
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  <opt.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2 !rounded-full flex items-center gap-2"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mt-4 bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-primary/10 border border-white/10 p-4 lg:hidden"
            >
              <nav className="flex flex-col gap-2 mb-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `text-foreground hover:text-primary transition-colors duration-300 px-4 py-3 rounded-xl text-base font-medium ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent/50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">
                    Weather Effects:
                  </span>
                  <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50">
                    {weatherOptions.map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => setWeather(opt.name)}
                        className={`p-2 rounded-full transition-colors ${
                          weather === opt.name
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        }`}
                      >
                        <opt.icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
                <motion.button
                  onClick={() => {
                    handleResumeDownload();
                    closeMobileMenu();
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-sm px-4 py-3 !rounded-xl w-full flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
