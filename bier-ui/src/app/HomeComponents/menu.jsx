import Image from "next/image"
import Link from "next/link"
import MenuModal from "./menuModal"
import PDBeefMechado from '../components/img/PopularDish-BeefMechado.jpg'
import PDChickenBbq from '../components/img/PopularDish-ChickenBbq.jpg'
import PDHaloHalo from '../components/img/PopularDish-HaloHalo.jpg'
import PDKareKare from '../components/img/PopularDish-KareKare.jpg'
import PDLecheflan from '../components/img/PopularDish-Lecheflan.jpg'
import PDLumpiangShanghai from '../components/img/PopularDish-LumpiangShanghai.jpg'
import PDPansitBihon from '../components/img/PopularDish-PansitBihon.jpg'
import PDPinakbet from '../components/img/PopularDish-Pinakbet.jpg'
import PDPorkBbq from '../components/img/PopularDish-PorkBbq.jpg'

export default function Menu() {
  const PopularDishes = [ PDBeefMechado,
    PDChickenBbq,
    PDHaloHalo,
    PDKareKare,
    PDLecheflan,
    PDLumpiangShanghai,
    PDPansitBihon,
    PDPinakbet,
    PDPorkBbq,
  ]
  const Keys = Object.keys(PopularDishes)

  return (
    <section className="container">
      <section className="d-flex align-items-center justify-content-between">
        <h2 className="text-blue border-start border-4 border-danger ps-3 mb-3">
          Popular Dishes
        </h2>
        <Link href="/menu" className="text-center align-center text-dark btn btn-outline-warning shadow">View Menu <i class="bi bi-arrow-right"></i></Link>
      </section>
      <section>
        <div className="row row-cols-2 row-cols-lg-4 g-4">
          <div className="col" data-bs-toggle="modal" data-bs-target="#dish0">
            <div className="card shadow">
              <Image src={PopularDishes[0]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Beef Mechado</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$23.99</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish0"
          title="Beef Mechado"
          details="Braised tender slices of beef in tangy tomato sauce topped with potato wedges and bell pepper." />

          <div className="col" data-bs-toggle="modal" data-bs-target="#dish1">
            <div className="card shadow">
              <Image src={PopularDishes[1]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Pork BBQ (1 stick)</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$4.79</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish1"
          title="Pork BBQ"
          details='Grilled 8" skewered pork with sweet and tangy Filipino style basting.' />

          <div className="col">
            <div className="card shadow" data-bs-toggle="modal" data-bs-target="#dish2">
              <Image src={PopularDishes[2]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Halo Halo</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$7.80</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish2"
          title="Halo Halo"
          details='Signature Filipino dessert consist of sweet white beans, mongo beans, garbanzo beans, coconut jelly, coconut meat, coconut beans, ube in shaved ice, milk and ice cream choice of mango, langka or avocado. Ice cream availability subject to change without notice. 8" skewered pork with sweet and tangy Filipino style basting.' />

          <div className="col">
            <div className="card shadow" data-bs-toggle="modal" data-bs-target="#dish3">
              <Image src={PopularDishes[3]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Kare Kare</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$23.99</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish3"
          title="Kare Kare"
          details='Tender chopped oxtail and Asian vegetables in peanut sauce. Shrimp paste on the side included.' />

          <div className="col">
            <div className="card shadow" data-bs-toggle="modal" data-bs-target="#dish4">
              <Image src={PopularDishes[4]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Lecheflan</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$28.79</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish4"
          title="Lecheflan"
          details='8" round Filipino style creme brulee for the whole family and beyond' />

          <div className="col">
            <div className="card shadow" data-bs-toggle="modal" data-bs-target="#dish5">
              <Image src={PopularDishes[5]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Lumpiang Shanghai</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$21.59</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish5"
          title="Lumpiang Shanghai"
          details='Pork filled fried egg roll with sweet and sour sauce on the side.' />

          <div className="col">
            <div className="card shadow" data-bs-toggle="modal" data-bs-target="#dish6">
              <Image src={PopularDishes[6]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Pancit Bihon</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$19.19</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish6"
          title="Pancit Bihon"
          details='Rice noodles, chicken, shrimp, and veggies wok fried in soy sauce and spices.' />

          <div className="col">
            <div className="card shadow" data-bs-toggle="modal" data-bs-target="#dish7">
              <Image src={PopularDishes[7]} className="card-img-top menu-card-height" alt="..." />
              <div className="card-body p-0 d-flex justify-content-between label-border-css">
                <h5 className="card-title m-0 p-3">Pinakbet</h5>
                <p className="card-title m-0 p-3 bg-yellow  text-blue">$19.19</p>
              </div>
            </div>
          </div>
          <MenuModal 
          id="dish7"
          title="Pinakbet"
          details='Stir-fried Asian vegetables such as Chinese eggplant, long beans, bitter melon and squash with pork, shrimp and shrimp paste.' />
        </div>
      </section>
    </section>
  )
}
