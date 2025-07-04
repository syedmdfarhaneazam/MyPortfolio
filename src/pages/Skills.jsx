"use client";
import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const skillsData = [
  {
    name: "React",
    pointers: ["Libraries", "Context API", "Redux"],
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    name: "Node.js",
    pointers: ["Express.js", "REST APIs", "CORS/JWT"],
    color: "from-green-500/20 to-green-500/5",
  },
  {
    name: "MongoDB",
    pointers: ["Mongoose", "Aggregation", "Indexing"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    name: "JavaScript",
    pointers: ["ES6+", "Async/Await", "DOM"],
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    name: "CSS3",
    pointers: ["Flexbox", "Grid", "Animations"],
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    name: "Java",
    pointers: ["Core Java", "DSA"],
    color: "from-red-500/20 to-red-500/5",
  },
  {
    name: "Git",
    pointers: ["Branching", "Merging", "Rebasing"],
    color: "from-red-600/20 to-red-600/5",
  },
  {
    name: "HTML5",
    pointers: ["Semantic HTML", "Accessibility", "Canvas"],
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    name: "TailwindCSS",
    pointers: ["Utility-First", "JIT Compilation", "Customization"],
    color: "from-sky-500/20 to-sky-500/5",
  },
  {
    name: "Python",
    pointers: ["Flask", "Pandas", "SQL"],
    color: "from-yellow-400/20 to-yellow-400/5",
  },
  {
    name: "GraphQL",
    pointers: ["Apollo Client", "Queries", "Mutations"],
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    name: "NEOVIM",
    pointers: ["Plugins", "Lazy", "Custom IDE"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    name: "GSAP",
    pointers: ["Timelines", "ScrollTrigger", "Text Animations"],
    color: "from-lime-500/20 to-lime-500/5",
  },
  {
    name: "Framer Motion",
    pointers: ["Declarative Animations", "Gestures", "Layout Animations"],
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    name: "Shell Scripting",
    pointers: ["Bash", "Automation", "Cron Jobs"],
    color: "from-gray-500/20 to-gray-500/5",
  },
];

const SkillCard = ({ name, pointers, color, index }) => (
  <motion.div
    className={`rounded-2xl p-4 sm:p-6 border border-primary/10 bg-gradient-to-br ${color} transition-all duration-300`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ scale: 1.05, zIndex: 10, borderColor: "hsl(var(--primary))" }}
  >
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
      {name}
    </h3>
    <ul className="space-y-1 text-sm sm:text-base text-foreground/80">
      {pointers.map((p, i) => (
        <li key={i}>- {p}</li>
      ))}
    </ul>
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
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
      />
      <p className="text-center text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        A collection of technologies and tools I use to bring ideas to life. I'm
        always learning and expanding my toolkit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Skills;
