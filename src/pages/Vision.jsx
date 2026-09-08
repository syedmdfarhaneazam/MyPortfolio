import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    Code,
    Database,
    Server,
    Terminal,
    BarChart3,
    Brain,
    MessageSquare,
    Wand2,
    Check,
} from "lucide-react";

// Each pointer now carries its own `done` status.
// done: true  -> rendered green (achieved)
// done: false -> rendered purple (aspiration / in progress)
const progressPoints = [
    {
        title: "Frontend Mastery",
        icon: Code,
        pointers: [
            { name: "ReactJs", done: true },
            { name: "NextJs", done: true },
            { name: "Redux", done: true },
            { name: "PWA", done: true },
            { name: "Tailwind", done: true },
            { name: "Framer Motion", done: true },
            { name: "GSAP", done: true },
            { name: "Matter.js", done: true },
        ],
    },
    {
        title: "Backend Development",
        icon: Server,
        pointers: [
            { name: "FastApi", done: true },
            { name: "Restful APIs", done: true },
            { name: "WebSockets", done: true },
        ],
    },
    {
        title: "Database Management",
        icon: Database,
        pointers: [
            { name: "SQL", done: true },
            { name: "PostgreSQL", done: true },
            { name: "IndexedDB", done: true },
            { name: "Subqueries", done: true },
            { name: "Window Functions", done: true },
        ],
    },
    {
        title: "DevOps Fundamentals",
        icon: Terminal,
        pointers: [
            { name: "Git", done: true },
            { name: "GitHub", done: true },
            { name: "Docker", done: true },
            { name: "Jenkins", done: false },
            { name: "Compile", done: false },
            { name: "Unit Testing", done: true },
            { name: "Build Pipeline", done: false },
            { name: "GitHub Tool Configuration", done: false },
            { name: "Terraform", done: false },
            { name: "Grafana", done: false },
        ],
    },
    {
        title: "Basic Data Analytics",
        icon: BarChart3,
        pointers: [
            { name: "Pandas", done: true },
            { name: "NumPy", done: true },
            { name: "Matplotlib", done: true },
            { name: "Seaborn", done: true },
            { name: "Data Visualization", done: true },
            { name: "Statistical Analysis", done: true },
        ],
    },
    {
        title: "Machine Learning",
        icon: Brain,
        pointers: [
            { name: "Supervised Learning", done: true },
            { name: "Unsupervised Learning", done: true },
            { name: "Scikit-learn", done: true },
            { name: "Regression", done: true },
            { name: "Classification", done: true },
            { name: "Clustering", done: true },
        ],
    },
    {
        title: "Deep Learning",
        icon: BrainCircuit,
        pointers: [
            { name: "Neural Networks", done: false },
            { name: "TensorFlow", done: false },
            { name: "PyTorch", done: false },
            { name: "CNNs", done: false },
            { name: "RNNs", done: false },
            { name: "Transfer Learning", done: false },
        ],
    },
    {
        title: "Natural Language Processing",
        icon: MessageSquare,
        pointers: [
            { name: "Tokenization", done: false },
            { name: "spaCy", done: false },
            { name: "NLTK", done: false },
            { name: "Transformers", done: false },
            { name: "BERT", done: false },
            { name: "Sentiment Analysis", done: false },
        ],
    },
    {
        title: "Generative AI",
        icon: Wand2,
        pointers: [
            { name: "GANs", done: false },
            { name: "Diffusion Models", done: false },
            { name: "LLMs", done: false },
            { name: "Prompt Engineering", done: false },
            { name: "Fine-tuning", done: false },
        ],
    },
];

// Overall completion across every pointer, used to color the timeline itself.
const totalPointers = progressPoints.reduce(
    (sum, c) => sum + c.pointers.length,
    0,
);
const donePointers = progressPoints.reduce(
    (sum, c) => sum + c.pointers.filter((p) => p.done).length,
    0,
);
const completionPercent = Math.round((donePointers / totalPointers) * 100);

const Vision = () => {
    return (
        <PageWrapper title="Vision" description="My progress and future goals.">
            <AnimatedText
                text="Progress & Vision"
                as="h1"
                className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
            />

            <p className="text-center text-base sm:text-lg text-foreground/70 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
                Tracking my technical journey: achievements in green with ticks,
                and aspirations in purple. A clean left-aligned timeline.
            </p>

            <div className="relative max-w-4xl mx-auto pl-10 sm:pl-20">
                {/* Vertical timeline line — colors itself by overall completion */}
                <motion.div
                    className="absolute top-0 left-2 sm:left-4 w-1 rounded-full"
                    style={{
                        background: `linear-gradient(to bottom, #4ade80 0%, #4ade80 ${Math.max(
                            completionPercent - 4,
                            0,
                        )}%, #a855f7 ${Math.min(completionPercent + 4, 100)}%, #a855f7 100%)`,
                    }}
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                <div className="space-y-16">
                    {progressPoints.map((point, index) => {
                        const doneCount = point.pointers.filter(
                            (p) => p.done,
                        ).length;
                        const total = point.pointers.length;
                        const categoryDone = doneCount === total;
                        const statusLabel = categoryDone
                            ? "Achieved ✓"
                            : doneCount > 0
                              ? `${doneCount}/${total} Done`
                              : "In Progress...";

                        return (
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
                                {/* Icon on the timeline */}
                                <div className="relative flex flex-col items-center">
                                    <div
                                        className={`relative p-3 rounded-full border-2 shadow-md transition-all duration-300 ${
                                            categoryDone
                                                ? "bg-green-50 border-green-400 hover:bg-green-100"
                                                : "bg-purple-50/10 border-purple-400/40 hover:bg-purple-100/10"
                                        }`}
                                    >
                                        <point.icon
                                            className={`w-6 h-6 ${
                                                categoryDone
                                                    ? "text-green-600"
                                                    : "text-purple-500"
                                            }`}
                                        />

                                        {categoryDone && (
                                            <Check className="absolute -top-1 -right-1 w-4 h-4 text-green-500 bg-background rounded-full shadow-sm border" />
                                        )}
                                    </div>

                                    {!categoryDone && (
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

                                {/* Text */}
                                <div className="flex-1">
                                    <h2
                                        className={`text-2xl sm:text-3xl font-bold mb-2 ${
                                            categoryDone
                                                ? "text-green-400"
                                                : "text-purple-400"
                                        }`}
                                    >
                                        {point.title}
                                    </h2>

                                    <p
                                        className={`text-sm font-medium mb-4 ${
                                            categoryDone
                                                ? "text-green-600"
                                                : "text-purple-500"
                                        }`}
                                    >
                                        {statusLabel}
                                    </p>

                                    <ul className="space-y-2">
                                        {point.pointers.map((p, i) => (
                                            <motion.li
                                                key={i}
                                                className={`flex items-center gap-3 text-base sm:text-lg ${
                                                    p.done
                                                        ? "text-green-400"
                                                        : "text-purple-400"
                                                }`}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: i * 0.05,
                                                }}
                                            >
                                                <span
                                                    className={`w-2.5 h-2.5 rounded-full ${
                                                        p.done
                                                            ? "bg-green-400"
                                                            : "bg-purple-500"
                                                    }`}
                                                />
                                                {p.name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Vision;
