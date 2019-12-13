import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import img from "../src/assets/heart.png";

//CSS WAY OF ANIMATING

const DivMove = styled.div`
  margin: 100px;
  position: absolute;
  background-image: url(${img});
  background-size: 150px;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
  width: 230px;
  height: 230px;

  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  animation: 4s ease-in-out 0s infinite alternate none running upNdown;
  @keyframes upNdown {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(30px);
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const calc = (x, y) => [x - window.innerWidth / 3, y - window.innerHeight / 3];
const trans1 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px, ${y / 8 - 230}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px, ${y / 6 - 200}px, 0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px, ${y / 3.5}px, 0)`;

const Practice = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const slide = useSpring({
    from: {
      transform: "translateY(30px)"
    },
    transform: "translateY(0px)"
  });

  return (
    <Container
      onMouseOver={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
        <DivMove className="" style={slide}>
          <animated.h1>hello</animated.h1>
          <button>Toggle</button>
        </DivMove>
      </animated.div>
    </Container>
  );
};

export default Practice;
