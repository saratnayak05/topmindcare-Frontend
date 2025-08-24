import { useState } from "react";
import { navItems } from "../../config/nav";
import Button from "../common/Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <header className=" border-b border-gray-900/10  sticky  bg-pink-600/10 backdrop-blur-sm">  {/*add top-0*/}

      <div className="container max-w-7xl mx-auto ">

        <div className="flex items-center justify-between h-16 p-1">
          {/*logo*/}
          <div className="flex items-center gap-1">
            <div className="img-logo w-8 h-8 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] rounded-lg"></div>
            <span className=" text-lg font-bold">Topmind Care</span>
          </div>

          {/*Desktop navbar*/}
          <nav className="hidden  md:flex items-center gap-7 ">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className=" text-[var(--primary)] font-bold"
              >
                {item.label}
              </a>
            ))}
           
            {/*dak mode button*/}

            <Button>Start Free</Button>

          </nav>

          {/*mobile-screen   hambruger Menu*/}
          <div className="md:hidden">

            {/*dark mode button*/}

            <button 
              onClick={() => {
                setisMenuOpen(!isMenuOpen);
              }}
              className="p-1 rounded-md relative z-1 mr-1 ">
              {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>

          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-2 right-1 w-64 rounded-2xl bg-amber-50   border-gray-500/20 ">
            <nav className=" flex flex-col space-y-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setisMenuOpen(false)}
                  className=" text-xl px-4 font-semibold text-slate-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
        
      </div>
    </header>
  );
};

export default Header;
