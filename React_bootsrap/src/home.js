
import { Head } from './Home/header';
import 'bootstrap/dist/js/bootstrap.js';
import Landing from './Home/landing';
import Services from './Home/Services';
import Introd from './Home/introd';
import Reviws from './Home/reviws';


const Home = () =>{
  
return(
   <div className='home'>
      <Head />
      <Landing />
      <Services/>
      <Introd/>
      <Reviws/>
   </div>
)
}
export default Home;