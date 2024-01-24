import Button from "../Elements/button";
import Recomended from "../Elements/recomended";
const Card = ({ title, price, description, border, recomended, children }) => {
  return (
    <div className="mt-20 flex w-96 flex-col">
      {recomended && <Recomended></Recomended>}
      <div
        className={`h-fit  rounded-b-[10px] bg-white p-7 shadow-lg ${border}`}
      >
        <h2 className="text-[16px] font-bold text-[#160E4B]">{title}</h2>
        <h1 className="text-4xl font-bold text-[#160E4B]">
          {price} <span className="text-sm opacity-65">/month</span>
        </h1>
        <p className="mb-7 mt-4 text-sm font-normal opacity-65">
          {description}
        </p>
        <Button
          bg="bg-[#7C67FE]"
          text="Get Started"
          size="text-sm"
          weight="font-medium"
        ></Button>
        <p className="mt-7">Features</p>
        <div className="mt-2 flex flex-col gap-3">{children}</div>
      </div>
    </div>
  );
};

export default Card;
