import React from 'react'

const Services = () => {
  return (
    <div className='container_small mb-5'>
       <div className="main-head">
            <h2>Services</h2>
      </div>
      <div  className="row g-4   pb-5">
            <div className="col-lg-4 col-sm-6 wow fadeInUp rounded-4" data-wow-delay="0.1s" data-aos="fade-right" style={{transition :"0.9s"}}>
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-user-tie text-primary mb-4 text-warning"></i>
                        <h5>+38 Doctors</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" data-aos="fade-right" style={{transition :"0.9s"}}>
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-utensils text-primary mb-4 text-warning"></i>
                        <h5>+150 Patient</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" data-aos="fade-left" style={{transition :"0.9s"}}>
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-cart-plus text-primary mb-4 text-warning"></i>
                        <h5>Online chat</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
