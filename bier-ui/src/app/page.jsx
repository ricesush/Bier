import Image from 'next/image'
import ImgLaing from './components/img/Nayong Filipino - laing.jpg'
import ImgKareKare from './components/img/Nayong Filipino - kareKare.jpg'
import ImgFood1 from './components/img/Nayong Filipino - food1.jpg'
import ImgLechongKawali from './components/img/Nayong Filipino - lechongKawali.jpg'
import ImgAfritada from './components/img/Nayong Filipino - afritada.jpg'
import LogoPng from './components/img/NayongFilipino-Logo.webp'
import styles from './page.module.css'
import Menu from './HomeComponents/menu'
import Contact from './HomeComponents/contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='home-css'>
        <section className='py-2 glassmorph bg-opacity-50'>
          <div className=" mx-auto row  g-2">
            <div className="col">
              <div className="card border border-1 rounded-0 text-bg-dark shadow">
                <Image src={ImgLaing} className="d-block rounded-0 img-fluid card-img card-height" alt="Laing" />
              </div>
            </div>
            <div className="col">
              <div className="card border border-1 rounded-0 text-bg-dark shadow">
                <Image src={ImgKareKare} className="d-block rounded-0 img-fluid card-img card-height" alt="Kare Kare" />
              </div>
            </div>
            <div className="col">
              <div className="card border border-1 rounded-0 text-bg-dark shadow">
                <Image src={ImgFood1} className="d-block rounded-0 img-fluid card-img card-height" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card border border-1 rounded-0 text-bg-dark shadow">
                <Image src={ImgLechongKawali} className="d-block rounded-0 img-fluid card-img card-height" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card border border-1 rounded-0 text-bg-dark shadow">
                <Image src={ImgAfritada} className="d-block rounded-0 img-fluid card-img card-height" alt="..." />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-glassmorph pb-5 pt-3 text-center intro-css'>
          <div className='mx-auto text-center pb-4 '>
            <Image src={LogoPng} className='img-fluid col-2 ' />
            <p className='text-quote-css border-1 text-14px border-warning  border-top col-4 pt-1 mx-auto'>Mabuhay! From Manila to Union City, we’re bringing the rich, authentic flavors of Filipino cuisine</p>
          </div>
          <div className='container d-flex justify-content-center align-items-center rounded px-0'>
            <iframe 
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthenayongfilipino%2Fvideos%2F4303593676533361%2F&show_text=false&width=476&t=0"
              width="476" 
              height="476" 
              style={{'border':'none', 'overflow':'hidden'}}
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
          </div>
        </section>
        <section className='bg-white bg-opacity-75 py-5'>
          <Menu />
        </section>
      </div>
    </main>
  )
}
