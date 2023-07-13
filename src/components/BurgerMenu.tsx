import { Dispatch, SetStateAction, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

type BurgerProps = {
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu = ({ menuActive, setMenuActive }: BurgerProps) => {

  const body = document.querySelector("body")!;

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
      "fixed top-0 left-0 z-20 w-screen h-screen bg-backgroundBurger translate-x-0 duration-500 px-8 py-10 pt-20  mobile:pt-28 laptop:hidden " :
      "fixed top-0 left-0 z-20 w-screen h-screen translate-x-full duration-500 laptop:hidden"}>
      <ul className='flex flex-col items-center gap-3'>
        <li><NavLink to='/' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal mobile:text-xl mobile:tracking-wider " onClick={() => setMenuActive(!menuActive)} >Головна</NavLink></li>
        <li><NavLink to='/group' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal mobile:text-xl mobile:tracking-wider" onClick={() => setMenuActive(!menuActive)} >Для гуртів</NavLink></li>
        <li> <NavLink to='/gallery' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal mobile:text-xl mobile:tracking-wider" onClick={() => setMenuActive(!menuActive)}>Галерея</NavLink></li>
      </ul>
    </div>
  )
}

export default BurgerMenu