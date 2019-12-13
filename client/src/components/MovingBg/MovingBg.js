import React, { useState } from "react";
import * as Styles from "./MovingBg.styles";
import { useSpring } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 3, y - window.innerHeight / 3];
const trans1 = (x, y) => `translate3d(${x / 15}px, ${y / 15}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px, ${y / 8 - 230}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px, ${y / 6 - 200}px, 0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px, ${y / 3.5}px, 0)`;
const MovingBg = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 50, friction: 140 }
  }));

  return (
    <Styles.BrokenHeartWrapper>
      <Styles.BrokenHeartContainer
        onMouseOver={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Styles.BrokenHeart
          style={{ transform: props.xy.interpolate(trans4) }}
        ></Styles.BrokenHeart>
        <Styles.Mommmm
          style={{ transform: props.xy.interpolate(trans4) }}
        ></Styles.Mommmm>
        <Styles.Cry
          style={{ transform: props.xy.interpolate(trans1) }}
        ></Styles.Cry>
      </Styles.BrokenHeartContainer>
    </Styles.BrokenHeartWrapper>
  );
};

export default MovingBg;
