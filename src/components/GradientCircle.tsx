import React from "react";

interface GradientCircleProps {
  top: string;
  left: string;
  color: string;
  opacity: number;
}

const GradientCircle: React.FC<GradientCircleProps> = ({
  top,
  left,
  color,
  opacity,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top,
    left,
    backgroundImage: `radial-gradient(circle at center, ${color} 0%, transparent 65%)`,
    opacity,
  };

  return <div style={style} />;
};

export default GradientCircle;
