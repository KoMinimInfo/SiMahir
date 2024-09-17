import Vector1 from "../../assets/vektor1.svg";
import Vector2 from "../../assets/vektor2.svg";

const VectorBackground = () => {
  return (
    <div className="-z-10">
      <img className="absolute -right-14 top-32 w-40" src={Vector1} />
      <img className="absolute -left-52 top-40 w-96" src={Vector1} />
      <img className="absolute -right-7 bottom-20 w-56" src={Vector2} />
    </div>
  );
};

export default VectorBackground;
