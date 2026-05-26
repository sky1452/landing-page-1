import { motion } from "framer-motion";

import Header from "./components/Header";
import GetMore from "./components/first";
import Project from "./components/second";
import Work from "./components/third";
import Use from "./components/fourth";
import Customize from "./components/fifth";
import Choose from "./components/sixth";
import Your_Work from "./components/seventh";
import Your_Data from "./components/eighth";
import Our_sponsors from "./components/nineth";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedSection({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div>
      <Header />

      <AnimatedSection>
        <GetMore />
      </AnimatedSection>

      <AnimatedSection>
        <Project />
      </AnimatedSection>

      <AnimatedSection>
        <Work />
      </AnimatedSection>

      <AnimatedSection>
        <Use />
      </AnimatedSection>

      <AnimatedSection>
        <Customize />
      </AnimatedSection>

      <AnimatedSection>
        <Choose />
      </AnimatedSection>

      <AnimatedSection>
        <Your_Work />
      </AnimatedSection>

      <AnimatedSection>
        <Your_Data />
      </AnimatedSection>

      <AnimatedSection>
        <Our_sponsors />
      </AnimatedSection>
    </div>
  );
}

export default App;