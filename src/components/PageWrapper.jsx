import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const PageWrapper = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | AZAM`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
