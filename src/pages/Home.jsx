import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  UserCheck,
  Wand2,
} from "lucide-react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Vision", path: "/vision" },
    { name: "Magics", path: "/magics" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <PageWrapper title="Home" description="Welcome to my personal portfolio.">
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center text-center overflow-visible rounded-3xl">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="A portrait of me"
            src="/myPics.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"></div>
        </div>
        <motion.div
          className="relative z-10 p-4 sm:p-8"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 200 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedText
            text="Hi, I'm Syed Md Farhan E Azam"
            as="h1"
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 text-glow px-4"
          />
          <AnimatedText
            text="A Creative Full-Stack Developer / Coding Enthusiast"
            as="h2"
            className="text-lg sm:text-2xl md:text-3xl text-primary mb-8 font-mono text-purple-400 px-4"
          />
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>View My Projects </span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/magics">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-magic w-full sm:w-auto"
              >
                <span className="btn-magic-span"></span>
                <div className="btn-magic-inner flex items-center gap-2 justify-center">
                  <Wand2 className="w-5 h-5 text-primary" />
                  <span>See My Magic Tricks</span>
                </div>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full sm:w-auto"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="mt-16 sm:mt-32">
        <AnimatedText
          text="About Me"
          as="h2"
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-glow"
        />
        <motion.ul
          className="max-w-2xl mx-auto space-y-4 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.li
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg"
          >
            <p className="text-base sm:text-lg text-foreground/90 font-medium">
              Result-driven full-stack developer proficient in React.js,
              Tailwind CSS, Node.js, FastAPI, Postgres and SQL.
            </p>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg"
          >
            <p className="text-base sm:text-lg text-foreground/90 font-medium">
              Solves complex problems (320+ LeetCode).
            </p>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg"
          >
            <p className="text-base sm:text-lg text-foreground/90 font-medium">
              Builds lean, scalable web products with clean architecture.
            </p>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-lg"
          >
            <p className="text-base sm:text-lg text-foreground/90 font-medium">
              Thrives in startup environments, owning end-to-end features and
              delivering measurable impact quickly.
            </p>
          </motion.li>
        </motion.ul>
        <section className="mt-16 sm:mt-24">
          <AnimatedText
            text="Explore More"
            as="h3"
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow"
          />
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full sm:w-auto px-6 py-3 rounded-xl border border-primary/20 bg-card/80 backdrop-blur-sm text-foreground hover:bg-primary/5 transition-colors"
                >
                  {link.name}
                </motion.button>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </PageWrapper>
  );
};

export default Home;
