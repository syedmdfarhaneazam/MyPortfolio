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
                "My personal portfolio with a weather-inspired theme and interactive UI effects. Explore the animations and interactive elements throughout the site.",
            pros: [
                "Weather Support",
                "Text Animation",
                "GSAP",
                "Framer Motion",
                "Canvas JS",
                "Matter JS",
            ],
            future: ["Footfall Analytics", "Google Analytics"],
            git: "https://github.com/syedmdfarhaneazam/MyPortfolio",
            live: "#",
        },
        {
            title: "Advanced Notes Master",
            description:
                "A fully customizable online note-taking platform with coding windows, auto-indentation, auto-formatting, and Picture-in-Picture support for taking notes while attending lectures.",
            pros: [
                "16 Themes",
                "32 Font Colors",
                "Coding Windows",
                "Import / Export",
                "Secure Storage",
                "Picture-in-Picture",
            ],
            future: [
                "LLM Integration",
                "Audio-to-Text",
                "Activity Dashboard",
                "Competition Window",
            ],
            git: "https://github.com/syedmdfarhaneazam/myNotes",
            live: "https://my-notes-three-flax.vercel.app/",
        },
        {
            title: "Study Portal",
            description:
                "A platform for teachers and students to share tasks, manage reminders, and coordinate academic activities.",
            pros: [
                "Role-Based Access",
                "Task Management",
                "Reminders",
                "Active User List",
                "JWT Authentication",
                "NodeMailer",
            ],
            future: [
                "Live Chat",
                "Notifications",
                "Better UI",
                "Theme Support",
            ],
            git: "https://github.com/syedmdfarhaneazam/studyPortal",
            live: "https://github.com/syedmdfarhaneazam/studyPortal",
        },
        {
            title: "Quiz Template",
            description:
                "An interactive quiz application with a dynamic background, timer, automatic result display, and visual performance charts.",
            pros: [
                "Interactive UI",
                "User Friendly",
                "Timed Quiz",
                "Result Display",
                "Performance Chart",
            ],
            future: [
                "Question Import",
                "Reporting",
                "Theme Support",
                "More Routes",
            ],
        },
        {
            title: "Challenge Tracker",
            description:
                "A personal challenge tracking application that helps users log, monitor, and analyze daily challenges, visualize progress, build habits, and understand long-term growth.",
            pros: [
                "Challenge Tracking",
                "Data Storage",
                "Automated Email Reminders",
                "Framer Motion",
                "GSAP",
            ],
            future: ["Challenge Tags", "Resource Management", "Theme Support"],
            git: "https://github.com/syedmdfarhaneazam/ChallengesTracker",
            live: "https://challenges-tracker-ten.vercel.app/",
        },
    ],

    python: [
        {
            title: "Study Buddy AI",
            description:
                "An AI-powered learning assistant integrated with a School ERP platform to answer syllabus-based queries, maintain conversation context, and provide curriculum-specific quizzes.",
            pros: [
                "Agentic AI",
                "LLM Integration",
                "Conversation History",
                "Session Management",
                "Knowledge Retrieval",
                "Syllabus-Based Quizzes",
            ],
            future: [
                "Advanced RAG",
                "Personalized Learning",
                "Performance Analytics",
                "Multi-Model Support",
            ],
            git: "https://thevectorx.com",
            live: "https://thevectorx.com",
        },

        {
            title: "Workout Prediction",
            description:
                "A machine learning application that analyzes user-specific fitness, workout, and food-log data to predict calorie expenditure and generate personalized workout and nutrition-related recommendations.",
            pros: [
                "Machine Learning",
                "Data Preprocessing",
                "EDA",
                "Random Forest",
                "Linear Regression",
                "Predictive Modeling",
            ],
            future: [
                "Model Optimization",
                "More Fitness Features",
                "Personalized Analytics",
                "Model Comparison Dashboard",
            ],
            git: "https://github.com/syedmdfarhaneazam",
            live: "https://github.com/syedmdfarhaneazam",
        },

        // {
        //     title: "Teacher Rating System",
        //     description:
        //         "An AI-based video analysis pipeline that evaluates recorded teaching sessions using computer vision and audio processing to measure instructional delivery and generate structured performance scores.",
        //     pros: [
        //         "Computer Vision",
        //         "Video Analysis",
        //         "Audio Processing",
        //         "Facial Expression Analysis",
        //         "Body Language Analysis",
        //         "Custom Scoring Engine",
        //     ],
        //     future: [
        //         "Deep Learning Models",
        //         "Real-Time Analysis",
        //         "Advanced Speech Analysis",
        //         "Teacher Performance Dashboard",
        //     ],
        //     git: "https://github.com/syedmdfarhaneazam",
        //     live: "https://github.com/syedmdfarhaneazam",
        // },

        {
            title: "Topic & Question Generator",
            description:
                "A lightweight NLP application using FastAPI, spaCy, KeyBERT, and the all-MiniLM-L6-v2 transformer model to extract topics and generate questions efficiently with minimal resource usage.",
            pros: [
                "NLP",
                "Topic Extraction",
                "Question Generation",
                "FastAPI",
                "KeyBERT",
                "Transformer Models",
            ],
            future: [
                "Advanced NLP Models",
                "Model Fine-Tuning",
                "Engineering Question Generation",
                "Improved Question Quality",
            ],
            git: "https://github.com/syedmdfarhaneazam/QuestionsAndTopicGenerator",
            live: "https://github.com/syedmdfarhaneazam/QuestionsAndTopicGenerator",
        },

        {
            title: "Snake Game",
            description:
                "A simple Python-based Snake game developed with Tkinter as a beginner project for understanding GUI programming, event handling, and game logic.",
            pros: [
                "Python",
                "Tkinter",
                "GUI Programming",
                "Game Logic",
                "Beginner Friendly",
            ],
            future: [
                "Improved Canvas",
                "Better UI",
                "Levels",
                "High Score System",
            ],
            git: "https://github.com/syedmdfarhaneazam/snakeFood",
            live: "https://github.com/syedmdfarhaneazam/snakeFood",
        },
    ],

    shell: [
        {
            title: "Advanced Calculator",
            description:
                "A terminal-based scientific calculator built for WSL that allows users to perform calculations, store variables, and reuse previously calculated values.",
            pros: [
                "Cron Job Integration",
                "Scientific Functions",
                "Interactive",
                "Terminal Support",
                "Variable Storage",
            ],
            future: [
                "Incremental Backups",
                "Cloud Storage",
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
                "A Java repository containing implementations and solutions for Data Structures and Algorithms, demonstrating understanding of core DSA concepts and object-oriented programming.",
            pros: [
                "Clean Module Architecture",
                "Class Based",
                "Easy to Configure",
                "DSA Practice",
                "Java",
            ],
            future: [
                "Advanced Data Structures",
                "Complex Algorithms",
                "Optimization",
                "Problem Solving",
            ],
        },
    ],
};

const ProjectCard = ({ title, description, pros, future, git, live }) => {
    return (
        <motion.div
            className="flex flex-col h-full bg-card/50 backdrop-blur-sm p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-primary/10 shadow-lg hover:border-primary/30 transition-all duration-300 group w-full"
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
            <div className="relative flex flex-col h-full">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 text-primary leading-snug">
                    {title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 mb-4">
                    {description}
                </p>
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 sm:gap-4 mb-4 mt-auto">
                    <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">
                            Features
                        </h4>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/70 space-y-1 break-words">
                            {pros.map((pro, i) => (
                                <li key={i}>{pro}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">
                            Future Scope
                        </h4>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-foreground/70 space-y-1 break-words">
                            {future.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col min-[420px]:flex-row space-y-2 min-[420px]:space-y-0 min-[420px]:space-x-3 sm:space-x-4 pt-4 border-t border-primary/10">
                    <a
                        href={git}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 min-w-0"
                    >
                        <button className="flex items-center justify-center space-x-2 text-foreground/70 hover:text-primary transition-colors w-full py-2 px-2 sm:px-3 rounded-lg hover:bg-accent/50">
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                            <span className="text-sm sm:text-base truncate">
                                GitHub
                            </span>
                        </button>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={live}
                        className="flex-1 min-w-0"
                    >
                        <button className="flex items-center justify-center space-x-2 text-foreground/70 hover:text-primary transition-colors w-full py-2 px-2 sm:px-3 rounded-lg hover:bg-accent/50">
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                            <span className="text-sm sm:text-base truncate">
                                Live Demo
                            </span>
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
            <div className="px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <AnimatedText
                    text="My Creations"
                    as="h1"
                    className="text-3xl xs:text-4xl sm:text-5xl font-bold text-center mb-3 sm:mb-4 text-glow"
                />
                <p className="text-center text-sm xs:text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've passionately built. Each
                    one represents a unique challenge and a learning
                    opportunity.
                </p>

                <ProjectSection
                    title="DS/ Python / FastApi"
                    projects={projectsData.python}
                />
                <div className="text-center my-6 xs:my-8 sm:my-12">
                    <a
                        href="https://github.com/syedmdfarhaneazam/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="btn-primary"
                        >
                            And More...
                        </motion.button>
                    </a>
                </div>
                <ProjectSection
                    title="MERN Stack Projects"
                    projects={projectsData.mern}
                />

                <div className="text-center my-6 xs:my-8 sm:my-12">
                    <a
                        href="https://github.com/syedmdfarhaneazam/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="btn-primary"
                        >
                            And More...
                        </motion.button>
                    </a>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="lg:col-span-2">
                        <ProjectSection
                            title="Shell Scripting"
                            projects={projectsData.shell}
                            singleColumn
                        />
                    </div>
                    <div>
                        <ProjectSection
                            title="Java"
                            projects={projectsData.java}
                            singleColumn
                        />
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

const ProjectSection = ({ title, projects, singleColumn = false }) => (
    <section className="mb-10 xs:mb-12 sm:mb-16">
        <AnimatedText
            text={title}
            as="h2"
            className="text-xl xs:text-2xl sm:text-3xl font-bold mb-5 sm:mb-8 text-primary"
        />
        <div
            className={`grid gap-5 xs:gap-6 sm:gap-8 ${
                singleColumn
                    ? "grid-cols-1"
                    : "grid-cols-1 min-[560px]:grid-cols-2 xl:grid-cols-3"
            }`}
        >
            {projects.map((p, i) => (
                <ProjectCard key={i} {...p} />
            ))}
        </div>
    </section>
);

export default Projects;
