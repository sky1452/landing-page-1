import { motion } from "framer-motion";

import Header from "./components/Header";
import GetMore from "./components/HeroSection";
import Project from "./components/ProjectManagementSection";
import Work from "./components/CollaborationSection";
import Use from "./components/ExtensionSection";
import Customize from "./components/CustomizationSection";
import Choose from "./components/PricingSection";
import Your_Work from "./components/WorkEverywhereSection";
import Your_Data from "./components/DataSecuritySection";
import Our_sponsors from "./components/SponsorsSection";
import Work_With from "./components/IntegrationsSection";
import What_Our from "./components/TestimonialsSection";
import Try_Whitepace_today from "./components/CallToActionSection";
import Whitepace from "./components/Footer";
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

      <AnimatedSection>
        <Work_With />
      </AnimatedSection>

      <AnimatedSection>
        <What_Our />
      </AnimatedSection>

      <AnimatedSection>
        <Try_Whitepace_today />
      </AnimatedSection>

      <AnimatedSection>
        <Whitepace />
      </AnimatedSection>
    </div>
  );
}

export default App;
