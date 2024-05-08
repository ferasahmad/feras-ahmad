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
  const dynamicStyle: React.CSSProperties = {
    backgroundImage: `radial-gradient(circle at center, ${color} 0%, transparent 65%)`,
    opacity,
    top,
    left,
  };

  return <div style={dynamicStyle} className="absolute lg:w-11/12 lg:h-full" />;
};

export default GradientCircle;
