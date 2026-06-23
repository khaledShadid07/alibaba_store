import './Main.css'

import pic1_main from '..//assets/pic1_main.avif'
import pic2_main from '..//assets/pic2_main.avif'
import pic3_main from '..//assets/pic3_main.avif'
import pic4_main from '..//assets/pic4_main.avif'
import pic5_main from '..//assets/pic5_main.avif'

import pic1_main2 from '..//assets/cam.avif'
import pic2_main2 from '..//assets/pic2_main2.avif'
import pic3_main2 from '..//assets/pic3_main2.avif'
import pic4_main2 from '..//assets/pic4_main2.avif'
import Navbar from './Navbar'
import Products from './Products'

const Main = () => {
  return (
   <>
   
       <Navbar />


      <header className='top-header flex-wrap  d-flex align-content-center align-items-center justify-content-between p-4'>

        <div className='top-header-left fw-bold align-items-center justify-content-center text-center d-flex  align-content-center mb-4'>Welcome to Alibaba.com</div>

        <div className='top-header-right d-flex flex-wrap justify-content-center mb-4'>

          <div className='d-flex align-items-center border-end p-1 border-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" bi bi-bullseye" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
            <div className='fw-bold ms-1 top-header-text'>Request for Quotation</div>

          </div>

          <div className='d-flex align-items-center border-end p-1 border-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
              <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
            </svg>
            <div className='fw-bold ms-1 top-header-text'>Top Ranking</div>

          </div>

          <div className='d-flex align-items-center  p-1 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-rocket" viewBox="0 0 16 16">
              <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8" />
              <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z" />
              <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z" />
            </svg>
            <div className='fw-bold ms-1 top-header-text'>Fast customization</div>

          </div>

        </div>

      </header>

      <main className='d-flex mx-1 main flex-wrap align-content-center justify-content-center'>
        <div className='main-left mt-3'>
          <ul class="list-group">

            <li class="list-group-item d-flex align-items-center " aria-current="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
              </svg>
              <div className='fw-bold mx-2 list-text '>Categories for you</div>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-auto bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </li>

            <li class="list-group-item d-flex align-items-center " aria-current="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-person-standing-dress" viewBox="0 0 16 16">
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z" />
              </svg>
              <div className='fw-bold mt- mx-2 list-text'>
                Apparel & Accessories</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-auto bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </li>


            <li class="list-group-item d-flex align-items-center " aria-current="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
              </svg>
              <div className='fw-bold mt- mx-2 list-text'>Consumer Electronics</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-auto bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </li>

            <li class="list-group-item d-flex align-items-center " aria-current="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
                <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z" />
                <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3" />
              </svg>
              <div className='fw-bold mt- mx-2 list-text'>
                Sports & Entertainment</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-auto bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </li>
            <li class="list-group-item d-flex align-items-center " aria-current="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-balloon-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398" />
              </svg>
              <div className='fw-bold mt- mx-2 list-text'>
                Beauty</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-auto bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </li>
            <li class="list-group-item d-flex align-items-center " aria-current="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-watch" viewBox="0 0 16 16">
                <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z" />
                <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A6 6 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a6 6 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A6 6 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0" />
              </svg>
              <div className='fw-bold mt- mx-2 list-text'>
                Jewelry, Eyewear & Watches</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-auto bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
              </svg>
            </li>


          </ul>

        </div>
          
        <div className='main-middle rounded-3 mt-3'>

          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner ">

              <div className="carousel-item active ">  {/*  carosal item start */}

                <section className='row'>

                <div className='d-flex col-6 flex-column align-items-center  justify-content-center text-center'>
                  <p className='fw-bold text-carosal'>Frequently searched</p>
                  <p  className='fw-bold text-carosal2'>Video Cameras</p>
                  <img  src={pic1_main2} className="d-block w-50 main-pics2" alt="..." />
                </div>
                
                <div className='d-flex col-6 flex-column align-items-center justify-content-center  align-content-center'>
                  <p className='fw-bold text-carosal'>Frequently searched</p>
                  <p className='fw-bold text-carosal2'>New Energy Truck</p>
                  <img src={pic2_main2} className="d-block w-50 main-pics2" alt="..." />
                </div>
                
                </section>
                
              </div>  {/* carosal item end */}
              
              <div className="carousel-item  ">  {/*  carosal item start */}

                <section className='row'>

                <div className='d-flex col-6 flex-column align-items-center  justify-content-center text-center'>
                  <p className='fw-bold text-carosal'>Frequently searched</p>
                  <p className='fw-bold text-carosal2'>Digital Cameras</p>
                  <img src={pic3_main2} className="d-block w-50 main-pics2" alt="..." />
                </div>
                
                <div className='d-flex col-6 flex-column align-items-center justify-content-center  align-content-center'>
                  <p className='fw-bold text-carosal'>Frequently searched</p>
                  <p className='fw-bold text-carosal2'>Camera Lenses</p>
                  <img src={pic4_main2} className="d-block w-50 main-pics2" alt="..." />
                </div>
                
                </section>
                
              </div>  {/* carosal item end */}
              


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div className='main-right rounded-3 mt-3'>

          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner bg-success">
              <div class="carousel-item active">
                <img src={pic1_main} className="d-block w-100 main-pics" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={pic2_main} class="d-block w-100 main-pics" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={pic3_main} class="d-block w-100 main-pics" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={pic4_main} class="d-block w-100 main-pics" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={pic5_main} class="d-block w-100 main-pics" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        
        
      </main>
      
       <div  className='d-flex align-content-center justify-content-center algin-item-center mt-3 mb-3 text-secondary recomend-txt'>
                Recommended for your business
         </div>

         <Products />

   
   </>
  )
}

export default Main