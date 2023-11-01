import Link from "next/link"

export default function NavMenu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0 shadow">
      <div className="container">
        <a className="navbar-brand" href="/">Nayong Filipino</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            <Link className="nav-link" href="/about">About</Link>
            <Link className="nav-link" href="/contact">Contact</Link>
            <Link className="nav-link" href="/services">Services</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
