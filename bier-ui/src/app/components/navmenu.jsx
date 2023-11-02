import Link from "next/link"
import Image from "next/image"
import Logo from './img/NayongFilipino-Logo.png'
import { usePathname } from "next/navigation"
import Contact from "../HomeComponents/contact"

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
            <button className="nav-link navmenu border-start py-3" data-bs-toggle="modal" data-bs-target="#navContact">Contact</button>
            <Link className="nav-link navmenu border-start py-3 border-end" href="/about">About</Link>
          </div>
        </div>
      </div>

      <div class="modal fade" id="navContact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content container-border rounded">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Us</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body border-top border-warning">
                      <Contact />
                  </div>
              </div>
          </div>
      </div>
    </nav>

    
  )
}
