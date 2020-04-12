import React from "react";
import { motion } from "framer-motion";

import styled from "@emotion/styled";

const variants = {
  enter: {
    opacity: 0,
    x: "-50%",
  },
  animate: { opacity: 1, x: "0%" },
  exit: { opacity: 0, x: "50%" },
  transition: {
    duration: 0.25,
    type: "spring",
  },
};

const AnimatedContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const addPageAnimation = (Component) => () => {
  return (
    <AnimatedContainer
      variants={variants}
      initial="enter"
      animate="animate"
      exit="exit"
      transition="transition"
    >
      <Component />
    </AnimatedContainer>
  );
};

export default addPageAnimation;
