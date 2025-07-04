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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <InfoCard
            icon={Briefcase}
            title="Experience"
            description="1 year of experience in web development, working in internship programs and startups to deliver high-quality products."
          />
          <InfoCard
            icon={GraduationCap}
            title="Education"
            description="Persuing Bachelor's Degree in Computer Science from Narula Institute Of Technology. Focused on software engineering and AI."
          />
          <InfoCard
            icon={UserCheck}
            title="Why Choose Me?"
            description="I'm a passionate problem-solver dedicated to writing clean, efficient code and creating intuitive user experiences."
          />
        </div>
      </section>
    </PageWrapper>
  );
};

const InfoCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-card/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-primary/10 shadow-lg text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{
      y: -10,
      boxShadow:
        "0 20px 25px -5px hsl(var(--primary) / 0.1), 0 8px 10px -6px hsl(var(--primary) / 0.1)",
    }}
  >
    <div className="inline-block p-3 sm:p-4 bg-primary/10 rounded-full mb-4">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-foreground/70">{description}</p>
  </motion.div>
);

export default Home;
