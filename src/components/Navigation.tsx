
import React, { useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Nosotros",
    route: "/nosotros",
  },
  {
    label: "Plataformas",
    route: "/plataformas",
  },
];

export const Navigation = () => {
  const [isOpen, setisOpen] = React.useState(false)
  const [heightMenu, setHeightMenu] = React.useState("50px")

  const heightUl= React.useRef<any | null>(null);

  const pathname = usePathname()

  console.log(pathname)
  

  useEffect(() => {
      // 👉️ TypeScript knows that ref is not null here
      setHeightMenu(heightUl.current.clientHeight)

 
  
  }, [])

  return (
    <>


<nav className=" bg-black-1 px-4 md:px-8 lg:px-16 py-2.5 md:py-0">
  <div className="flex flex-wrap items-center justify-between">
    <a href="#" className="flex items-center">
        <img width="110px" src="logo-white.svg" />
        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
    </a>
    <button onClick={() => setisOpen(!isOpen)} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <li className="list-none text-xl">
          <FiMenu />
          </li>
    </button>
    <div  style={( isOpen ? {maxHeight:(heightMenu)} : {maxHeight:"0"}) }  className=" absolute md:static bg-black-1 left-0 top-[56px] z-20 duration-700 overflow-hidden w-full md:block md:w-auto min-h-auto-important"  id="navbar-solid-bg">
      <ul ref={heightUl} className="p-5 md:p-0 flex flex-col pt-4 rounded-lg md:flex-row md:space-x-8 md:pt-0 md:text-sm md:font-medium md:border-0 md:dark:bg-transparent dark:border-gray-700">

        {Links.map(({label,route})=>(
          <li key={route}>
            <Link prefetch={false} onClick={() => setisOpen(false)} className={ ((pathname === route) ? "bg-primary text-white md:bg-transparent  border-secondary md:border-b-[5px]" : " text-gray-400  md:hover:text-white dark:hover:bg-gray-700 hover:text-white border-black-1 md:hover:bg-transparent hover:bg-gray-100 md:hover:bg-transparent") + " duration-100 block py-2 px-4 md:border-b-[5px]  md:pt-5 md:pb-4"} href={route}>
              {label}
            </Link>
          </li>
        ))}

        
      </ul>
    </div>
  </div>
</nav>

      {/* <div className="relative w-full shadow-adjust bg-white  flex flex-wrap items-center justify-between px-4 md:px-8 lg:px-16 py-4 z-10">
        <Link href="/" scroll={true} prefetch={false}>
          <h1 className="font-extrabold  duration-500">PROMAGIC</h1>
        </Link>
        <div className="flex sm:hidden">
          <li className="list-none text-xl">
          <FiMenu />
          </li>
        </div>
        <ul className="hidden gap-x-5 sm:flex">
          <li>
            <Link href="/servicios" scroll={true} prefetch={false}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/productos" prefetch={false}>
              Exterior
            </Link>
          </li>
          <li>
            <Link href="/whatwedo" prefetch={false}>
              framerpesado
            </Link>
          </li>

          <li>
            <Link href="/index3" scroll={true} prefetch={false}>
              Interior
            </Link>
          </li>
          <li>
            <Link href="/page4" prefetch={false}>
              Productos
            </Link>
          </li>
        </ul>
        
      </div> */}
    </>
  );
};
