import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  background-color: aliceblue;
  height: 100%;
  width: 100%;
`;
const NoConnectionScreen = () => {
  return (
    <Container initial={{}} animate={} transition={}>
      No connection :(
    </Container>
  );
};

export default NoConnectionScreen;
