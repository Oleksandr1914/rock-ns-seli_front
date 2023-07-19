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
      <div className="relative flex flex-row px-5 py-2 items-center mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:py-4 laptop:w-[1024px] leptop:px-10 laptop:py-5 desktop:w-[1280px] desktop:px-14">
        <img src={Logo} alt="logo" className="w-40 mobile:w-48 laptop:w-56 desktop:w-64" />
        <ul className=' hidden laptop:flex laptop:flex-row laptop:gap-7 laptop:ml-auto desktop:gap-10'>
          <li ><NavLink to='/' className="text-textColor font-Ysabeau  font-medium text-xl tracking-wider hover:text-hoverColor focus:text-hoverColor desktop:text-2xl">ГОЛОВНА</NavLink></li>
          <li><NavLink to='/group' className="text-textColor font-Ysabeau  font-medium text-xl tracking-wider hover:text-hoverColor focus:text-hoverColor desktop:text-2xl">ДЛЯ ГУРТІВ</NavLink></li>
          <li><NavLink to='/gallery' className="text-textColor font-Ysabeau font-medium text-xl tracking-wider hover:text-hoverColor focus:text-hoverColor desktop:text-2xl">ГАЛЕРЕЯ</NavLink></li>
          <li><NavLink to='/contacts' className="text-textColor font-Ysabeau  font-medium text-xl tracking-wider hover:text-hoverColor focus:text-hoverColor desktop:text-2xl">КОНТАКТИ</NavLink></li>
        </ul>
        <div
          onClick={handleBurger}
          className="ml-auto laptop:hidden"
        >
          <div
            className={
              menuActive
                ? "block relative h-5 w-8 z-30 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-burgerColor before:transition-all before:top-2 before:rotate-45 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-burgerColor after:transition-all after:bottom-2.5 after:rotate-[-45deg] tablet:before:rotate-0 tablet:before:top-0 tablet:after:rotate-0 tablet:after:bottom-0  tablet:z-10"
                : "block relative h-5 w-8 z-30 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-burgerColor before:transition-all before:top-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-burgerColor after:transition-all after:bottom-0 "
            }
          >
            <span
              className={
                menuActive
                  ? 'absolute top-2 right-0 h-0.5 w-full bg-burgerColor scale-0 transition-all tablet:scale-100'
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
