import './Cart.css'
import Navbar from './Navbar'
import cart from '../assets/cart.webp'
import pay2 from '../assets/pay2.avif'
import pay3 from '../assets/pay3.avif'
import pay4 from '../assets/pay4.avif'
const Cart = () => {
  return (
    <>
      <Navbar />

      <p className='p-4 fw-bold cart-txt1'>Shopping cart</p>

      <main className='d-flex flex-column align-items-center justify-content-center '>

        <section className='d-flex flex-wrap align-items-top align-content-center justify-content-center'>

          <div>
            <img className='cart-img' src={cart} alt='' />
          </div>

          <div>
            <p className='fw-bolder' style={{ fontSize: '22px' }}> Your shopping cart is empty.</p>
            <p className='' style={{ fontSize: '18px' }}> Alibaba.com order protection</p>

            <article className='d-flex align-items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="green" class="bi bi-shield-check" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
              </svg>
              <div className='' style={{ fontSize: '18px' }}>Secure payments</div>
              <div className='d-flex ms-1'>
                    <img src={pay2}  alt='' style={{width:'50px'}}/>
                    <img src={pay4}  alt='' style={{width:'32px'}}/>
                    <img src={pay3}  alt='' style={{width:'32px'}}/>
              </div>
             
            </article>
            <article className='d-flex align-items-center gap-1 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="green" class="bi bi-door-open" viewBox="0 0 16 16">
                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
              </svg>
              <div className='' style={{ fontSize: '18px' }}>Guaranteed delivery</div>
            </article>
            <article className='d-flex align-items-center gap-1 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="green" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
              </svg>
              <div className='' style={{ fontSize: '18px' }}>Money-back protection</div>
            </article>


          </div>


        </section>

        <section className='cart-dev2 d-flex align-items-center p-3  mt-4 justify-content-between rounded-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" className="me-4 bi bi-truck" viewBox="0 0 16 16">
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
          </svg>
          <div className='fw-bold '> <span style={{ color: "#FF6600" }}>FREE shipping</span> capped at JOD 14.18</div>

          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="ms-4 bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>

        </section>

      </main>
       <footer style={{backgroundColor:'rgb(238, 234, 234)'}} className='p-2 footer d-flex flex-column flex-wrap  align-content-center justify-content-center align-items-center mt-4'>
      <p className='text-secondary text-center mx-2'>AliExpress | 1688.com | Tmall Taobao World | Alipay | Lazada | Taobao Global | TAO| Trendyol| Europages</p>
      <p className='text-secondary text-center mx-2'>Policies and rules.Legal Notice.Product Listing Policy.Intellectual Property Protection.Privacy Policy.Terms of Use.Integrity Compliance</p>
      <p className='text-secondary text-center mx-2'>© 1999-2026 Alibaba.com。版权所有：杭州阿里巴巴海外信息技术有限公司 增值电信业务经营许可证：浙B2-20241358 Business license verification icon GSXT verification icon 浙公网安备33010002000366 浙ICP备2024067534号-3</p>

      </footer> 

    </>
  )
}

export default Cart