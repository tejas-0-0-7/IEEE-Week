import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import './Home.css';
import Slider from '../Components/Slider.js';
import './Slider.css'
import data from '../Components/data.js'
import CountDown from '../Components/CountDown.js';


function Home() {
  return (
    <div>
        <Navbaring />
        <div className="H-container">
          <h1><center>BMSCE IEEE Presents</center></h1>
          <h1><center>IEEE Week 2024</center></h1>
          <h1><center>October 21<sup>st</sup  ></center></h1>
        </div>
        <CountDown />
        <div className='center'>
          <Slider  data={data} activeSlide={5} />
        </div>
        <Footer />
    </div>

    );
}

export default Home;