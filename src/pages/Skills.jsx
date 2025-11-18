import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        pointers: ["DSA", "Competitive Programming"],
        color: "from-red-500/20 to-red-500/5",
      },
      {
        name: "JavaScript",
        pointers: ["React", "Async/Await", "DOM Manipulation"],
        color: "from-yellow-500/20 to-yellow-500/5",
      },
      {
        name: "Python",
        pointers: ["For FastApi"],
        color: "from-blue-500/20 to-blue-500/5",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        pointers: ["Hooks", "Context API", "Redux"],
        color: "from-cyan-500/20 to-cyan-500/5",
      },
      {
        name: "Next.js",
        pointers: ["SSR", "API Routes", "File-based Routing"],
        color: "from-gray-500/20 to-gray-500/5",
      },
      {
        name: "Tailwind CSS",
        pointers: [
          "Utility-First",
          "Standardization of styles",
          "Customization",
        ],
        color: "from-sky-500/20 to-sky-500/5",
      },
      {
        name: "Framer Motion",
        pointers: ["Declarative Animations", "Gestures", "Layout Animations"],
        color: "from-violet-500/20 to-violet-500/5",
      },
      {
        name: "GSAP",
        pointers: ["Timelines", "ScrollTrigger", "Text Animations"],
        color: "from-lime-500/20 to-lime-500/5",
      },
      {
        name: "PWA",
        pointers: ["Cross Platform Support", "Offline Support"],
        color: "from-pink-500/20 to-pink-500/5",
      },
      {
        name: "Matter.js",
        pointers: ["Physics Simulations", "Interactive Graphics"],
        color: "from-indigo-500/20 to-indigo-500/5",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "FastAPI",
        pointers: ["Async APIs"],
        color: "from-emerald-500/20 to-emerald-500/5",
      },
      {
        name: "RESTful APIs",
        pointers: ["Design Principles", "Authentication", "CORS"],
        color: "from-green-500/20 to-green-500/5",
      },
      {
        name: "WebSockets",
        pointers: ["Real-time Communication", "Event Handling"],
        color: "from-purple-500/20 to-purple-500/5",
      },
      {
        name: "PostgreSQL",
        pointers: ["Windows", "Indexing", "Triggers"],
        color: "from-blue-600/20 to-blue-600/5",
      },
      {
        name: "SQL & IndexedDB",
        pointers: ["Database Design", "Client-side Storage"],
        color: "from-orange-500/20 to-orange-500/5",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Git & GitHub",
        pointers: ["Branching", "Merging", "Collaboration"],
        color: "from-red-600/20 to-red-600/5",
      },
      {
        name: "Neovim",
        pointers: ["My Custom IDE", "Plugins", "Fast Development"],
        color: "from-slate-500/20 to-slate-500/5",
      },
      {
        name: "Docker",
        pointers: ["Containerization", "Dockerfile", "Compose"],
        color: "from-blue-400/20 to-blue-400/5",
      },
      {
        name: "Linux & Shell",
        pointers: ["Basic Commands", "Bash Scripting", "Cron Jobs"],
        color: "from-indigo-400/20 to-indigo-400/5",
      },
    ],
  },
  {
    title: "Cloud",
    skills: [
      {
        name: "Google Cloud Platform",
        pointers: [
          "VM Instance Management",
          "Firewall Access",
          "Foundational Knowledge",
        ],
        color: "from-teal-500/20 to-teal-500/5",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const SkillCard = ({ name, pointers, color, index }) => (
  <motion.div
    variants={itemVariants}
    className={`relative rounded-2xl p-4 sm:p-6 border border-primary/10 bg-gradient-to-br ${color} backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/20`}
    whileHover={{
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      zIndex: 10,
      borderColor: "hsl(var(--primary))",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br opacity-0 hover:opacity-100 transition-opacity duration-300 from-primary/5 to-secondary/5 rounded-2xl"></div>
    <div className="relative z-10">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground drop-shadow-sm">
        {name}
      </h3>
      <ul className="space-y-1 text-sm sm:text-base text-foreground/80">
        {pointers.map((p, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            className="flex items-center gap-2 pl-2"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
            {p}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <PageWrapper
      title="Skills"
      description="My technical skills and expertise."
    >
      <AnimatedText
        text="My Arsenal"
        as="h1"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-glow"
      />
      <p className="text-center text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        A collection of technologies and tools I use to bring ideas to life. I'm
        always learning and expanding my toolkit.
      </p>
      <div className="space-y-12 sm:space-y-16">
        {sections.map((section, secIndex) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: secIndex * 0.1 }}
            className="w-full"
          >
            <AnimatedText
              text={section.title}
              as="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-glow text-primary"
            />
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {section.skills.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Skills;
