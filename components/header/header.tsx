import Image from 'next/image'
import { GiHamburger } from 'react-icons/gi'

const Header = () => {
  return (
    <header className="bg-slate-300">
      <nav>
        <div>
          <Image
            src="/logo.png"
            alt="ENEN"
            width="100%"
            height="100%"
          />
        </div>
        <ul>
          <li>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div>
          <GiHamburger />
        </div>
      </nav>
      <div>
        hero image
      </div>
    </header>
  )
}

export default Header