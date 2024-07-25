import { Link } from "react-router-dom"
import ThemeToggle from "../components/ThemeToogle"

type NavLinkProps = {
  title: string,
  url: string,
}
function NavLink({title, url}: NavLinkProps){
  return (
    <li key={title} className=" px-[25px] font-[500] hover:bg-slate-800 cursor-pointer grid place-content-center">
      <Link to={url} className="text-slate-50">{title}</Link>
    </li>
  )
}

function Navbar() {
  return (
    <nav className="grid grid-flow-col justify-between px-8 bg-slate-900 text-white">
      <Link to={'/'}>
        {/* <img src={logoImgUrl} className='w-[120px] box-content py-[10px] cursor-pointer'/> */}
        <div className="min-h-[60px] grid place-content-center text-white">
          <h2 className="text-[24px] font-[500]">Home</h2>
        </div>
      </Link>
      <ul className="grid grid-flow-col text-[24px]">
        <NavLink title="Home" url="/"/>
        <NavLink title="Login" url="/login"/>
        <NavLink title="Sign Up" url="/sign-up"/>
        <ThemeToggle/>
      </ul>
    </nav>
  )
}

export default Navbar