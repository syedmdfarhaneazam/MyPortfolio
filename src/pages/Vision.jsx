import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { BrainCircuit, Rocket, BookOpen, CheckCircle } from "lucide-react";

const visionPoints = [
  {
    icon: CheckCircle,
    title: "Full Stack Developer",
    description:
      "Achieved proficiency across the MERN stack, building and deploying complete, scalable web applications from front to back.",
    isDone: true,
  },
  {
    icon: BrainCircuit,
    title: "Mastering AI & Machine Learning",
    description:
      "Deepen my understanding of neural networks, natural language processing, and computer vision to build intelligent, data-driven applications that solve real-world problems.",
  },
  {
    icon: Rocket,
    title: "Exploring DevOps & Scalability",
    description:
      "Gain expertise in cloud-native technologies, CI/CD pipelines, and system architecture to build and deploy robust, scalable, and resilient systems that can serve millions of users.",
  },
  {
    icon: BookOpen,
    title: "Contributing to Open Source",
    description:
      "Actively contribute to open-source projects that I admire and use. I believe in the power of community and want to give back by sharing my knowledge and code.",
  },
];

const Vision = () => {
  return (
    <PageWrapper title="Vision" description="My future goals and commitments.">
      <AnimatedText
        text="My Journey Ahead"
        as="h1"
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
      />
      <p className="text-center text-base sm:text-lg text-foreground/70 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
        My passion for technology is a journey of continuous learning and
        growth. Here are the commitments I've set for myself in my
        knowledge-seeking adventure.
      </p>
      <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">
        {visionPoints.map((point, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 sm:gap-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className={`p-4 sm:p-6 bg-primary/10 rounded-full ${index % 2 !== 0 ? "md:order-2" : ""} ${point.isDone ? "bg-green-500/20" : ""}`}
            >
              <point.icon
                className={`w-12 h-12 sm:w-16 sm:h-16 ${point.isDone ? "text-green-400" : "text-primary"}`}
              />
            </div>
            <div
              className={`flex-1 text-center md:text-left ${point.isDone ? "opacity-60" : ""}`}
            >
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-3 ${point.isDone ? "text-green-400 line-through" : "text-primary"}`}
              >
                {point.title}
              </h2>
              <p className="text-foreground/80 text-base sm:text-lg">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Vision;

