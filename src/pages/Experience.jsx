import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";

const experiences = [
  {
    title: "FULL STACK INTERN @ noCnxTechnologies",
    duration: "05/2025 - 09/2025",
    location: "Pune, India",
    isDone: true,
    icon: Briefcase,
    pointers: [
      "Developing full-stack web applications using React, Node.js, Express, and MongoDB.",
      "Designed responsive UIs using Tailwind CSS and React Router.",
      "Managed state efficiently with Redux Toolkit.",
      "Wrote clean, modular code aligned with industry standards.",
      "Selected in a Generative AI and LLM learning program to expand technical expertise.",
    ],
  },
  {
    title: "FULL STACK INTERN @ TheVectorX",
    duration: "09/2025 - Present",
    location: "Remote",
    isDone: false,
    icon: Briefcase,
    pointers: [
      "Create components for long-term maintainability.",
      "Migrating Flutter code in Dart to React + JavaScript.",
      "Optimize cross-device UI performance.",
      "Integrate frontend with FastAPI endpoints.",
      "Role-based authentication system for different flows.",
      "Build Backend API using FastAPI and PostgreSQL.",
      "Expanding my skills on Google Cloud Platform.",
    ],
  },
];

const Experience = () => {
  return (
    <PageWrapper title="Experience" description="My professional journey.">
      <AnimatedText
        text="Experience Timeline"
        as="h1"
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
      />

      <p className="text-center text-base sm:text-lg text-foreground/70 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
        A timeline of my professional experience — completed roles in green and
        ongoing roles in purple.
      </p>

      <div className="relative max-w-4xl mx-auto pl-10 sm:pl-20">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute top-0 left-2 sm:left-4 w-1 bg-gradient-to-b from-green-400 via-green-400/70 to-purple-500 rounded-full"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "100%", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {/* Icon */}
              <div className="relative flex flex-col items-center">
                <div
                  className={`relative p-3 rounded-full border-2 shadow-md transition-all duration-300 ${
                    exp.isDone
                      ? "bg-green-50 border-green-400 hover:bg-green-100"
                      : "bg-purple-50/10 border-purple-400/40 hover:bg-purple-100/10"
                  }`}
                >
                  <exp.icon
                    className={`w-6 h-6 ${
                      exp.isDone ? "text-green-600" : "text-purple-500"
                    }`}
                  />
                  {exp.isDone && (
                    <Check className="absolute -top-1 -right-1 w-4 h-4 text-green-500 bg-background rounded-full shadow-sm border" />
                  )}
                </div>
                {!exp.isDone && (
                  <motion.div
                    className="mt-2 w-2 h-2 bg-purple-500 rounded-full shadow-sm"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              {/* Text Block */}
              <div className="flex-1">
                <h2
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    exp.isDone ? "text-green-400" : "text-purple-400"
                  }`}
                >
                  {exp.title}
                </h2>

                <p className="text-sm text-foreground/70 mb-1">
                  {exp.duration}
                </p>
                <p className="text-sm text-foreground/70 mb-4">
                  {exp.location}
                </p>

                <ul className="space-y-2">
                  {exp.pointers.map((p, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-base sm:text-lg text-foreground/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          exp.isDone ? "bg-green-400" : "bg-purple-500"
                        }`}
                      />
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
