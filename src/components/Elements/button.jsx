const Button = ({ bg, text, size, weight }) => {
  return (
    <button
      type="submit"
      className={`${bg} ${size} ${weight} w-full rounded-md py-2 text-white hover:opacity-90`}
    >
      {text}
    </button>
  );
};

export default Button;
