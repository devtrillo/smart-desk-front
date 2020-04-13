import React, { useContext } from "react";
import { SketchPicker } from "react-color";
import { SocketsContext } from "context/Socket";
import { compose, ifElse, prop, always } from "ramda";
import renameKey from "utils/renameKey";
import styled from "@emotion/styled";

const toPicker = compose(
  renameKey("red", "r"),
  renameKey("green", "g"),
  renameKey("blue", "b")
);

const toData = compose(
  renameKey("r", "red"),
  renameKey("g", "green"),
  renameKey("b", "blue")
);

const isActive = ifElse(
  prop("active"),
  always("var(--bg-secondary)"),
  always("var(--bg-primary)")
);

const ButtonContainer = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  & button {
    margin: 10px 15px;
    font-size: 1.5rem;
  }
`;
const Button = styled.button`
  color: var(--text-primary);
  background-color: ${isActive};
  border: 0;
  padding: 5px;
`;
const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const LightsScreen = () => {
  const { lightColor, setMode, setColor, method } = useContext(SocketsContext);
  return (
    <Container>
      <span>Ligths</span>
      <SketchPicker
        color={toPicker(lightColor)}
        onChangeComplete={({ rgb }) => {
          setColor(toData(rgb));
        }}
      />
      <ButtonContainer>
        <Button
          onClick={() => setMode("rainbow")}
          active={method === "rainbow"}
        >
          Set rainbow
        </Button>
        <Button
          onClick={() => setMode("color_fill")}
          active={method === "color_fill"}
        >
          Color fill
        </Button>
        <Button
          onClick={() => setMode("theather_chase")}
          active={method === "theather_chase"}
        >
          Set chase
        </Button>
        <Button
          onClick={() => setMode("rainbow_theather_chase")}
          active={method === "rainbow_theather_chase"}
        >
          Set rainbow chase
        </Button>
        <Button
          onClick={() => setMode("rainbow_cycle")}
          active={method === "rainbow_cycle"}
        >
          Set rainbow cycle
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LightsScreen;
