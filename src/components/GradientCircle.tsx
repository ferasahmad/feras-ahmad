import React from "react";

interface GradientCircleProps {
  top: string;
  left: string;
  color: string;
  opacity: number;
  height?: string;
  width?: string;
}

const GradientCircle: React.FC<GradientCircleProps> = ({
  top,
  left,
  color,
  opacity,
  height,
  width,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    width: height || "100%",
    height: width || "100%",
    top,
    left,
    backgroundImage: `radial-gradient(circle at center, ${color} 0%, transparent 60%)`,
    opacity,
  };

  return <div style={style} />;
};

export default GradientCircle;
