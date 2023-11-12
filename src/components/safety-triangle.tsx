import React, { ReactElement, useEffect, useRef } from "react";
import { useSafetyTriangle } from "./hooks/use-safety-triangle";

const MOUSE_X_OFFSET = 3;

interface ISafeArea extends React.HTMLAttributes<HTMLDivElement> {
  showVisualisation: boolean,
}

export const SafetyTriangle = (props: ISafeArea) => {
  const dropdownContainerRef = useRef<HTMLElement | null>(null);
  const childRefs = useRef<HTMLElement[]>([]);
  const {
    showVisualisation = false,
    children,
  } = props;

  useEffect(() => {
    if (childRefs.current.length > 0 && !dropdownContainerRef.current) {
      dropdownContainerRef.current = childRefs.current[0].parentElement
    }
  }, [childRefs]);

  const { getBoundingClientRect, mousePos } = useSafetyTriangle({ dropdownContainerRef });

  if (!children) return null;

  const boundingClientRect = getBoundingClientRect() || {
    left: 0,
    width: 0,
    height: 0,
    top: 0,
  };

  const clonedChildren = React.Children.map(children, (element, idx) =>
    React.cloneElement(
      element as ReactElement,
      { ref: (ref: HTMLElement) => childRefs.current[idx] = ref }
    ));

  const xAxisModifier = `${(mousePos[0] - boundingClientRect.left) + boundingClientRect.width - MOUSE_X_OFFSET}`;

  return (
    <div {...props} className={`absolute top-0 left-0 m-auto ${props.className || ""}`}>
      <svg
        style={{
          position: "absolute",
          width: boundingClientRect.width,
          height: boundingClientRect.height,
          pointerEvents: "none",
          zIndex: 50,
          top: 0,
          left: 0 - boundingClientRect.width,
          overflow: "visible"
        }}
        id="svg-safe-area"
      >
        <path
          pointerEvents="auto"
          stroke="purple"
          strokeWidth={showVisualisation ? 0.4 : 0}
          fill={`rgb(255 10 10 / ${showVisualisation ? 0.3 : 0})`}
          d={
            `M ${xAxisModifier}, ${mousePos[1] - boundingClientRect.top}
          L ${boundingClientRect.width},${boundingClientRect.height}
          L ${boundingClientRect.width},0
          z`
          }
        />
      </svg>

      {clonedChildren}
    </div>
  );
};

export default SafetyTriangle;