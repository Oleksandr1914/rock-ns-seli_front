import { NavLink, Outlet } from "react-router-dom"

const Gallery = () => {
  return (
    <div className="px-5 py-2 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:pt-6 laptop:w-[1024px] leptop:px-10 laptop:pt-5 desktop:w-[1280px] desktop:px-14">
      <ul className=' flex items-center justify-center gap-6 tablet:gap-8 laptop:gap-10'>
        <li><NavLink to='2018' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal hover:text-hoverColor focus:text-hoverColor mobile:text-xl mobile:tracking-wider tablet:font-medium laptop:text-2xl"  >2018</NavLink></li>
        <li><NavLink to='2019' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal  hover:text-hoverColor focus:text-hoverColor mobile:text-xl mobile:tracking-wider tablet:font-medium laptop:text-2xl"  >2019</NavLink></li>
        <li><NavLink to='2021' className="text-textColor  text-lg tracking-wide font-Ysabeau font-normal  hover:text-hoverColor focus:text-hoverColor mobile:text-xl mobile:tracking-wider tablet:font-medium laptop:text-2xl"  >2021</NavLink></li>

      </ul>
      <Outlet />
    </div>
  )
}

export default Gallery