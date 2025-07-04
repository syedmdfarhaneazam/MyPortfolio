import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import BoidsCanvas from "@/components/magic/BoidsCanvas";
import BezierCanvas from "@/components/magic/BezierCanvas";
import ParticleCanvas from "@/components/magic/ParticleCanvas";
import SpringCanvas from "@/components/magic/SpringCanvas";
import RpsCanvas from "@/components/magic/RpsCanvas";

const magicTricks = [
  {
    id: "boids",
    title: "Boids (Flocking Algorithm)",
    description:
      'A simulation of emergent behavior, mimicking the flocking of birds or schooling of fish. Each "boid" follows a simple set of rules, but together they create complex, natural-looking motion.',
    component: BoidsCanvas,
  },
  {
    id: "rps",
    title: "Rock Paper Scissors Battle",
    description:
      "A chaotic battle royale where Rock, Paper, and Scissors agents fight for dominance. This simulation uses a spatial hash grid for efficient collision detection in this cyclical conflict.",
    component: RpsCanvas,
  },
  {
    id: "particles",
    title: "Interactive Particle Emitter",
    description:
      "A dazzling display of particles that react to your mouse movements, gravity, and fade over time. This trick uses a particle system to create a dynamic and engaging visual experience.",
    component: ParticleCanvas,
  },
  {
    id: "springs",
    title: "Interactive Spring Net",
    description:
      "An interactive simulation where particles are connected by invisible springs. You can pull them around and watch them wobble and react with realistic physics.",
    component: SpringCanvas,
  },
  {
    id: "bezier",
    title: "Bezier Curve Morphing",
    description:
      "Experience the beauty of mathematics with these morphing liquid-like blobs. This trick uses animated SVG Bezier curves to create fluid, organic, and endlessly satisfying shapes.",
    component: BezierCanvas,
  },
];

const MagicCard = ({ id, title, description, component: Component }) => {
  return (
    <motion.div
      layout
      className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg overflow-hidden relative w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 sm:p-6">
        <motion.h2
          layout="position"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2"
        >
          {title}
        </motion.h2>
        <motion.p
          layout="position"
          className="text-sm sm:text-base text-foreground/80 max-w-3xl"
        >
          {description}
        </motion.p>
      </div>
      <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] bg-background/70">
        <Component />
      </div>
    </motion.div>
  );
};

const Magics = () => {
  return (
    <PageWrapper
      title="Magic Tricks"
      description="Interactive UI algorithms and visual experiments."
    >
      <AnimatedText
        text="My Magic Tricks"
        as="h1"
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
      />
      <p className="text-center text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
        Welcome to my digital playground! This is where I experiment with code
        to create beautiful, interactive, and sometimes surprising visual
        experiences. Have fun!
      </p>
      <div className="space-y-6 sm:space-y-8">
        {magicTricks.map((trick) => (
          <MagicCard key={trick.id} {...trick} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Magics;

