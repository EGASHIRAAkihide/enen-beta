import { useState } from "react"
import Image from 'next/image'
import { GiHamburger } from 'react-icons/gi'
import { AiOutlineInstagram } from 'react-icons/ai' 
import { FaTiktok } from  'react-icons/fa'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="bg-slate-300 relative">
      <div className="flex flex-nowrap items-center justify-between px-5">
        <div>
          <Image
            src="/logo.svg"
            alt="ENEN"
            width="100%"
            height="100%"
          />
        </div>
        <div className="animate-bounce cursor-pointer flex items-center w-8" onClick={() => setIsNavOpen(!isNavOpen)}>
          <GiHamburger size={32} />
        </div>
      </div>
      <nav className={isNavOpen ? "absolute bg-white flex flex-wrap items-center jusfity-start py-8 w-full" : "hidden"}>
        <ul className="w-full">
          <li className="cursor-pointer pt-3 pr-3 pb-3 pl-6 transition-all w-full hover:bg-slate-100">
            <a href="#about" className="text-md">About ENEN</a>
          </li>
          <li className="cursor-pointer pt-3 pr-3 pb-3 pl-6 transition-all w-full hover:bg-slate-100">
            <a href="#company" className="text-md">Company</a>
          </li>
          <li className="cursor-pointer pt-3 pr-3 pb-3 pl-6 transition-all w-full hover:bg-slate-100">
            <a href="#work" className="text-md">Work</a>
          </li>
          <li className="cursor-pointer pt-3 pr-3 pb-3 pl-6 transition-all w-full hover:bg-slate-100">
            <a href="#members" className="text-md">Members</a>
          </li>
          <li className="cursor-pointer pt-3 pr-3 pb-3 pl-6 transition-all w-full hover:bg-slate-100">
            <a href="#contact" className="text-md">Contact</a>
          </li>
          <li className="cursor-pointer pt-3 pr-3 pb-3 pl-6 transition-all w-full hover:bg-slate-100">
            Related Business
            <ul className="pt-4 pl-4">
              <li className="pt-2 pr-2 pb-2 pl-2">
                <a className="text-sm">ENcounter ENgravers</a>
              </li>
              <li className="pt-2 pr-2 pb-2 pl-2">
                <a className="text-sm">ENART</a>
              </li>
              <li className="pt-2 pr-2 pb-2 pl-2">
                <a className="text-sm">ENIT</a>
              </li>
            </ul>
          </li>
          <li className="cursor-pointer pt-3 pr-8 pb-3 pl-3 flex gap-6 items-center justify-end">
            <a href="https://www.instagram.com/encounter_engravers/" target="_blank" rel="noreferrer">
              <AiOutlineInstagram size={24} />
            </a>
            <a href="https://www.instagram.com/encounter_engravers/" target="_blank" rel="noreferrer">
              <FaTiktok size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <div className="hidden">
        hero image
      </div>
    </header>
  )
}

export default Header