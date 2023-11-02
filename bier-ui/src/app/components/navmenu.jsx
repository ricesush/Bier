import Link from "next/link"
import Image from "next/image"
import Logo from './img/NayongFilipino-Logo.png'
import { usePathname } from "next/navigation"

export default function NavMenu() {


  return (
    <nav className="navbar navbar-expand-lg py-0 bg-body-tertiary shadow">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image
            src={Logo}
            alt="Nayong Filipino Logo"
            className="img-fluid"
            width={100}
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link navmenu border-start py-3" aria-current="page" href="/">Home</Link>
            <Link className="nav-link navmenu border-start py-3" href="/menu">Menu</Link>
            <Link className="nav-link navmenu border-start py-3" href="/contact">Contact</Link>
            <Link className="nav-link navmenu border-start py-3 border-end" href="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
