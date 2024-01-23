const Feature = ({ text, icon }) => {
  const isCheck = icon === "check";
  const imagePath = isCheck
    ? "./src/assets/check.svg"
    : "./src/assets/cross.svg";

  return (
    <div className="flex gap-2">
      <img src={imagePath} alt={`${icon} icon`} />
      <p>{text}</p>
    </div>
  );
};

export default Feature;
