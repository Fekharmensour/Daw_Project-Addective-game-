import { FaArrowCircleRight } from "react-icons/fa";

const Landing = () => {

   
        const shapes = [
          { type: 'circle', top: '66.59856996935649%', left: '13.020833333333334%', animationDelay: '-0.9s' },
          { type: 'triangle', top: '31.46067415730337%', left: '33.59375%', animationDelay: '-4.8s' },
          { type: 'cross', top: '76.50663942798774%', left: '38.020833333333336%', animationDelay: '-4s' },
        //   { type: 'square', top: '21.450459652706844%', left: '14.0625%', animationDelay: '-2.8s' },
          { type: 'square', top: '58.12053115423902%', left: '56.770833333333336%', animationDelay: '-2.15s' },
        //   { type: 'square', top: '8.682328907048008%', left: '72.70833333333333%', animationDelay: '-1.9s' },
          { type: 'cross', top: '31.3585291113381%', left: '58.541666666666664%', animationDelay: '-0.65s' },
        //   { type: 'cross', top: '69.96935648621042%', left: '81.45833333333333%', animationDelay: '-0.4s' },
          { type: 'circle', top: '15.117466802860061%', left: '32.34375%', animationDelay: '-4.1s' },
          { type: 'circle', top: '13.074565883554648%', left: '45.989583333333336%', animationDelay: '-3.65s' },
          { type: 'cross', top: '55.87334014300306%', left: '27.135416666666668%', animationDelay: '-2.25s' },
        //   { type: 'cross', top: '49.54034729315628%', left: '53.75%', animationDelay: '-2s' },
          { type: 'cross', top: '34.62717058222676%', left: '49.635416666666664%', animationDelay: '-1.55s' },
        //   { type: 'cross', top: '33.19713993871297%', left: '86.14583333333333%', animationDelay: '-0.95s' },
          { type: 'square', top: '28.19203268641471%', left: '25.208333333333332%', animationDelay: '-4.45s' },
          { type: 'circle', top: '39.7344228804903%', left: '10.833333333333334%', animationDelay: '-3.35s' },
          { type: 'triangle', top: '77.83452502553627%', left: '24.427083333333332%', animationDelay: '-2.3s' },
        //   { type: 'triangle', top: '2.860061287027579%', left: '47.864583333333336%', animationDelay: '-1.75s' },
          { type: 'triangle', top: '71.3993871297242%', left: '66.45833333333333%', animationDelay: '-1.25s' },
        //   { type: 'triangle', top: '31.256384065372828%', left: '76.92708333333333%', animationDelay: '-0.65s' },
          { type: 'triangle', top: '46.47599591419816%', left: '38.90625%', animationDelay: '-0.35s' },
          { type: 'cross', top: '3.4729315628192032%', left: '19.635416666666668%', animationDelay: '-4.3s' },
          { type: 'cross', top: '3.575076608784474%', left: '6.25%', animationDelay: '-4.05s' },
        //   { type: 'cross', top: '77.3237997957099%', left: '4.583333333333333%', animationDelay: '-3.75s' },
          { type: 'cross', top: '0.9193054136874361%', left: '71.14583333333333%', animationDelay: '-3.3s' },
        //   { type: 'square', top: '23.6976506639428%', left: '63.28125%', animationDelay: '-2.1s' },
          { type: 'square', top: '81.30745658835546%', left: '45.15625%', animationDelay: '-1.75s' },
        //   { type: 'square', top: '60.9805924412666%', left: '42.239583333333336%', animationDelay: '-1.45s' },
          { type: 'square', top: '29.009193054136876%', left: '93.90625%', animationDelay: '-1.05s' },
          { type: 'square', top: '52.093973442288046%', left: '68.90625%', animationDelay: '-0.7s' },
          { type: 'square', top: '81.51174668028601%', left: '83.59375%', animationDelay: '-0.35s' },
        //   { type: 'square', top: '11.542390194075587%', left: '91.51041666666667%', animationDelay: '-0.1s' },
        ];
      

return(
    <div className="landing text-center p-3 row   ">
        <div class="backwrap gradient">
        <div class="back-shapes">
            {shapes.map((shape, index) => (
                <span key={index} className={`floating ${shape.type}`} style={{ top: shape.top, left: shape.left, animationDelay: shape.animationDelay }}></span>
            ))}
        </div>
    </div>
        <div className="col-lg-6 p-4 col-md-6 col-sm-12 d-flex justify-content-lg-center    ">
            <div className="d-flex flex-column">
                <h1 className="title text-start mb-4 ">
                    Are Video Games <br /> Taking Over  Your <br /> Live ?  
                 </h1>
              
                <div style={{width:"fit-content"}} className="btn  px-4 py-1 d-flex align-items-center ">
                     
                    <span className="me-3">Get Start </span>
                    <FaArrowCircleRight/>
                </div>
            </div>
        </div>
        <div className="image  col-lg-5 col-md-4 col-sm-0 me-3">
            <img src="./img/addect_game.png" alt=""  width={390}/>
        </div>
    </div>
)
}
export default Landing ;