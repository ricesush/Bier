import React from 'react'

export default function Services() {
  return (
    <main className='home-css'>
      <section className='glassmorph py-5'>
        <div className='container bg-white  container-border rounded p-5'>
          <h2 className=''>
            <i class="bi bi-book"></i> Menu 
          </h2>
          <section>
            <table class="table table-hover border-yellow">
              <thead>
                <tr>
                  <th scope="col" className='col-3'></th>
                  <th scope="col"></th>
                  <th scope="col" className='col-1'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="3" className='pt-5 text-main-blue'>Breakfast Menu All Day</th>
                </tr>
                <tr>
                  <td scope="row">Bangsilog</td>
                  <td>Bangus fried, sinangag,and itlog (fried marinated milkfish, garlic fried rice, and fried eggs).</td>
                  <td>$17.99</td>
                </tr>
                <tr>
                  <td scope="row">Tosilog</td>
                  <td>Tocino, sinangag, and itlog (sweet cured pork, garlic fried rice, and fried eggs).</td>
                  <td>$17.99</td>
                </tr>
                <tr>
                  <td scope="row">Longsilog</td>
                  <td>Longanisa, sinangag, and itlog (sweet filipino sausage, garlic fried rice, and fried eggs).</td>
                  <td>$17.99</td>
                </tr>
                <tr>
                  <td scope="row">Sisig Silog</td>
                  <td>Sisig, sinangag, and itlog (our signature sisig, garlic fried rice, and fried eggs). .Sisig is chopped, marinated, grilled pork topped with our special sauce, onions and jalapenos.</td>
                  <td>$17.99</td>
                </tr>
                <tr>
                  <th colSpan="3" className='pt-5 text-main-blue'>Large Family Pork and Beef Menu</th>
                </tr>
                <tr>
                  <td scope="row">Beef Mechado (32oz)</td>
                  <td>Beef Mechado (32oz) Braised tender slices of beef in tangy tomato sauce topped with potato wedges and bell pepper.</td>
                  <td>$23.99</td>
                </tr>
                <tr>
                  <td scope="row">Lechon Kawali</td>
                  <td>Succulent deep-fried pork belly with sauce ison the side.</td>
                  <td>$21.59</td>
                </tr>
                <tr>
                  <td scope="row">Lumpiang Shanghai</td>
                  <td>Pork filled fried egg roll with sweet and sour sauce on the side.</td>
                  <td>$21.59</td>
                </tr>
                <tr>
                  <td scope="row">Pork Sinigang (32oz)</td>
                  <td>Pork cubes in tamarind based soup with long beans, bok choy and chinese eggplant.</td>
                  <td>$21.59</td>
                </tr>

                <tr>
                  <th colSpan="3" className='pt-5 text-main-blue'>Large Family Chicken and Seafood Menu</th>
                </tr>
                <tr>
                  <td scope="row">Bangus Sisig</td>
                  <td>Fried milkfish flaked and mixed with onions, pepper and egg then topped with mayonnaise.</td>
                  <td>$20.99</td>
                </tr>
                <tr>
                  <td scope="row">Chicken Adobo</td>
                  <td>32 oz. Chicken braised in soy sauce, vinegar, lots of garlic and other spices. A Filipino staple dish.</td>
                  <td>$19.18</td>
                </tr>
                <tr>
                  <td scope="row">Chicken BBQ (1 stick)</td>
                  <td>Grilled 8" skewered chicken with sweet and tangy Filipino style basting.</td>
                  <td>$4.79</td>
                </tr>

                <tr>
                  <th colSpan="3" className='pt-5 text-main-blue'>Large Family Noodle & Vegetable Menu</th>
                </tr>
                <tr>
                  <td scope="row">Pancit Bihon</td>
                  <td>Rice noodles, chicken, shrimp, and veggies wok fried in soy sauce and spices.</td>
                  <td>$19.19</td>
                </tr>
                <tr>
                  <td scope="row">Pancit Canton</td>
                  <td>Cantonese style noodles wok fried with chicken, shrimp, and veggie. Flavored with sesame oil.</td>
                  <td>$19.19</td>
                </tr>
                <tr>
                  <td scope="row">Pancit Palabok</td>
                  <td>Thin rice noodles with mixed seafood rich sauce.</td>
                  <td>$19.19</td>
                </tr>
                <tr>
                  <td scope="row">Pinakbet</td>
                  <td>Stir-fried Asian vegetables such as Chinese eggplant, long beans, bitter melon and squash with pork, shrimp and shrimp paste.</td>
                  <td>$19.19</td>
                </tr>
                <tr>
                  <td scope="row">Sitaw Kalabasa sa Gata</td>
                  <td>32 oz. Squash, long beans, shrimp and pork cooked in coconut milk.</td>
                  <td>$19.19</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </main>
  )
}
