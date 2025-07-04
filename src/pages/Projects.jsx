import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const projectsData = {
  mern: [
    {
      title: "Personal Portfolio",
      description:
        "My personal portfolio that your are currently on , with weather like theme and some UI algorithms , Play arround and enjoy.",
      pros: [
        "Weather support",
        "Text Animation",
        "GSAP",
        "Framer Motion",
        "Canvas JS",
        "Matter JS",
      ],
      future: ["Foot fall", "Google Analytics"],
      git: "https://github.com/syedmdfarhaneazam/MyPortfolio",
      live: "#",
    },
    {
      title: "Advanced Notes Master",
      description:
        "A full-Customizable online storage of notes , with coding windows , auto indentation , auto formating , hovering PIP display to write your notes while staying full screen on your lecture.",
      pros: [
        "16 Themes",
        "32 Font Colors",
        "Coding windows",
        "Import / Export",
        "Secure",
        "Picture in Picture",
      ],
      future: [
        "LLM integration",
        "Audio-to-Text",
        "Activity dashboard",
        "Compete window",
      ],
      git: "https://github.com/syedmdfarhaneazam/myNotes",
      live: "https://my-notes-three-flax.vercel.app/",
    },
    {
      title: "Study Portal",
      description:
        "A platform for Teachers and Students to share and manage tasks and reminders for events.",
      pros: [
        "Role Based",
        "Add Tasks",
        "Add Reminders",
        "Active User List",
        "JWT-Secure",
        "NodeMailer",
      ],
      future: ["Live chat", "Notifications", "Better UI", "Theme Support"],
      git: "https://github.com/syedmdfarhaneazam/studyPortal",
      live: "https://github.com/syedmdfarhaneazam/studyPortal",
    },
    {
      title: "Quiz Template",
      description:
        "A simple quiz template with interactive background and timmer for a fair quiz.",
      pros: [
        "Interactive",
        "User Friendly",
        "Good for A quick Quiz",
        "Result Display",
        "Chart",
      ],
      future: ["Import Question", "Reporting", "Theme Support", "More Routes"],
    },
    {
      title: "Challenge Tracker",
      description:
        "ChallengeTracker helps you log, track, and analyze daily personal challenges, turning small efforts into big wins. Visualize progress, build habits, and uncover the value of your growth.",
      pros: [
        "Tracks And Stores",
        "Automated email reminders",
        "Framer Motion",
        "Gsap",
      ],
      future: ["Tags for challenges", "Resource management", "Theme Support"],
      git: "https://github.com/syedmdfarhaneazam/ChallengesTracker",
      live: "https://challenges-tracker-ten.vercel.app/",
    },
  ],
  python: [
    {
      title: "Snake Game",
      description: "A app using Tkinter for basic python Game.",
      pros: ["Easy To Use", "For learning", "Starters"],
      future: ["Better Canvas", "Better UI", "Levels"],
      git: "https://github.com/syedmdfarhaneazam/snakeFood",
      live: "https://github.com/syedmdfarhaneazam/snakeFood",
    },
  ],
  shell: [
    {
      title: "Advanced Calculator",
      description:
        "From the Ease of my WSL Terminal , I needed a calculator to save varibles as I calculate for future reference. Alighned to the needs of the students",
      pros: [
        "Cron job integration",
        "All Scientific Functions",
        "Interactive",
        "Terminal Support",
      ],
      future: [
        "Incremental backups",
        "Cloud storage support",
        "Auto Complete",
        "Auto Suggestions",
      ],
      git: "https://github.com/syedmdfarhaneazam/AdavancedCalculator",
      live: "https://github.com/syedmdfarhaneazam/AdavancedCalculator",
    },
  ],
  java: [
    {
      title: "DSA Implementations",
      description:
        "A repo where I have stored my DSA solutions and integrations to showcase my understanding of Java.",
      pros: ["Clean Module architecture", "Class Based", "Easy to Configure"],
      future: ["Advanced Concepts", "Complex Algos"],
    },
  ],
};

const ProjectCard = ({ title, description, pros, future, git, live }) => {
  return (
    <motion.div
      className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-primary/10 shadow-lg hover:border-primary/30 transition-all duration-300 group w-full"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px hsl(var(--primary) / 0.1), 0 8px 10px -6px hsl(var(--primary) / 0.1)",
      }}
    >
      <div className="relative">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-primary">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-foreground/80 mb-4 min-h-[60px] sm:h-24">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">
              Features
            </h4>
            <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/70 space-y-1">
              {pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">
              Future Scope
            </h4>
            <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/70 space-y-1">
              {future.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-auto pt-4 border-t border-primary/10">
          <a href={git} target="_blank" rel="noreferrer" className="flex-1">
            <button className="flex items-center justify-center space-x-2 text-foreground/70 hover:text-primary transition-colors w-full py-2 px-3 rounded-lg hover:bg-accent/50">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">GitHub</span>
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href={live} className="flex-1">
            <button className="flex items-center justify-center space-x-2 text-foreground/70 hover:text-primary transition-colors w-full py-2 px-3 rounded-lg hover:bg-accent/50">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Live Demo</span>
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { toast } = useToast();
  const handleMoreClick = () => {
    toast({
      title: "🚧 More Projects Coming Soon!",
      description:
        "I'm working on adding more exciting projects to my portfolio.",
    });
  };

  return (
    <PageWrapper
      title="Projects"
      description="A showcase of my work and projects."
    >
      <AnimatedText
        text="My Creations"
        as="h1"
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
      />
      <p className="text-center text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Here are some of the projects I've passionately built. Each one
        represents a unique challenge and a learning opportunity.
      </p>

      <ProjectSection
        title="MERN Stack Projects"
        projects={projectsData.mern}
      />

      <div className="text-center my-8 sm:my-12">
        <a
          href="https://github.com/syedmdfarhaneazam/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
            And More...
          </motion.button>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <ProjectSection
          title="Python"
          projects={projectsData.python}
          singleColumn
        />
        <ProjectSection
          title="Shell Scripting"
          projects={projectsData.shell}
          singleColumn
        />
        <ProjectSection
          title="Java"
          projects={projectsData.java}
          singleColumn
        />
      </div>
    </PageWrapper>
  );
};

const ProjectSection = ({ title, projects, singleColumn = false }) => (
  <section className="mb-12 sm:mb-16">
    <AnimatedText
      text={title}
      as="h2"
      className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary"
    />
    <div
      className={`grid gap-6 sm:gap-8 ${singleColumn ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
    >
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  </section>
);

export default Projects;
