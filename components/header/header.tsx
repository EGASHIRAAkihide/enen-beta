import Image from 'next/image'

const Header = () => {
  return (
    <header>
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
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
      <div>image</div>
    </header>
  )
}

export default Header