import { Dispatch, SetStateAction, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

type BurgerProps = {
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu = ({ menuActive, setMenuActive }: BurgerProps) => {

  const body = document.querySelector("body")!;

  const onBackdrop = (e: any) => {
    e.target === e.currentTarget && setMenuActive(!menuActive)
  }
  const onTabletClose = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    menuActive && (body.classList.add("no-scroll"));
    return () => {
      body.classList.remove("no-scroll");
    };
  });

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.code === "Escape") {
        body.classList.remove("no-scroll");
        setMenuActive(!menuActive)
      }
    };
    menuActive && (window.addEventListener("keydown", handleKeyDown));
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [menuActive]);

  return (
    <div className={menuActive ?
      "fixed flex flex-row-reverse top-0 left-0 z-20 w-screen h-screen translate-x-0 duration-500 backdrop-blur-sm  laptop:hidden " :
      "fixed flex flex-row-reverse top-0 left-0 z-20 w-screen h-screen translate-x-full duration-500 laptop:hidden"}
      onClick={(e) => { onBackdrop(e) }}>
      <div className=' bg-backgroundBurger w-screen h-screen px-8 py-10 pt-20  mobile:pt-28 tablet:w-2/3'>
        <span className='hidden tablet:block tablet:fixed tablet:top-10 tablet:right-16 tablet:h-5 tablet:w-8 tablet:z-10 tablet:cursor-pointer tablet:before:content-[""] tablet:before:absolute tablet:before:h-0.5 tablet:before:w-full tablet:before:bg-burgerColor tablet:before:top-2 tablet:before:rotate-45 tablet:after:content-[""] tablet:after:absolute tablet:after:h-0.5 tablet:after:w-full tablet:after:bg-burgerColor tablet:after:transition-all tablet:after:bottom-2.5 tablet:after:rotate-[-45deg]'
          onClick={onTabletClose}></span>
        <ul className='flex flex-col items-center gap-3 '>
          <li><NavLink to='/' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal mobile:text-xl mobile:tracking-wider " onClick={() => setMenuActive(!menuActive)} >Головна</NavLink></li>
          <li><NavLink to='/group' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal mobile:text-xl mobile:tracking-wider" onClick={() => setMenuActive(!menuActive)} >Для гуртів</NavLink></li>
          <li> <NavLink to='/gallery' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal mobile:text-xl mobile:tracking-wider" onClick={() => setMenuActive(!menuActive)}>Галерея</NavLink></li>
          <li> <NavLink to='/contacts' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal mobile:text-xl mobile:tracking-wider" onClick={() => setMenuActive(!menuActive)}>Контакти</NavLink></li>
        </ul>
      </div>
    </div >
  )
}

export default BurgerMenu