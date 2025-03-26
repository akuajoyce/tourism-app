

const Navbar = () => {
  return (
    <nav className=" bg-[#945034] flex flex-row justify-between px-20 py-6 text-white font-mono  border-white">
      <span>Yorking</span>
      <div className="flex flex-row gap-x-10">
        <span>Home</span>
        <span>About</span>
        <span>Listings</span>
        <span>Blog</span>
      </div>
    </nav>
  );
};

export default Navbar;
