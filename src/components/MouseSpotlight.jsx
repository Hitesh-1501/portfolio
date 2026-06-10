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

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    >
      <div
        className="
          absolute
          w-[300px]
          h-[300px]
          rounded-full
          bg-[#3DDC84]/5
          blur-3xl
        "
        style={{
          transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
        }}
      />
    </div>
  );
};

export default MouseSpotlight;