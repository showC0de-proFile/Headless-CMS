/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { ButtonMenuIcon } from "./styles";

let anim;

function Developer() {
  const DeveloperAnimated = useRef(null);

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: DeveloperAnimated.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./people.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return <ButtonMenuIcon ref={DeveloperAnimated} />;
}

export default Developer;
