import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

// Custom hook to track mouse coordinates
const useMousePosition = (): MousePosition => {
  const [coords, setCoords] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return coords;
};

export default useMousePosition;
