import { useEffect, useState } from "react";

const MouseSpotlight = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
      fixed
      inset-0
      pointer-events-none
      z-0
      "
    >
      <div
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
        className="
        absolute
        w-[300px]
        h-[300px]
        rounded-full

        bg-[#3DDC84]/10

        blur-[120px]
        "
      />
    </div>
  );
};

export default MouseSpotlight;