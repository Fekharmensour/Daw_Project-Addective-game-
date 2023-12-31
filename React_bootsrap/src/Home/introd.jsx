import React from 'react'

const Introd = () => {
  return (
    <div>
        <div className='container_small'>
        <div className="main-head">
            <h2>Intro</h2>
        </div>
        <div  className="row g-4  d-flex justify-content-around pb-5">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
               <div className="img_intro ">
               <img src="img/addection_games.jpg" alt=""  width={350}/>
               </div>
            </div>
            <div className="col-lg-6 fs-5 text-white p-4 ps-5 m-0">
                Dedicated to tackling video game addiction, 
                our platform provides valuable resources, self-assessment tools, 
                and a supportive community. Navigate towards a healthier relationship with 
                gaming by accessing insightful content and engaging in discussions with those on a similar journey.
                 Start your path to recovery today.
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Introd
