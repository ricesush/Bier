import Link from 'next/link'
import Logo from './img/NayongFilipino-Logo.png'
import Image from 'next/image'
import Contact from '../HomeComponents/contact'

export default function Footer() {
  return (
    <div className="bg-white container-border-top">
      <footer className='d-flex container py-4'>
        <section className='col-md-3'>
          <Link nk href="/" className="col d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <Image
              src={Logo}
              className='img-fluid'
              width={500}></Image>
          </Link>
        </section>
        <section className='border-start border-danger ms-3 ps-3'>
          <ul className="nav col-md-4 justify-content-start">
            <li className="nav-item"><Link href="/menu" className="nav-link px-2 text-body-secondary">Menu</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
          </ul>
        </section>
        <section className='border-start border-warning ms-3 ps-3'>
          <Contact />
        </section>
      </footer>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top container">
        
        <section>
          
        </section>
        <section className='col-md-4'> 
          
        </section>
      </footer>
    </div>
    
  )
}
