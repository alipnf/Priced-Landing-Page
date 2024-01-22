import Button from "../Elements/button";
import Navlink from "../Elements/navlink";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <h1 className="text-[18px] font-bold italic text-white">Strawrage</h1>
      <div className="flex w-1/2 justify-center gap-12">
        <Navlink text="Home"></Navlink>
        <Navlink text="Product"></Navlink>
        <Navlink text="Pricing"></Navlink>
        <Navlink text="Contact Us"></Navlink>
      </div>
      <div className="w-1/12">
        <Button
          bg="bg-[#160e4b]"
          text="Sign Up"
          size="text-[18px]"
          weight="font-bold"
        ></Button>
      </div>
    </nav>
  );
};

export default Navbar;
