import logo from "./assets/logo.png";

function Navigation() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-white text-xl font-bold">
              <img className="h-8" src={logo} alt="logo" />
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <a href="#" className="text-white">
              Blog
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <a href="#" className="text-white">
              Blog
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
