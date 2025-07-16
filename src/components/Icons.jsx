import React, { useEffect, useRef, useState } from "react";

const techImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
];

const ICON_SIZE = 60;
const PADDING = 2; // Padding around the orbit

function Icons() {
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 400, height: 250 });

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    function animate() {
      setAngle(prev => prev + 0.006); // Adjust speed here
      requestRef.current = requestAnimationFrame(animate);
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const radius = Math.max(0, Math.min(centerX, centerY) - ICON_SIZE / 2 - PADDING) ;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: "100%" }}>
      {techImages.map((img, i) => {
        const theta = angle + (i * (2 * Math.PI / techImages.length));
        const x = centerX + radius * Math.cos(theta) - ICON_SIZE / 2;
        const y = centerY + radius * Math.sin(theta) - ICON_SIZE / 2;
        return (
          <img
            key={i}
            src={img}
            alt=""
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: ICON_SIZE,
              height: ICON_SIZE,
              borderRadius: "50%",
              boxShadow: "0 2px 8px #0008",
              userSelect: "none",
              pointerEvents: "none",
              transition: "box-shadow 0.2s"
            }}
          />
        );
      })}
    </div>
  );
}

export default Icons;