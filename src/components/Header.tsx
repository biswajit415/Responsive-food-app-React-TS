import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppDispatch';

enum LogInStatus {
  LogIn = 'LogIn',
  LogOut = 'LogOut',
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const [btnNameReact, setBtnNameReact] = useState<LogInStatus>(
    LogInStatus.LogIn
  );

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="h-[7rem] fixed top-0 right-0 left-0 bottom-auto z-[100]">
      <div className="md:hidden">
        <div className="flex   justify-between bg-pink-800 shadow-lg flex-nowrap h-16  fixed z-[100] top-0 left-0 right-0">
          <button onClick={toggleNav}>
            {' '}
            <div
              className={`w-6 h-1 mb-1 ${
                isNavOpen ? 'bg-white' : 'bg-white'
              } transform transition-all duration-300 ${
                isNavOpen ? 'rotate-45 translate-y-1' : 'rotate-0 translate-y-0'
              }`}
            ></div>
            <div
              className={`w-6 h-1 mb-1 ${
                isNavOpen ? 'bg-white opacity-0' : 'bg-white opacity-100'
              }`}
            ></div>
            <div
              className={`w-6 h-1 ${
                isNavOpen ? 'bg-white' : 'bg-white'
              } transform transition-all duration-300 ${
                isNavOpen
                  ? '-rotate-45 -translate-y-1'
                  : 'rotate-0 translate-y-0'
              }`}
            ></div>
          </button>
        </div>
        {/* Background overlay */}
        {isNavOpen && (
          <div
            className="fixed inset-0 bg-gray-700 opacity-50"
            onClick={toggleNav}
          ></div>
        )}

        <nav
          className={` bg-pink-200 w-[40%] z-[200] fixed bottom-0 top-16 p-4  transition-transform duration-300 transform ${
            isNavOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="flex-col ml-2 text-lg justify-center space-y-2">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>

            <li>
              <Link to="/contact"> Contact</Link>
            </li>

            <li className="relative ">
              <Link to="/contact">
                <span>Cart</span>{' '}
                <span className="  px-1  text-white bg-red-800 rounded-full ">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="z-100 hidden md:block h-[7rem] fixed top-0 right-0 left-0 bottom-auto">
        <div className=" flex justify-between bg-pink-100 shadow-lg flex-nowrap  ">
          <div className="logo-container">
            <img className="w-28 h-full" src={LOGO_URL} />
          </div>

          <div>
            <ul className="flex p-4  h-full">
              <li className="p-4">
                <Link to="/"> Home</Link>
              </li>
              <li className="p-4">
                <Link to="/about"> About</Link>
              </li>
              <li className="p-4">
                <Link to="/contact"> Contact</Link>
              </li>
              <li className="p-4">
                <Link to="/cart" className="relative ">
                  <span className="m-0 text-[1.5em]">🛒</span>
                  <span className="absolute text-sm px-1  text-white bg-red-800 rounded-full  right-0 top-2">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
              <button
                className="login"
                onClick={() => {
                  btnNameReact === LogInStatus.LogIn
                    ? setBtnNameReact(LogInStatus.LogOut)
                    : setBtnNameReact(LogInStatus.LogIn);
                }}
              >
                {btnNameReact}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
