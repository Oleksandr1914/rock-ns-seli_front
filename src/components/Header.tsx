import { useState } from 'react';
import Logo from '../assets/logo.png';
import BurgerMenu from './BurgerMenu';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);


  const handleBurger = () => {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <div className="relative flex flex-row px-5 py-2 items-center mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:py-3 laptop:w-[1024px] ">
        <img src={Logo} alt="logo" className="w-40 mobile:w-48 " />
        <ul className=' hidden laptop:flex laptop:flex-row laptop:gap-6 laptop:ml-auto'>
          <li ><NavLink to='/' className="text-textColor font-Ysabeau  font-medium text-xl tracking-wider">ГОЛОВНА</NavLink></li>
          <li><NavLink to='/group' className="text-textColor font-Ysabeau  font-medium text-xl tracking-wider ">ДЛЯ ГУРТІВ</NavLink></li>
          <li><NavLink to='/gallery' className="text-textColor font-Ysabeau font-medium text-xl tracking-wider ">ГАЛЕРЕЯ</NavLink></li>
          <li><NavLink to='/group' className="text-textColor font-Ysabeau  font-medium text-xl tracking-wider ">КОНТАКТИ</NavLink></li>
        </ul>
        <div
          onClick={handleBurger}
          className="ml-auto laptop:hidden"
        >
          <div
            className={
              menuActive
                ? "block relative h-5 w-8 z-50 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-burgerColor before:transition-all before:top-2 before:rotate-45 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-burgerColor after:transition-all after:bottom-2.5 after:rotate-[-45deg] "
                : "block relative h-5 w-8 z-50 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-burgerColor before:transition-all before:top-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-burgerColor after:transition-all after:bottom-0 "
            }
          >
            <span
              className={
                menuActive
                  ? 'absolute top-2 right-0 h-0.5 w-full bg-burgerColor scale-0 transition-all '
                  : 'absolute top-2 right-0 h-0.5 w-full bg-burgerColor scale-100 transition-all '
              }
            ></span>
          </div>
        </div>

      </div >
      <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
    </>

  );
};

export default Header;
