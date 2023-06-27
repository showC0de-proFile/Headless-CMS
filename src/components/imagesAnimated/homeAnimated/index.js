/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { ButtonMenuIcon } from "./styles";

let anim;

function Robotic() {
  const RoboticAnimated = useRef(null);

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: RoboticAnimated.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./robotic.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return <ButtonMenuIcon ref={RoboticAnimated} />;
}

export default Robotic;
