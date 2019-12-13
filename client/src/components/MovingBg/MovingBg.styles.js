import styled from "styled-components";
import img from "../../assets/BrokenHeart-01.svg";
import Simpsons from "../../assets/simpson-tat.png";
import CryBaby from "../../assets/CryBaby.png";
import { animated } from "react-spring";

export const BrokenHeart = styled(animated.div)`
  position: absolute;
  height: 12rem;
  background-repeat: no-repeat;
  background-image: url(${img});
  left: 10%;
  top: 20%;
  width: 8rem;
`;

export const Mommmm = styled(animated.div)`
  position: absolute;
  height: 17rem;
  background-repeat: no-repeat;
  background-image: url(${Simpsons});
  background-size: contain;
  left: 80%;
  top: 30%;
  width: 17rem;
`;
export const Cry = styled(animated.div)`
  position: absolute;
  height: 19rem;
  background-repeat: no-repeat;
  background-image: url(${CryBaby});
  background-size: contain;
  left: 10%;
  top: 50%;
  width: 22rem;
`;
export const Star = styled.div`
  position: absolute;
  height: 8rem;
  display: block;
  background-repeat: no-repeat;
  background-image: url(${img});
  left: 25%;
  top: 40%;
  width: 12rem;
`;

export const BrokenHeartContainer = styled(animated.div)`
  position: absolute;
  height: 90vh;
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
export const BrokenHeartWrapper = styled.div`
  width: 100%;
  height: 888px;
  transform: translate3d(0px, 0px, 0px);
  display: flex;
  position: absolute;
  background-size: auto;
  will-change: transform;
  align-items: center;
  justify-content: center;
`;
