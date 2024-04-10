import React, { useState, useEffect } from "react";

const Typewriter = ({
  text = "Give me something to type!",
  minTypeSpeed = 50,
  maxTypeSpeed = 90,
  initDelay = 700,
  className,
}) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const clicketyClack = (text, minTypeSpeed, maxTypeSpeed, initDelay) => {
      let str = "";
      let typeSpeed = 0;

      text.split("").forEach((c) => {
        typeSpeed +=
          Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
        setTimeout(() => {
          str += c;
          setTypedText(str);
        }, initDelay + typeSpeed);
      });
    };

    clicketyClack(text, minTypeSpeed, maxTypeSpeed, initDelay);
  }, [text, minTypeSpeed, maxTypeSpeed, initDelay]);

  return (
    <div className={className}>
      {typedText}
      <span>&nbsp;</span>
    </div>
  );
};

export default Typewriter;
