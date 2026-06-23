import './Products.css'
import verified from '../assets/verified.avif'
import pay from '../assets/pay.png'
import items from '../items'
const Products = () => {
  return (
    <>
    <main className='d-flex flex-wrap gap-3 align-content-center justify-content-center mb-3'>

     {items.map((item,index)=>(
           <card key={item.id} class="card p-1 shadow-lg" style={{ width: '17rem' }}>
         <img src={item.pic} class="card-img-top" alt="..." />

        <main  class="card-body">
           <p style={{height:'200px;',overflow:'auto'}} class="card-text">{item.dis}</p>
            
        </main>
        {item.price2===0?<h5 className="card-title fw-bolder">JOD {item.price1}</h5>:<h5 className="card-title fw-bolder">JOD {item.price1}-{item.price2}</h5> }
        
             <section className='d-flex align-items-center '>
               <img src={verified} alt='verfied' style={{width:'60px'}} />
               <div className='ms-2 text-secondary'>{item.year} yrs CN</div>
                        
             </section>

      </card>
     ) )}
     
      
     

    </main>
    
    <div className='d-flex align-items-center justify-content-center text-secondary ' style={{width:'100vw',height:'200px',fontSize:'18px'}}>
           You've reached the end of recommendations
    </div>

    <div className='d-flex flex-wrap gap-5 align-items-top mb-4 justify-content-center align-content-center text-center'>
       
       <section>
         <p className='fw-bold mb-2'>Get support</p>
         <p className=' mb-2'>Help Center</p>
         <p className=' mb-2'>Live chat</p>
         <p className=' mb-2'>Check order status</p>
         <p className=' mb-2'>Refunds</p>
         <p className=' mb-2'>Report abuse</p>
       </section>

       <section>
         <p className='fw-bolder mb-2'>Payments and protections</p>
         <p className=' mb-2'>Safe and easy payments</p>
         <p className=' mb-2'>On-time shipping</p>
         <p className=' mb-2'>After-sales protections</p>
         <p className=' mb-2'>Product monitoring services</p>
         <p className=' mb-2'>Money-back policy</p>
       </section>
       <section>
         <p className='fw-bolder mb-2'>Source on Alibaba.com</p>
         <p className=' mb-2'>Request for Quotation</p>
         <p className=' mb-2'>Membership program</p>
         <p className=' mb-2'>Sales tax and VAT</p>
         <p className=' mb-2'>Alibaba.com Reads</p>
         
       </section>
       <section>
         <p className='fw-bolder mb-2'>Sell on Alibaba.com</p>
         <p className=' mb-2'>Start selling</p>
         <p className=' mb-2'>Seller Central</p>
         <p className=' mb-2'>Become a Verified Supplier</p>
         <p className=' mb-2'>Partnerships</p>
         <p className=' mb-2'>Download the app for suppliers</p>
         
       </section>
       <section>
         <p className='fw-bolder mb-2'>Get to know us</p>
         <p className=' mb-2'>About Alibaba.com</p>
         <p className=' mb-2'>Corporate responsibility</p>
         <p className=' mb-2'>News center</p>
         <p className=' mb-2'>Careers</p>
         <p className=' mb-2 fw-bolder'>Stay Connected</p>
         
       </section>

    </div>


     <div className='d-flex  align-content-center justify-content-center mx-1' >
      <img  src={pay} alt='payment' style={{}}/>
      </div>   

      <footer style={{backgroundColor:'rgb(238, 234, 234)'}} className='p-2 footer d-flex flex-column flex-wrap  align-content-center justify-content-center align-items-center mt-4'>
      <p className='text-secondary text-center mx-2'>AliExpress | 1688.com | Tmall Taobao World | Alipay | Lazada | Taobao Global | TAO| Trendyol| Europages</p>
      <p className='text-secondary text-center mx-2'>Policies and rules.Legal Notice.Product Listing Policy.Intellectual Property Protection.Privacy Policy.Terms of Use.Integrity Compliance</p>
      <p className='text-secondary text-center mx-2'>© 1999-2026 Alibaba.com。版权所有：杭州阿里巴巴海外信息技术有限公司 增值电信业务经营许可证：浙B2-20241358 Business license verification icon GSXT verification icon 浙公网安备33010002000366 浙ICP备2024067534号-3</p>

      </footer> 
    </>
  )
}

export default Products