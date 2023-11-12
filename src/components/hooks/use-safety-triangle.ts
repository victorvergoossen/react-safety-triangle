import { RefObject, useCallback, useEffect, useState } from "react";

interface IUseSafetyTriangle {
  dropdownContainerRef: RefObject<HTMLElement>,
}

export type SafetyTriangle = {
  getBoundingClientRect: () => DOMRect | undefined,
  mousePos: [x: number, y: number],
};

export const useSafetyTriangle = (
  { dropdownContainerRef }: IUseSafetyTriangle
): SafetyTriangle => {
  const [mousePos, setMousePos] = useState<[x: number, y: number]>([0, 0]);

  const getBoundingClientRect = useCallback(() => {
    return dropdownContainerRef.current?.getBoundingClientRect();
  }, [dropdownContainerRef]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos([e.clientX, e.clientY]);
    };

    if (typeof window !== "undefined") {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    }
  }, []);

  return {
    getBoundingClientRect,
    mousePos,
  }
};