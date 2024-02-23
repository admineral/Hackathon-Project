interface SatelliteProps {
    color: string;
    cx: number;
    cy: number;
    animationDelay: number;
  }
  
  const Satellite: React.FC<SatelliteProps> = ({ color, cx, cy, animationDelay }) => (
    <circle
      className={`${color} satellite`}
      cx={cx}
      cy={cy}
      r={5.8}
      style={{
        animationDelay: `${animationDelay}s`,
      }}
    />
  );
  
  export default Satellite;