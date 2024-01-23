import Navbar from "../components/Fragments/navbar";
const Header = () => {
  return (
    <header className="container mx-auto">
      <Navbar></Navbar>
      <div className="mt-20 flex flex-col items-center">
        <h1 className="w-[617px] text-center  text-[36px] font-bold text-white">
          <span className="underline">Secure and Reliable </span>Cloud Storage
          for Your Data
        </h1>
        <p className="mt-5 text-[16px] font-medium text-white">
          Scalable storage solutions for businesses of all sizes
        </p>
      </div>
    </header>
  );
};

export default Header;
