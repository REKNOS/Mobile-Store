import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <header class="bg-primary text-white text-left ">
      <div class="card-top">
        <img
          class="card-img-top"
          src="https://www.apzomedia.com/wp-content/uploads/2019/09/smart-phones-under-20000.jpg"
          alt=""
        />
        <h2>
          "The Mobile Store is a successful and growing business at the heart of
          the mobile phone sector which serves diverse customers through our
          retail. For retail customers, Mobile Store Online has become a byword
          for mobiles, parts, accessories, services, and repairs through our
          four outlets in Loughton, Letchworth & Hitchin. Mobile Store’s success
          to date has mainly been built on our dedication to providing excellent
          customer service, treating each customer as special and going the
          extra mile, whenever necessary, to find the right products and
          services.{" "}
        </h2>
        <h2>You Always Wanted"</h2>

        <div class="input-group mt-4">
          <button class="btn btn-primary text-align-centre">Get started</button>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3 mt-5">
            <div class="card mycard">
              <img
                class="card-img-top"
                src="https://m.media-amazon.com/images/I/31VjlrbE3bL.jpg"
                alt=""
              />
              <div class="card-body">
                <h4>Iphone </h4>
                <p class="text-muted">
                  The iPhone 14 features the same A15 Bionic chip that powered
                  the iPhone 13 Pro and iPhone 13 Pro Max.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-5">
            <div class="card mycard">
              <img
                class="card-img-top"
                src="https://images.samsung.com/in/smartphones/galaxy-z-fold4/images/galaxy-z-fold4_highlights_kv.jpg"
                alt=""
              />
              <div class="card-body">
                <h4>Samsung</h4>
                <p class="text-muted">
                  OnePlus 10 Pro ; Resolution, 1440 x 3216 pixels, 20:9 ratio
                  (~525 ppi density) ; Protection, Corning Gorilla Glass Victus
                  ; Platform, OS ; Chipset, Qualcomm SM8450 ... Internal: 128GB
                  8GB RAM, 256GB 8GB RAM, ... Resolution: 1440 x 3216 pixels,{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-5">
            <div class="card mycard">
              <img
                class="card-img-top"
                src="https://www.91-cdn.com/hub/wp-content/uploads/2021/11/OnePlus-10-Pro.jpg"
                alt=""
              />
              <div class="card-body">
                <h4>OnePlus</h4>
                <p class="text-muted">
                  OnePlus 10 Pro ; Resolution, 1440 x 3216 pixels, 20:9 ratio
                  (~525 ppi density) ; Protection, Corning Gorilla Glass Victus
                  ; Platform, OS ; Chipset, Qualcomm SM8450 ... Internal: 128GB
                  8GB RAM, 256GB 8GB RAM, ... Resolution: 1440 x 3216 pixels.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-5">
            <div class="card mycard">
              <img
                class="card-img-top"
                src="https://cdn.celekt.com/wp-content/uploads/2022/08/16135928/v25-Pure-Black-4.webp"
                alt=""
              />
              <div class="card-body">
                <h4>VIVO</h4>
                <p class="text-muted">
                  the 16.66cm (6.56-inch) 3D Curved POLED screen supports a high
                  refresh rate of 120Hz and a high sampling rate of 300Hz.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
