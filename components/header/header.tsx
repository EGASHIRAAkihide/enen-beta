import { useState } from "react"
import Image from 'next/image'
import { GiHamburger } from 'react-icons/gi'
import { AiOutlineInstagram } from 'react-icons/ai' 
import { FaTiktok } from  'react-icons/fa'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="bg-slate-300 relative">
      <div className="
        flex flex-nowrap items-center justify-between mx-auto my-0 px-5 md:px-8 lg:px-12 max-w-5xl">
        <div>
          <Image
            src="/logo.svg"
            alt="ENEN"
            width="100%"
            height="100%"
          />
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-10 items-center">
            <li className="cursor-pointer">
              <a className="text-base text-slate-800">About</a>
            </li>
            <li className="cursor-pointer">
              <a className="text-base text-slate-800">Company</a>
            </li>
            <li className="cursor-pointer">
              <a className="text-base text-slate-800">Works</a>
            </li>
            <li className="cursor-pointer">
              <a className="text-base text-slate-800">Members</a>
            </li>
            <li className="cursor-pointer">
              <a className="text-base text-slate-800">Contact</a>
            </li>
            <li className="cursor-pointer">
              <a className="text-base text-slate-800">Group Companies</a>
            </li>
          </ul>
        </nav>

        <div className="animate-bounce cursor-pointer flex items-center w-8 lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          <GiHamburger size={32} />
        </div>
      </div>
      <nav className={isNavOpen ? "absolute bg-slate-100 flex flex-wrap items-center jusfity-start py-8 w-full lg:hidden" : "hidden"}>
        <ul className="w-full">
          <li className="cursor-pointer pt-3 md:pt-6 pr-3 md:pr-6 pb-3 md:pb-6 pl-6 md:pl-11 transition-all w-full hover:bg-slate-100">
            <a href="#about" className="text-base md:text-lg">About ENEN</a>
          </li>
          <li className="cursor-pointer pt-3 md:pt-6 pr-3 md:pr-6 pb-3 md:pb-6 pl-6 md:pl-11 transition-all w-full hover:bg-slate-100">
            <a href="#company" className="text-base md:text-lg">Company</a>
          </li>
          <li className="cursor-pointer pt-3 md:pt-6 pr-3 md:pr-6 pb-3 md:pb-6 pl-6 md:pl-11 transition-all w-full hover:bg-slate-100">
            <a href="#work" className="text-base md:text-lg">Works</a>
          </li>
          <li className="cursor-pointer pt-3 md:pt-6 pr-3 md:pr-6 pb-3 md:pb-6 pl-6 md:pl-11 transition-all w-full hover:bg-slate-100">
            <a href="#members" className="text-base md:text-lg">Members</a>
          </li>
          <li className="cursor-pointer pt-3 md:pt-6 pr-3 md:pr-6 pb-3 md:pb-6 pl-6 md:pl-11 transition-all w-full hover:bg-slate-100">
            <a href="#contact" className="text-base md:text-lg">Contact</a>
          </li>
          <li className="pt-3 md:pt-6 pr-3 md:pr-6 pb-3 md:pb-6 pl-6 md:pl-11">
            <a href="#contact" className="text-base md:text-lg">Group Companies</a>
          </li>
          <li className="cursor-pointer pt-3 md:pt-6 pr-8 md:pr-11 pb-3 md:pb-6 pl-3 md:pl-6 flex gap-6 items-center justify-end">
            <a href="https://www.instagram.com/encounter_engravers/" target="_blank" rel="noreferrer">
              <AiOutlineInstagram size={24} />
            </a>
            <a href="https://www.instagram.com/encounter_engravers/" target="_blank" rel="noreferrer">
              <FaTiktok size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <div>
        hero
      </div>
    </header>
  )
}

export default Header